import { useState, useEffect } from "react";

/**
 * Custom React hook to retrieve content dynamically from our Express CMS server.
 * Automatically falls back to statically imported local JSON file structure if connection loses 
 * or during server restart.
 * 
 * @param filename Name of content file (without .json extension)
 * @param staticBackup The local statically compiled JSON backup
 * @returns The active state-driven content object
 */
export function useCMSContent<T>(filename: string, staticBackup: T): T {
  const [content, setContent] = useState<T>(staticBackup);

  useEffect(() => {
    let active = true;
    fetch(`/api/content/${filename}`)
      .then((res) => {
        if (!res.ok) throw new Error("Status code indicates failure");
        return res.json();
      })
      .then((data) => {
        if (active) {
          setContent(data);
        }
      })
      .catch(() => {
        // Fallback silently to our statically compiled data node
        if (active) {
          setContent(staticBackup);
        }
      });

    return () => {
      active = false;
    };
  }, [filename, staticBackup]);

  return content;
}
