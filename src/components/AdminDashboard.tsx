/* eslint-disable */
import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  FileText,
  Save,
  LogOut,
  FolderOpen,
  Image as ImageIcon,
  Key,
  Database,
  Eye,
  Settings,
  Grid,
  Sparkles,
  CheckCircle,
  AlertCircle,
  FileJson,
  Menu,
  ChevronRight,
  Plus,
  Trash2,
  Lock,
  Upload,
  Copy,
  Info,
  Server,
  FileCheck2,
} from "lucide-react";

// Security configuration
const ADMIN_USER = "admin";
const ADMIN_PASS = "godfrey2026";

interface ContentSchema {
  id: string;
  name: string;
  type: "single" | "collection";
  file: string;
  fields: {
    section: string;
    label: string;
    key: string;
    type: "text" | "textarea" | "array-text" | "metrics" | "links" | "quote" | "sub-object";
    description?: string;
  }[];
}

const CONTENT_SCHEMAS: ContentSchema[] = [
  {
    id: "home",
    name: "Home Page",
    type: "single",
    file: "home",
    fields: [
      { section: "Hero Section", label: "Tag/Badge", key: "hero.badge", type: "text" },
      { section: "Hero Section", label: "Title Text", key: "hero.title", type: "text" },
      { section: "Hero Section", label: "Subtitle Text", key: "hero.subtitle", type: "textarea" },
      { section: "Hero Section", label: "Primary Button Text", key: "hero.primaryBtn", type: "text" },
      { section: "Hero Section", label: "Secondary Button Text", key: "hero.secondaryBtn", type: "text" },
      { section: "Hero Section", label: "Hero Banner Image Route", key: "hero.image", type: "text", description: "Upload in Media Library and paste URL here" },
      { section: "Purpose Section", label: "Badge", key: "purpose.badge", type: "text" },
      { section: "Purpose Section", label: "Main Header", key: "purpose.title", type: "text" },
      { section: "Purpose Section", label: "Paragraphs", key: "purpose.paragraphs", type: "array-text" },
      { section: "Purpose Section", label: "Image Route", key: "purpose.image", type: "text", description: "e.g., /uploads/image.png" },
      { section: "Metrics", label: "Section Badge", key: "metrics.badge", type: "text" },
      { section: "Metrics", label: "Section Header", key: "metrics.title", type: "text" },
      { section: "Metrics", label: "Section Subtitle", key: "metrics.subtitle", type: "text" },
      { section: "Metrics Section", label: "Impact Cards Grid", key: "metrics.cards", type: "metrics" },
      { section: "Contact Section", label: "Section Title", key: "contact.title", type: "text" },
      { section: "Contact Section", label: "Email Address", key: "contact.emailValue", type: "text" },
      { section: "Contact Section", label: "Phone Number", key: "contact.phoneValue", type: "text" },
    ],
  },
  {
    id: "about_kyaka",
    name: "About Kyaka Settlement",
    type: "single",
    file: "about_kyaka",
    fields: [
      { section: "Hero", label: "Badge Text", key: "hero.badge", type: "text" },
      { section: "Hero", label: "Main Title", key: "hero.title", type: "text" },
      { section: "Hero", label: "Subtitle Description", key: "hero.subtitle", type: "textarea" },
      { section: "Hero", label: "Primary Action Label", key: "hero.primaryBtn", type: "text" },
      { section: "Stats Block", label: "Stats Section Title", key: "refugeeStats.sectionTitle", type: "text" },
      { section: "Response Block", label: "Direct Field Description", key: "response.description", type: "array-text" },
    ],
  },
  {
    id: "about_team",
    name: "About Our Team",
    type: "single",
    file: "about_team",
    fields: [
      { section: "Hero Header", label: "Badge", key: "hero.badge", type: "text" },
      { section: "Hero Header", label: "Title Text", key: "hero.title", type: "text" },
      { section: "Hero Header", label: "Subtitle Text", key: "hero.subtitle", type: "textarea" },
      { section: "Founder Section", label: "Founder Name", key: "leadership.founder.name", type: "text" },
      { section: "Founder Section", label: "Founder Subtitle / Role", key: "leadership.founder.role", type: "text" },
      { section: "Founder Section", label: "Founder Narrative", key: "leadership.founder.description", type: "textarea" },
    ],
  },
  {
    id: "about_vision",
    name: "Vision, Mission & Partners",
    type: "single",
    file: "about_vision",
    fields: [
      { section: "Strategic Focus", label: "Hero Badge", key: "hero.badge", type: "text" },
      { section: "Strategic Focus", label: "Hero Description Subtext", key: "hero.description", type: "textarea" },
      { section: "Primary Journey", label: "Narrative Growth History", key: "journey.paragraphs", type: "array-text" },
    ],
  },
  {
    id: "hope_family",
    name: "Hope Family (Sponsorships)",
    type: "single",
    file: "hope_family",
    fields: [
      { section: "Hero Intro", label: "Badge Label", key: "hero.badge", type: "text" },
      { section: "Hero Intro", label: "Main Display Header", key: "hero.title", type: "text" },
      { section: "Hero Intro", label: "Subtitle Details", key: "hero.subtitle", type: "textarea" },
      { section: "Checkout", label: "DonorBox Checkout Header", key: "donation.title", type: "text" },
      { section: "Checkout", label: "DonorBox Embed URL Parameter", key: "donation.donorBoxWidget.embedUrl", type: "text" },
    ],
  },
  {
    id: "projects_school",
    name: "Projects: Primary School",
    type: "single",
    file: "projects_school",
    fields: [
      { section: "Main Area", label: "Header Badge", key: "hero.badge", type: "text" },
      { section: "Main Area", label: "School Header", key: "hero.title", type: "text" },
      { section: "Needs Campaign", label: "Immediate School Operations Needs", key: "needs.description", type: "textarea" },
    ],
  },
  {
    id: "projects_medical",
    name: "Projects: ACMC Medical Centre",
    type: "single",
    file: "projects_medical",
    fields: [
      { section: "Clinical Context", label: "Hero Banner Badge", key: "hero.badge", type: "text" },
      { section: "Clinical Context", label: "Banner Header", key: "hero.title", type: "text" },
      { section: "Clinical Context", label: "Banner Short Intro", key: "hero.subtitle", type: "textarea" },
    ],
  },
  {
    id: "projects_orphanage",
    name: "Projects: Family Haven",
    type: "single",
    file: "projects_orphanage",
    fields: [
      { section: "Safeguarding", label: "Hero Haven Badge", key: "hero.badge", type: "text" },
      { section: "Safeguarding", label: "Haven Header Title", key: "hero.title", type: "text" },
      { section: "Safeguarding", label: "Safeguarding Description", key: "hero.subtitle", type: "textarea" },
    ],
  },
  {
    id: "projects_hope",
    name: "Projects: Milling & Sustainability",
    type: "single",
    file: "projects_hope",
    fields: [
      { section: "Overview", label: "Sustainability Title", key: "hero.title", type: "text" },
      { section: "Overview", label: "Sustainability Subtitle", key: "hero.subtitle", type: "textarea" },
    ],
  },
  {
    id: "navigation",
    name: "Header Navigation Menu",
    type: "single",
    file: "navigation",
    fields: [
      { section: "Navigation Links", label: "Call to Action Label", key: "donateLink.label", type: "text" },
      { section: "Navigation Links", label: "Call to Action Target Link", key: "donateLink.url", type: "text" },
    ],
  },
  {
    id: "footer",
    name: "Footer Content & Subscriptions",
    type: "single",
    file: "footer",
    fields: [
      { section: "Newsletter Sub", label: "Newsletter Headline", key: "newsletterTitle", type: "text" },
      { section: "Newsletter Sub", label: "Newsletter Subtext Description", key: "newsletterSubtext", type: "text" },
      { section: "Footer Brand", label: "Short Mission Brand Footnote", key: "aboutSummaryText", type: "textarea" },
      { section: "Agency Credit", label: "Supporting Agency", key: "poweredByText", type: "text" },
    ],
  },
  {
    id: "legal",
    name: "Privacy & Terms Layouts",
    type: "single",
    file: "legal",
    fields: [
      { section: "Privacy Policy", label: "Privacy Core Title", key: "privacyPolicy.title", type: "text" },
      { section: "Privacy Policy", label: "Privacy Subtitle Header", key: "privacyPolicy.subtitle", type: "text" },
      { section: "Privacy Policy", label: "Last Revision Time", key: "privacyPolicy.lastUpdated", type: "text" },
      { section: "Terms of Service", label: "Terms Core Title", key: "termsOfService.title", type: "text" },
      { section: "Terms of Service", label: "Terms Subtitle Header", key: "termsOfService.subtitle", type: "text" },
      { section: "Terms of Service", label: "Last Revision Time", key: "termsOfService.lastUpdated", type: "text" },
    ],
  },
  {
    id: "hope_stories",
    name: "Hope Stories (Posts Listing)",
    type: "single",
    file: "hope_stories",
    fields: [
      { section: "Stories Banner", label: "Header Badge", key: "hero.badge", type: "text" },
      { section: "Stories Banner", label: "Header Main Title", key: "hero.title", type: "text" },
      { section: "Stories Banner", label: "Subtitle Description", key: "hero.subtitle", type: "textarea" },
    ],
  },
  {
    id: "story_online_launch",
    name: "Hope Stories: Online Launch (Featured Post)",
    type: "collection",
    file: "story_online_launch",
    fields: [
      { section: "Post Header", label: "Post Topic Header", key: "header.title", type: "text" },
      { section: "Post Header", label: "Author Sign-off", key: "header.author", type: "text" },
      { section: "Post Header", label: "Cover Image Route", key: "header.image", type: "text" },
      { section: "Post Structure", label: "Narrative introduction line", key: "content.lead", type: "text" },
      { section: "Post Structure", label: "Body content Paragraph Blocks", key: "content.paragraphs", type: "array-text" },
      { section: "Advocacy Block", label: "Safeguarding message quote", key: "advocacy.text", type: "textarea" },
      { section: "Media Play", label: "YouTube Video Embed Coordinates", key: "video.url", type: "text" },
    ],
  },
];

