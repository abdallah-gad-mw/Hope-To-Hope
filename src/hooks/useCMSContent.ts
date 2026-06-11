import { useState, useEffect } from "react";

/**
 * Custom React hook to retrieve content dynamically from our Express CMS server
 * or an external production Strapi v5 headless backend if configured.
 * 
 * @param filename Name of content file (without .json extension)
 * @param staticBackup The local statically compiled JSON backup
 * @returns The active state-driven content object
 */
export function useCMSContent<T>(filename: string, staticBackup: T): T {
  const [content, setContent] = useState<T>(staticBackup);

  useEffect(() => {
    let active = true;
    
    // Check if an external Strapi API is configured through the environment variables
    const strapiUrl = import.meta.env.VITE_STRAPI_API_URL;
    const targetUrl = strapiUrl 
      ? `${strapiUrl}/api/${filename.replace("_", "-")}?populate=*`
      : `/api/content/${filename}`;

    fetch(targetUrl)
      .then((res) => {
        if (!res.ok) throw new Error("API retrieval failed");
        return res.json();
      })
      .then((resBody) => {
        if (!active) return;

        // In Strapi v5, the payload returns fields directly under data: { id, data: { ... } }
        if (strapiUrl && resBody && resBody.data) {
          // Flatten standard Strapi structure if nested under attributes/data
          const fields = resBody.data.attributes || resBody.data;
          setContent(fields as T);
        } else {
          // Standard local Express API payload
          setContent(resBody as T);
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