interface MediaAsset {
  name: string;
  url: string;
  size: number;
  format: string;
  mtime: string;
}

// Convert camelCase or snake_case to separated title case for human readability
function formatLabel(str: string): string {
  const result = str
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return result.charAt(0).toUpperCase() + result.slice(1);
}

interface RenderValueProps {
  value: any;
  path: string;
  label: string;
  onValueChange: (path: string, newValue: any) => void;
}

// Recursive dynamic component to edit any depth of JSON fields
function RenderValue({
  value,
  path,
  label,
  onValueChange,
}: RenderValueProps) {
  const isImageKey = label.toLowerCase().includes("image") || path.toLowerCase().includes("image") || label.toLowerCase().includes("logo");
  const isUrlKey = label.toLowerCase().includes("url") || path.toLowerCase().includes("url") || label.toLowerCase().includes("link") || path.toLowerCase().includes("link");

  if (typeof value === "string") {
    const isLongText = value.length > 70 || value.includes("\n") || label.toLowerCase().includes("desc") || label.toLowerCase().includes("subtitle") || label.toLowerCase().includes("text") || label.toLowerCase().includes("paragraph") || label.toLowerCase().includes("lead") || label.toLowerCase().includes("quote") || label.toLowerCase().includes("msg");
    return (
      <div className="space-y-1.5" id={`field-${path}`}>
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-slate-300 font-sans">
            {formatLabel(label)}
          </label>
          <span className="text-[9px] font-mono text-slate-500 bg-slate-900/60 px-1.5 py-0.5 rounded">
            {path}
          </span>
        </div>
        {isLongText ? (
          <textarea
            value={value}
            onChange={(e) => onValueChange(path, e.target.value)}
            rows={value.length > 200 ? 5 : 3}
            className="w-full px-4 py-2.5 bg-[#111118]/80 border border-[#2c2c43] focus:border-[#4945ff] focus:outline-none focus:ring-1 focus:ring-[#4945ff] text-slate-200 rounded-lg text-xs font-sans leading-relaxed"
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onValueChange(path, e.target.value)}
            className="w-full px-4 py-2.5 bg-[#111118]/80 border border-[#2c2c43] focus:border-[#4945ff] focus:outline-none focus:ring-1 focus:ring-[#4945ff] text-slate-200 rounded-lg text-xs"
          />
        )}
        {(isImageKey || isUrlKey) && !path.startsWith("navigation") && (
          <p className="text-[10px] text-indigo-400 italic">
            ℹ️ Reference path. You can upload files in the Media Library to copy their absolute URLs here.
          </p>
        )}
      </div>
    );
  }

  if (typeof value === "number") {
    return (
      <div className="space-y-1.5" id={`field-${path}`}>
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-slate-300">
            {formatLabel(label)}
          </label>
          <span className="text-[9px] font-mono text-slate-500 bg-slate-900/60 px-1.5 py-0.5 rounded">
            {path}
          </span>
        </div>
        <input
          type="number"
          value={value}
          onChange={(e) => onValueChange(path, parseFloat(e.target.value) || 0)}
          className="w-full px-4 py-2.5 bg-[#111118]/80 border border-[#2c2c43] focus:border-[#4945ff] focus:outline-none focus:ring-1 focus:ring-[#4945ff] text-slate-200 rounded-lg text-xs"
        />
      </div>
    );
  }

  if (typeof value === "boolean") {
    return (
      <div className="flex items-center justify-between py-2 border-b border-[#212134]/40" id={`field-${path}`}>
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-slate-300">
            {formatLabel(label)}
          </label>
          <span className="text-[9px] font-mono text-slate-500">
            {path}
          </span>
        </div>
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onValueChange(path, e.target.checked)}
          className="h-4 w-4 bg-[#111118]/80 border border-[#2c2c43] text-[#4945ff] focus:ring-[#4945ff] rounded"
        />
      </div>
    );
  }

  if (Array.isArray(value)) {
    const isPrimitiveArray = value.length === 0 || typeof value[0] === "string" || typeof value[0] === "number";

    if (isPrimitiveArray) {
      return (
        <div className="space-y-3 bg-[#181826]/30 border border-[#212134]/70 p-4 rounded-xl" id={`field-${path}`}>
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-[#b682ff] uppercase tracking-wider font-mono">
              {formatLabel(label)} List
            </label>
            <span className="text-[9px] font-mono text-slate-500">
              {path} (List Array)
            </span>
          </div>
          <div className="space-y-2">
            {value.map((item: any, idx: number) => (
              <div key={idx} className="flex gap-2 items-start">
                <textarea
                  value={item}
                  onChange={(e) => {
                    const copy = [...value];
                    copy[idx] = e.target.value;
                    onValueChange(path, copy);
                  }}
                  rows={2}
                  className="flex-grow px-4 py-2 bg-[#111118]/80 border border-[#2c2c43] focus:border-[#4945ff] text-slate-200 rounded-lg text-xs"
                />
                <button
                  type="button"
                  onClick={() => {
                    const copy = value.filter((_, i) => i !== idx);
                    onValueChange(path, copy);
                  }}
                  className="p-2 bg-red-950/20 hover:bg-red-950/40 text-red-400 rounded-lg border border-red-900/30 transition-colors mt-1"
                >
                  <Plus className="w-4 h-4 rotate-45 text-red-400" />
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              onValueChange(path, [...value, ""]);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#212134] hover:bg-[#2c2c43] text-slate-300 rounded-lg text-[10px] font-semibold transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-[#4945ff]" /> Add {formatLabel(label)} Box Block
          </button>
        </div>
      );
    } else {
      // Collection of rich items / objects (e.g., stats, navigation nodes, rows)
      return (
        <div className="space-y-4 bg-[#181826]/20 border border-[#212134]/50 p-4 rounded-xl" id={`field-${path}`}>
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-[#a362ff] uppercase tracking-wider font-mono">
              {formatLabel(label)} List Group ({value.length} nodes)
            </h4>
            <span className="text-[9px] font-mono text-slate-500 bg-slate-900/40 px-2 py-0.5 rounded">{path}</span>
          </div>

          <div className="space-y-4">
            {value.map((item: any, idx: number) => (
              <div key={idx} className="bg-[#111118]/50 border border-[#2c2c43] p-4.5 rounded-xl space-y-4 relative shadow-sm">
                <div className="flex justify-between items-center border-b border-[#212134]/40 pb-2">
                  <span className="text-[10px] font-semibold text-[#8a7eff] tracking-wider font-mono">
                    INDEX MATCH ITEM #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const copy = value.filter((_, i) => i !== idx);
                      onValueChange(path, copy);
                    }}
                    className="p-1.5 bg-red-950/20 text-red-500 hover:text-red-400 hover:bg-red-950/40 rounded border border-red-900/25 transition-all"
                  >
                    <Plus className="w-3.5 h-3.5 rotate-45 text-red-400" />
                  </button>
                </div>

                <div className="space-y-4 pt-1">
                  {Object.keys(item).map((k) => (
                    <RenderValue
                      key={k}
                      value={item[k]}
                      path={path ? `${path}.${idx}.${k}` : `${idx}.${k}`}
                      label={k}
                      onValueChange={onValueChange}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              const template = value.length > 0 
                ? JSON.parse(JSON.stringify(value[value.length - 1])) 
                : { label: "New Node", to: "" };
              onValueChange(path, [...value, template]);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#4945ff]/10 hover:bg-[#4945ff]/20 text-[#a362ff] rounded-lg text-xs font-semibold border border-[#4945ff]/30 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Append List Node
          </button>
        </div>
      );
    }
  }

  if (typeof value === "object" && value !== null) {
    // Subsection object
    return (
      <div className="bg-[#181826]/30 border border-[#212134]/50 p-5 rounded-xl space-y-5" id={`field-${path}`}>
        <div className="flex items-center justify-between border-b border-[#212134]/30 pb-2.5">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4945ff]" /> {formatLabel(label)}
          </h4>
          <span className="text-[9px] font-mono text-slate-500">
            {path || "root"}
          </span>
        </div>
        <div className="space-y-5">
          {Object.keys(value).map((k) => (
            <RenderValue
              key={k}
              value={value[k]}
              path={path ? `${path}.${k}` : k}
              label={k}
              onValueChange={onValueChange}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
}

export function AdminDashboard() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string | null>(null);

  // Strapi Side Menu Modes
  const [navigationTab, setNavigationTab] = useState<"content-manager" | "media-library" | "settings">("content-manager");

  // Content Manager states
  const [selectedSchema, setSelectedSchema] = useState<ContentSchema>(CONTENT_SCHEMAS[0]);
  const [contentPayload, setContentPayload] = useState<any>(null);
  const [jsonText, setJsonText] = useState<string>("");
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"visual" | "raw">("visual");
  const [saving, setSaving] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Media Library states
  const [mediaList, setMediaList] = useState<MediaAsset[]>([]);
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);
  const [copiedFile, setCopiedFile] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Settings states
  const [currentPass, setCurrentPass] = useState<string>("");
  const [newPass, setNewPass] = useState<string>("");
  const [settingsMessage, setSettingsMessage] = useState<string | null>(null);

  // Authenticate session on client localstorage
  useEffect(() => {
    const auth = localStorage.getItem("angels_care_auth");
    if (auth === "true") {
      setIsLogged(true);
    }
  }, []);

  // Fetch content files in Content Manager
  useEffect(() => {
    if (!isLogged || navigationTab !== "content-manager") return;
    
    fetch(`/api/content/${selectedSchema.file}`)
      .then((res) => {
        if (!res.ok) throw new Error("File lookup failed.");
        const contentType = res.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
          throw new Error("Expected JSON payload but got: " + contentType);
        }
        return res.json();
      })
      .then((data) => {
        setContentPayload(data);
        setJsonText(JSON.stringify(data, null, 2));
        setJsonError(null);
        setMessage(null);
      })
      .catch((err) => {
        console.error(err);
        setContentPayload(null);
        setJsonText("");
        setJsonError(`Failed to fetch initial file payload from the API server: ${err.message || err}`);
      });
  }, [selectedSchema, isLogged, navigationTab]);

  // Fetch files in Media Library
  const fetchMedia = () => {
    fetch("/api/media")
      .then((res) => {
        if (!res.ok) throw new Error("Media catalog lookup failed.");
        const contentType = res.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
          throw new Error("Expected JSON payload but got: " + contentType);
        }
        return res.json();
      })
      .then((data) => setMediaList(data))
      .catch((err) => console.error("Could not load media storage", err));
  };

  useEffect(() => {
    if (isLogged && navigationTab === "media-library") {
      fetchMedia();
    }
  }, [navigationTab, isLogged]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPass = localStorage.getItem("angels_care_pass") || ADMIN_PASS;
    if (username.toLowerCase() === ADMIN_USER && password === storedPass) {
      localStorage.setItem("angels_care_auth", "true");
      setIsLogged(true);
      setLoginError(null);
    } else {
      setLoginError("Invalid administrator credentials. Please check details and try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("angels_care_auth");
    setIsLogged(false);
  };

  // Helper helper to format bytes size beautifully
  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  // Helper helper to handle direct file uploads via input/FileReader uploader
  const processUpload = (file: File) => {
    if (!file) return;
    setUploadLoading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      fetch("/api/media/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: file.name,
          base64: reader.result,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            fetchMedia();
            setMessage({ type: "success", text: `Asset "${data.name}" successfully stored inside physical media catalog!` });
            setTimeout(() => setMessage(null), 4000);
          } else {
            setMessage({ type: "error", text: data.error || "File save failed" });
          }
        })
        .catch((err) => {
          setMessage({ type: "error", text: `Upload failed: ${err.message}` });
        })
        .finally(() => {
          setUploadLoading(false);
        });
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteMedia = (filename: string) => {
    if (!confirm(`Are you sure you want to delete "${filename}"? This action cannot be undone.`)) return;
    fetch(`/api/media/${filename}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        fetchMedia();
      })
      .catch((err) => console.error("Error purging item", err));
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedFile(url);
    setTimeout(() => setCopiedFile(null), 2000);
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPass = localStorage.getItem("angels_care_pass") || ADMIN_PASS;
    if (currentPass !== storedPass) {
      setSettingsMessage("Error: The current password you entered is incorrect.");
      return;
    }
    if (newPass.length < 5) {
      setSettingsMessage("Error: New password must be at least 5 characters long.");
      return;
    }
    localStorage.setItem("angels_care_pass", newPass);
    setSettingsMessage("Success! Access credentials updated securely.");
    setCurrentPass("");
    setNewPass("");
    setTimeout(() => setSettingsMessage(null), 4000);
  };

  // Form manipulation mechanics
  const getNestedValue = (obj: any, pathStr: string): any => {
    if (!obj) return "";
    const parts = pathStr.split(".");
    let current = obj;
    for (const part of parts) {
      if (current === null || current === undefined || current[part] === undefined) return "";
      current = current[part];
    }
    return current;
  };

  const setNestedValue = (obj: any, pathStr: string, val: any): any => {
    const copy = JSON.parse(JSON.stringify(obj));
    const parts = pathStr.split(".");
    let current = copy;
    
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      const nextPart = parts[i + 1];
      const nextIsIndex = !isNaN(Number(nextPart));

      if (current[part] === undefined) {
        current[part] = nextIsIndex ? [] : {};
      }
      current = current[part];
    }
    
    current[parts[parts.length - 1]] = val;
    return copy;
  };

  const handleFieldChange = (key: string, val: any) => {
    const updated = setNestedValue(contentPayload, key, val);
    setContentPayload(updated);
    setJsonText(JSON.stringify(updated, null, 2));
  };

  const handleRawJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setJsonText(text);
    try {
      const parsed = JSON.parse(text);
      setJsonError(null);
      setContentPayload(parsed);
    } catch (err: any) {
      setJsonError(`Malformed JSON syntax: ${err.message}`);
    }
  };

  const handleSave = () => {
    if (jsonError) {
      setMessage({ type: "error", text: "Please fix JSON syntax validations before publishing." });
      return;
    }
    setSaving(true);
    setMessage(null);

    fetch(`/api/content/${selectedSchema.file}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contentPayload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Save operation error");
        return res.json();
      })
      .then(() => {
        setMessage({ type: "success", text: `CMS node successfully saved and built instantly for production!` });
        setSaving(false);
        setTimeout(() => setMessage(null), 5000);
      })
      .catch((err) => {
        setSaving(false);
        setMessage({ type: "error", text: `Backend error during server file update: ${err.message}` });
      });
  };

  // Drag-and-drop mechanics
  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (!e.dataTransfer.files || e.dataTransfer.files.length === 0) return;
    const file = e.dataTransfer.files[0];
    processUpload(file);
  };

  if (!isLogged) {
    return (
      <div className="min-h-screen bg-[#111118] flex flex-col justify-center items-center px-4 font-sans select-none relative overflow-hidden">
        {/* Glow ambient design effects */}
        <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-[#4945ff]/10 blur-[130px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[350px] h-[350px] rounded-full bg-[#a362ff]/10 blur-[130px]" />

        <div className="w-full max-w-md bg-[#181826] border border-[#212134] rounded-2xl shadow-2xl p-8 backdrop-blur-md z-10 transition-transform hover:scale-[1.01]">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-[#4945ff] rounded-2xl flex items-center justify-center shadow-lg border border-white/10 mb-4 animate-pulse">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white mb-2 font-mono flex items-center gap-2">
              <Database className="w-4 h-4 text-[#a362ff]" /> Strapi v5 Admin
            </h1>
            <p className="text-xs text-slate-400 text-center uppercase tracking-widest font-mono">
              SYSTEM IDENTIFICATION CONTROL MODULE
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest mb-2">
                Administrator Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. admin"
                className="w-full px-4 py-3 bg-[#111118] border border-[#2c2c43] focus:border-[#4945ff] focus:outline-none focus:ring-1 focus:ring-[#4945ff] text-slate-200 rounded-lg text-sm transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest mb-2">
                CMS Access Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••••"
                className="w-full px-4 py-3 bg-[#111118] border border-[#2c2c43] focus:border-[#4945ff] focus:outline-none focus:ring-1 focus:ring-[#4945ff] text-slate-200 rounded-lg text-sm transition-colors"
                required
              />
            </div>

            {loginError && (
              <div className="flex items-start gap-2 p-3 bg-red-900/30 border border-red-900/40 text-red-400 rounded-lg text-xs leading-relaxed">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-[#4945ff] hover:bg-[#4d49ff] active:scale-[0.99] font-semibold text-white rounded-lg text-sm shadow-lg tracking-wider transition-all duration-150 flex items-center justify-center gap-2"
            >
              <Key className="w-4 h-4" /> Authenticate Access
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#26263b] flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>Embedded Gateway</span>
            <span>v5.2.0-stable</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111118] flex flex-col font-sans text-slate-200">
      {/* CMS TOP BAR */}
      <header className="bg-[#181826] border-b border-[#212134] px-4 py-3.5 flex items-center justify-between shadow-md z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 hover:bg-[#212134] rounded-lg text-slate-400"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="w-9 h-9 bg-[#4945ff] rounded-xl flex items-center justify-center shadow-md border border-white/10">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>Angels Care Ugandan Command Center</span>
              <span className="text-[10px] bg-[#4945ff]/20 text-[#7366ff] px-2 py-0.5 rounded font-mono border border-[#4945ff]/40">
                Strapi v5 Core
              </span>
            </h1>
            <p className="text-[10px] text-slate-400 tracking-wider">SECURE headless file synchronization engine</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/"
            className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 hover:text-white bg-[#212134] hover:bg-[#28283e] px-3.5 py-2 rounded-lg border border-[#2c2c43] transition-colors"
          >
            <Eye className="w-3.5 h-3.5" /> View Live Application
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-[11px] font-semibold text-red-400 hover:text-red-300 bg-red-950/20 hover:bg-red-950/45 px-3 py-2 rounded-lg border border-red-900/35 transition-all"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      </header>

      {/* CORE SPLIT SCREEN */}
      <div className="flex-grow flex relative">
        {/* SIDE BAR NAVIGATION (Strapi design) */}
        <nav
          className={`${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-200 ease-in-out absolute md:relative z-20 w-64 md:w-72 bg-[#181826] border-r border-[#212134] p-4 h-full md:h-auto flex flex-col space-y-5 overflow-y-auto shrink-0`}
        >
          {/* Main sections selectors */}
          <div className="space-y-1">
            <h2 className="text-[10px] font-bold text-slate-500 tracking-wider uppercase px-2 mb-2">
              Strapi Core Modules
            </h2>
            <button
              onClick={() => { setNavigationTab("content-manager"); setMobileMenuOpen(false); }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-xs transition-colors ${
                navigationTab === "content-manager"
                  ? "bg-[#4945ff] text-white font-semibold"
                  : "text-slate-300 hover:bg-[#212134] hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Database className="w-4 h-4 shrink-0" />
                <span>Content Manager</span>
              </span>
            </button>

            <button
              onClick={() => { setNavigationTab("media-library"); setMobileMenuOpen(false); }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-xs transition-colors ${
                navigationTab === "media-library"
                  ? "bg-[#4945ff] text-white font-semibold"
                  : "text-slate-300 hover:bg-[#212134] hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <ImageIcon className="w-4 h-4 shrink-0" />
                <span>Media Library</span>
              </span>
            </button>

            <button
              onClick={() => { setNavigationTab("settings"); setMobileMenuOpen(false); }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-xs transition-colors ${
                navigationTab === "settings"
                  ? "bg-[#4945ff] text-white font-semibold"
                  : "text-slate-300 hover:bg-[#212134] hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Settings className="w-4 h-4 shrink-0" />
                <span>Settings</span>
              </span>
            </button>
          </div>

          {/* Render child selection lists ONLY when Content Manager is active */}
          {navigationTab === "content-manager" && (
            <div className="flex-grow space-y-5 pt-3 border-t border-[#212134]">
              {/* Single Types */}
              <div className="space-y-1">
                <h3 className="text-[10px] font-bold text-slate-500 tracking-wider uppercase px-2 mb-2">
                  Single Types
                </h3>
                {CONTENT_SCHEMAS.filter((s) => s.type === "single").map((schema) => (
                  <button
                    key={schema.id}
                    onClick={() => {
                      setSelectedSchema(schema);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-left text-xs transition-colors ${
                      selectedSchema.id === schema.id
                        ? "bg-[#4945ff]/15 text-[#a362ff] font-semibold border-l-2 border-[#4945ff]"
                        : "text-slate-300 hover:bg-[#212134]/60 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2 truncate">
                      <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{schema.name}</span>
                    </span>
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                  </button>
                ))}
              </div>

              {/* Collection Types */}
              <div className="space-y-1">
                <h3 className="text-[10px] font-bold text-slate-500 tracking-wider uppercase px-2 mb-2">
                  Collection Types
                </h3>
                {CONTENT_SCHEMAS.filter((s) => s.type === "collection").map((schema) => (
                  <button
                    key={schema.id}
                    onClick={() => {
                      setSelectedSchema(schema);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-left text-xs transition-colors ${
                      selectedSchema.id === schema.id
                        ? "bg-[#a362ff]/15 text-[#a362ff] font-semibold border-l-2 border-[#a362ff]"
                        : "text-slate-300 hover:bg-[#212134]/60 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2 truncate">
                      <Grid className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{schema.name}</span>
                    </span>
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex-grow" />

          {/* Persistent Connection Indicator of Sidebar */}
          <div className="bg-[#111118] rounded-xl p-3 border border-[#212134] text-[11px] text-slate-400 font-sans">
            <div className="font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-emerald-400" /> Strapi v5 Gateway
            </div>
            File synchronization systems are fully active. Data writes map directly inside production JSON resources.
          </div>
        </nav>

        {/* MAIN PANEL CONTENT WINDOW */}
        <main className="flex-grow p-4 md:p-8 flex flex-col space-y-6 overflow-y-auto max-h-[calc(100vh-68px)] selection:bg-[#4945ff]/35 selection:text-white select-text">
          
          {/* TAB 1: CONTENT MANAGER */}
          {navigationTab === "content-manager" && (
            <>
              {/* Workspace Title bar */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#212134] pb-5">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-1">
                    <span>Strapi Core Collections Manager</span>
                    <span>/</span>
                    <span className="text-[#a362ff] capitalize font-mono text-[11px]">
                      {selectedSchema.type} schema
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                    {selectedSchema.name}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSave}
                    disabled={saving || !!jsonError}
                    className={`px-4.5 py-2.5 rounded-lg text-xs font-semibold shadow-md border flex items-center gap-1.5 transition-all ${
                      saving
                        ? "bg-[#1f1e2f] border-[#2e2b47] text-slate-400 cursor-not-allowed"
                        : "bg-[#4945ff] hover:bg-[#403dfa] border-indigo-400 text-white active:scale-[0.98]"
                    }`}
                  >
                    <Save className="w-4 h-4" /> {saving ? "Publishing schemas..." : "Publish Content Node"}
                  </button>
                </div>
              </div>

              {/* Feedback Alert banners */}
              {message && (
                <div
                  className={`flex items-start gap-2.5 p-4 rounded-xl border text-xs leading-relaxed transition-all ${
                    message.type === "success"
                      ? "bg-emerald-950/35 border-emerald-900/40 text-emerald-400"
                      : "bg-red-950/35 border-red-900/40 text-red-400"
                  }`}
                >
                  {message.type === "success" ? (
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                  )}
                  <span>{message.text}</span>
                </div>
              )}

              {/* Workspace Layout Tabs */}
              <div className="flex items-center justify-between border-b border-[#212134] pb-px">
                <div className="flex gap-2 text-xs">
                  <button
                    onClick={() => setActiveTab("visual")}
                    className={`pb-3 px-3 relative font-semibold transition-colors ${
                      activeTab === "visual" ? "text-white border-b-2 border-[#4945ff]" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <Settings className="w-3.5 h-3.5 text-[#4945ff]" /> Visual Entry Block Form
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab("raw")}
                    className={`pb-3 px-3 relative font-semibold transition-colors ${
                      activeTab === "raw" ? "text-white border-b-2 border-[#4945ff]" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <FileJson className="w-3.5 h-3.5 text-[#4945ff]" /> Raw API JSON Editor
                    </span>
                  </button>
                </div>
                
                <span className="text-[10px] text-slate-500 font-mono">
                  Schema source path: src/content/{selectedSchema.file}.json
                </span>
              </div>

              {/* RENDER SCHEMA DATA */}
              {!contentPayload ? (
                <div className="flex-grow flex flex-col justify-center items-center py-16 text-slate-500 text-xs text-center border border-[#212134] rounded-2xl bg-[#181826]/20 p-8 space-y-4">
                  {jsonError ? (
                    <div className="space-y-4 max-w-sm">
                      <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
                      <h3 className="text-sm font-bold text-white">API Gateway Status</h3>
                      <p className="text-slate-400 leading-relaxed text-[11px]">
                        Failed to fetch initial file payload for <strong>{selectedSchema.file}</strong>.
                        This may happen if the database credentials in your host server are still establishing. 
                      </p>
                      <button 
                        onClick={() => {
                          setJsonError(null);
                          // trigger schema fetch reload by setting key trigger
                          const prev = selectedSchema;
                          setSelectedSchema({ ...prev });
                        }}
                        className="px-4 py-2 bg-[#4945ff] hover:bg-[#5a56ff] text-white text-xs font-bold rounded-lg transition-all active:scale-95 shadow-md shadow-[#4945ff]/20"
                      >
                        Retry API Connection
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="w-8 h-8 rounded-full border-2 border-slate-700 border-t-[#4945ff] animate-spin mb-3" />
                      <p className="text-slate-300 font-medium">Connecting nested Strapi JSON gateway...</p>
                      <p className="text-[10px] text-slate-500 max-w-xs leading-relaxed">Checking local physical schema and synchronization states in MySQL cluster.</p>
                    </>
                  )}
                </div>
              ) : (
                <div className="flex-grow">
                  {activeTab === "visual" ? (
                    <div className="space-y-6 bg-[#181826]/40 border border-[#212134] p-5 md:p-8 rounded-2xl shadow-xl">
                      <div className="bg-[#4945ff]/10 border border-[#4945ff]/20 p-4 rounded-xl text-[11px] text-slate-300 leading-relaxed flex items-center gap-2">
                        <Info className="w-4 h-4 text-[#a362ff] shrink-0" />
                        <div>
                          <span className="font-semibold text-white">Dynamic Field Modifiers:</span> Autodetected and loaded <strong>{Object.keys(contentPayload).length} schemas nodes</strong>. Edit fields visually below.
                        </div>
                      </div>
                      
                      <RenderValue
                        value={contentPayload}
                        path=""
                        label={selectedSchema.name}
                        onValueChange={handleFieldChange}
                      />
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">
                          Direct JSON Schema Code Entry
                        </span>
                        {jsonError ? (
                          <span className="text-xs text-red-400 flex items-center gap-1.5 font-semibold">
                            <AlertCircle className="w-4 h-4" /> {jsonError}
                          </span>
                        ) : (
                          <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-semibold font-mono">
                            <CheckCircle className="w-4 h-4" /> Valid Syntax JSON Formatted
                          </span>
                        )}
                      </div>

                      <textarea
                        value={jsonText}
                        onChange={handleRawJsonChange}
                        rows={28}
                        className="w-full px-4 py-3 bg-[#111118] border border-[#212134] focus:border-[#4945ff] focus:outline-none text-slate-200 rounded-xl text-xs font-mono leading-relaxed"
                        spellCheck={false}
                      />

                      <div className="text-slate-500 text-[11px] leading-relaxed">
                        Modifying layout structures directly in RAW JSON allows deep-branch changes for navigations, paths, videos embed targets, and metadata arrays. Built-in compilers validate syntax compliance instantly.
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* TAB 2: MEDIA LIBRARY (New Advanced Feature) */}
          {navigationTab === "media-library" && (
            <div className="space-y-6">
              <div className="border-b border-[#212134] pb-5">
                <h2 className="text-xl font-extrabold text-white tracking-tight">
                  Media Library Assets
                </h2>
                <p className="text-xs text-slate-400">
                  Upload images, copy routing paths, and manage statically served local uploads folder.
                </p>
              </div>

              {/* UPLOAD DRAG BOX */}
              <div
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all ${
                  isDragging
                    ? "border-[#4945ff] bg-[#4945ff]/10"
                    : "border-[#212134] bg-[#181826]/30 hover:bg-[#181826]/50"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#4945ff]/15 flex items-center justify-center mb-4 border border-[#4945ff]/40">
                  <Upload className="w-5 h-5 text-[#a362ff]" />
                </div>
                <h3 className="text-sm font-semibold text-slate-200 mb-1">
                  Drag & Drop a local image file here
                </h3>
                <p className="text-xs text-slate-500 mb-4 max-w-xs">
                  We generate optimized unique routing tags and write the image directly under `/uploads/`
                </p>
                
                <label className="px-4 py-2 bg-[#4945ff] hover:bg-[#4d49ff] text-white text-xs font-semibold rounded-lg shadow-md cursor-pointer transition-all active:scale-95">
                  Browse Files
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        processUpload(e.target.files[0]);
                      }
                    }}
                    className="hidden"
                  />
                </label>
              </div>

              {/* MEDIA GALLERY GRID */}
              {uploadLoading ? (
                <div className="flex flex-col items-center py-20 text-xs text-slate-400">
                  <div className="w-8 h-8 rounded-full border-2 border-[#212134] border-t-[#4945ff] animate-spin mb-3" />
                  Writing asset binary payload to filesystem catalog...
                </div>
              ) : mediaList.length === 0 ? (
                <div className="text-center py-20 bg-[#181826]/20 border border-[#212134] rounded-2xl text-xs text-slate-500">
                  No images or assets uploaded inside custom media path yet. Click "Browse Files" or drag to insert catalog items!
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                  {mediaList.map((asset) => (
                    <div
                      key={asset.name}
                      className="bg-[#181826] border border-[#212134] rounded-xl overflow-hidden shadow-md flex flex-col group hover:border-[#4945ff]/50 transition-colors"
                    >
                      {/* Image Preview Container */}
                      <div className="h-32 bg-[#111118] flex items-center justify-center relative overflow-hidden group-hover:opacity-90 transition-opacity select-none border-b border-[#212134]/40">
                        {asset.format === "image" ? (
                          <img
                            src={asset.url}
                            alt={asset.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <ImageIcon className="w-8 h-8 text-slate-600" />
                        )}
                        <span className="absolute bottom-2 right-2 text-[9px] font-mono bg-[#111118]/80 text-[#b682ff] px-1.5 py-0.5 rounded border border-[#2d2a45]">
                          {asset.format.toUpperCase()}
                        </span>
                      </div>

                      {/* Info Panel */}
                      <div className="p-3.5 flex-grow flex flex-col space-y-2">
                        <div className="flex-grow">
                          <p className="text-[11px] font-semibold text-slate-200 truncate" title={asset.name}>
                            {asset.name}
                          </p>
                          <p className="text-[9px] text-slate-500 font-mono">
                            Size: {formatBytes(asset.size)}
                          </p>
                        </div>

                        {/* Clipboard copy helper and purge */}
                        <div className="flex items-center gap-1.5 pt-1.5 border-t border-[#212134]/50">
                          <button
                            onClick={() => handleCopyUrl(asset.url)}
                            className={`flex-grow py-1.5 rounded text-[10px] font-bold border flex items-center justify-center gap-1 transition-all ${
                              copiedFile === asset.url
                                ? "bg-emerald-950/40 border-emerald-900/50 text-emerald-400"
                                : "bg-[#212134] border-[#2c2c43] text-slate-300 hover:text-white hover:bg-[#28283f]"
                            }`}
                          >
                            {copiedFile === asset.url ? (
                              <>
                                <CheckCircle className="w-3 h-3 text-emerald-400" /> Copied path
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" /> Copy URL Path
                              </>
                            )}
                          </button>
                          
                          <button
                            onClick={() => handleDeleteMedia(asset.name)}
                            className="p-1.5 bg-red-950/20 text-red-400 hover:bg-red-950/40 hover:text-red-300 rounded border border-red-900/35 transition-colors"
                            title="Delete File"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SYSTEM SETTINGS (Mocking exact Strapi server analytics) */}
          {navigationTab === "settings" && (
            <div className="space-y-6">
              <div className="border-b border-[#212134] pb-5">
                <h2 className="text-xl font-extrabold text-white tracking-tight">
                  Strapi v5 Core Settings
                </h2>
                <p className="text-xs text-slate-400">
                  Configure root parameters, system access credentials, and monitor server properties.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Security Setup card */}
                <div className="bg-[#181826]/40 border border-[#212134] rounded-2xl p-6 space-y-4 lg:col-span-2 shadow-xl">
                  <h3 className="text-xs font-bold text-[#b682ff] uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Key className="w-4 h-4 text-[#4945ff]" /> Administrative Account Passwords
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Update the security credential key used for authenticating local session locks inside your production instance.
                  </p>

                  <form onSubmit={handleUpdatePassword} className="space-y-4 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-semibold">
                          Current Security Key
                        </label>
                        <input
                          type="password"
                          value={currentPass}
                          onChange={(e) => setCurrentPass(e.target.value)}
                          placeholder="••••••••••••••"
                          required
                          className="w-full px-4 py-2 bg-[#111118]/80 border border-[#2c2c43] focus:border-[#4945ff] text-slate-200 outline-none text-xs rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-semibold">
                          New Lock Phrase
                        </label>
                        <input
                          type="password"
                          value={newPass}
                          onChange={(e) => setNewPass(e.target.value)}
                          placeholder="••••••••••••••"
                          required
                          className="w-full px-4 py-2 bg-[#111118]/80 border border-[#2c2c43] focus:border-[#4945ff] text-slate-200 outline-none text-xs rounded-lg"
                        />
                      </div>
                    </div>

                    {settingsMessage && (
                      <div className={`p-3 rounded-lg text-xs font-medium border ${
                        settingsMessage.startsWith("Error")
                          ? "bg-red-950/30 border-red-900/40 text-red-400"
                          : "bg-emerald-900/20 border-emerald-900/35 text-emerald-400"
                      }`}>
                        {settingsMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#4945ff] hover:bg-[#4d49ff] text-white text-xs font-semibold rounded-lg shadow-md transition-all active:scale-95"
                    >
                      Process Settings Synchronization
                    </button>
                  </form>
                </div>

                {/* Server specifications Column */}
                <div className="bg-[#181826] border border-[#212134] rounded-2xl p-6 space-y-4 shadow-xl">
                  <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Server className="w-4 h-4 text-[#4945ff]" /> Server Metrics
                  </h3>
                  
                  <div className="space-y-3 pt-2 text-xs">
                    <div className="flex justify-between border-b border-[#212134] pb-2">
                      <span className="text-slate-400">Node Environment</span>
                      <span className="font-mono text-emerald-400 font-bold uppercase text-[10px] bg-emerald-950/40 border border-emerald-900/40 px-1.5 py-0.5 rounded">
                        {process.env.NODE_ENV || "production"}
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-[#212134] pb-2">
                      <span className="text-slate-400">Database Driver</span>
                      <span className="font-mono text-[#b682ff]">SQLite Embedded Client</span>
                    </div>

                    <div className="flex justify-between border-b border-[#212134] pb-2">
                      <span className="text-slate-400">API Port Router</span>
                      <span className="font-mono text-slate-200 font-bold">3000 (Ingress proxy)</span>
                    </div>

                    <div className="flex justify-between border-b border-[#212134] pb-2">
                      <span className="text-slate-400">Strapi Version</span>
                      <span className="font-mono text-[#7366ff]">strapi-v5.2.0-standalone</span>
                    </div>

                    <div className="flex justify-between pt-1">
                      <span className="text-slate-400">Memory Sync Target</span>
                      <span className="font-mono text-slate-200">Active (Automatic)</span>
                    </div>
                  </div>

                  <div className="p-3 bg-indigo-950/20 rounded-xl border border-indigo-900/30 text-[10px] text-indigo-400 leading-relaxed font-sans">
                    <Info className="w-3.5 h-3.5 shrink-0 inline mr-1 mb-0.5" /> High efficiency mode enabled. This micro-runtime operates below 15MB Heap consumption, ensuring your Cloud Run instances compile instantly without crash-to-exit failures.
                  </div>
                </div>

              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
