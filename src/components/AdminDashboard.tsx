/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import {
  FileText,
  Save,
  LogOut,
  Image as ImageIcon,
  Key,
  Eye,
  Menu,
  ChevronRight,
  ChevronLeft,
  Plus,
  Trash2,
  Lock,
  Upload,
  Copy,
  Info,
  Users,
  User,
  ShieldCheck,
  UserPlus,
  X,
  Search,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import logo from "../assets/angels-care-logo.webp.asset.json";

// Security configuration configurations
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
      { section: "Hero Section", label: "Hero Banner Image Route", key: "hero.image", type: "text", description: "Upload in Media Library and select the file" },
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

interface UserProfile {
  id: string;
  username: string;
  role: "admin" | "content-manager";
  password?: string;
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

interface AdminContextType {
  openMediaPicker: (path: string) => void;
  mediaList: MediaAsset[];
  fetchMedia: () => void;
}

const AdminContext = React.createContext<AdminContextType | null>(null);

interface RenderValueProps {
  value: any;
  path: string;
  label: string;
  onValueChange: (path: string, newValue: any) => void;
}

// Recursive dynamic component to edit any depth of JSON fields
function RenderValue({ value, path, label, onValueChange }: RenderValueProps) {
  const adminCtx = useContext(AdminContext);
  const isImageKey =
    label.toLowerCase().includes("image") ||
    path.toLowerCase().includes("image") ||
    label.toLowerCase().includes("logo") ||
    label.toLowerCase().includes("pic") ||
    path.toLowerCase().includes("pic");
  const isUrlKey =
    label.toLowerCase().includes("url") ||
    path.toLowerCase().includes("url") ||
    label.toLowerCase().includes("link") ||
    path.toLowerCase().includes("link");

  if (typeof value === "string") {
    // Advanced Image Upload and Picker visual field
    if (isImageKey) {
      return (
        <div className="space-y-2 bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-sm" id={`field-${path}`}>
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-700 font-sans">
              {formatLabel(label)} (Image Asset)
            </label>
            <span className="text-[9px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
              {path}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-24 h-24 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0 shadow-inner relative group">
              {value ? (
                <>
                  <img
                    src={value}
                    alt={label}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="text-[10px] text-white font-medium">Image active</span>
                  </div>
                </>
              ) : (
                <div className="text-center p-2 text-slate-400">
                  <span className="text-[10px] block font-medium">Unset</span>
                </div>
              )}
            </div>

            <div className="flex-grow space-y-2 w-full">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => adminCtx?.openMediaPicker(path)}
                  className="px-3 py-1.5 bg-coral hover:bg-coral/95 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <ImageIcon className="w-3.5 h-3.5" /> Choose from Library
                </button>

                {value && (
                  <button
                    type="button"
                    onClick={() => onValueChange(path, "")}
                    className="px-3 py-1.5 bg-white border border-red-200 text-red-600 hover:bg-red-50 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Remove Image
                  </button>
                )}
              </div>

              <div className="text-[10px] text-slate-500 truncate max-w-lg leading-relaxed">
                URL Route: <code className="bg-slate-100 px-1 rounded text-slate-800 break-all">{value || "(empty)"}</code>
              </div>
            </div>
          </div>

          {/* Expand manual override */}
          <details className="mt-1 text-[11px] text-slate-500">
            <summary className="cursor-pointer text-slate-400 hover:text-slate-600 font-medium select-none">
              Override Image path manually
            </summary>
            <input
              type="text"
              value={value}
              onChange={(e) => onValueChange(path, e.target.value)}
              placeholder="e.g. /uploads/image-name.png"
              className="w-full mt-1.5 px-3 py-2 bg-white border border-slate-200 focus:border-coral focus:ring-1 focus:ring-coral text-slate-850 rounded-lg text-xs transition-colors"
            />
          </details>
        </div>
      );
    }

    const isLongText =
      value.length > 70 ||
      value.includes("\n") ||
      label.toLowerCase().includes("desc") ||
      label.toLowerCase().includes("subtitle") ||
      label.toLowerCase().includes("text") ||
      label.toLowerCase().includes("paragraph") ||
      label.toLowerCase().includes("lead") ||
      label.toLowerCase().includes("quote") ||
      label.toLowerCase().includes("msg");

    return (
      <div className="space-y-1.5" id={`field-${path}`}>
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-slate-700 font-sans">
            {formatLabel(label)}
          </label>
          <span className="text-[9px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
            {path}
          </span>
        </div>
        {isLongText ? (
          <textarea
            value={value}
            onChange={(e) => onValueChange(path, e.target.value)}
            rows={value.length > 200 ? 5 : 3}
            className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral text-slate-800 rounded-lg text-xs leading-relaxed transition-colors"
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onValueChange(path, e.target.value)}
            className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral text-slate-800 rounded-lg text-xs transition-colors"
          />
        )}
        {isUrlKey && !path.startsWith("navigation") && (
          <p className="text-[10px] text-coral/85 italic">
            ℹ️ Reference URL path. Use media library values to paste directory locations here.
          </p>
        )}
      </div>
    );
  }

  if (typeof value === "number") {
    return (
      <div className="space-y-1.5" id={`field-${path}`}>
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-slate-700">
            {formatLabel(label)}
          </label>
          <span className="text-[9px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
            {path}
          </span>
        </div>
        <input
          type="number"
          value={value}
          onChange={(e) => onValueChange(path, parseFloat(e.target.value) || 0)}
          className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral text-slate-800 rounded-lg text-xs transition-colors"
        />
      </div>
    );
  }

  if (typeof value === "boolean") {
    return (
      <div className="flex items-center justify-between py-2 border-b border-slate-100" id={`field-${path}`}>
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-slate-700">
            {formatLabel(label)}
          </label>
          <span className="text-[9px] font-mono text-slate-400">
            {path}
          </span>
        </div>
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onValueChange(path, e.target.checked)}
          className="h-4 w-4 bg-white border-slate-300 text-coral focus:ring-coral rounded accent-coral"
        />
      </div>
    );
  }

  if (Array.isArray(value)) {
    const isPrimitiveArray = value.length === 0 || typeof value[0] === "string" || typeof value[0] === "number";

    if (isPrimitiveArray) {
      return (
        <div className="space-y-3 bg-slate-50 border border-slate-200 p-4 rounded-xl" id={`field-${path}`}>
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-coral/90 uppercase tracking-wider font-mono">
              {formatLabel(label)} List
            </label>
            <span className="text-[9px] font-mono text-slate-450 border border-slate-100 bg-white px-2 py-0.5 rounded">
              {path}
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
                  className="flex-grow px-4 py-2 bg-white border border-slate-200 focus:border-coral focus:ring-1 focus:ring-coral text-slate-800 rounded-lg text-xs transition-colors"
                />
                <button
                  type="button"
                  onClick={() => {
                    const copy = value.filter((_, i) => i !== idx);
                    onValueChange(path, copy);
                  }}
                  className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg border border-red-250 transition-colors mt-1"
                >
                  <Plus className="w-4 h-4 rotate-45 text-red-500" />
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              onValueChange(path, [...value, ""]);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 rounded-lg text-[10px] font-semibold transition-colors shadow-sm"
          >
            <Plus className="w-3.5 h-3.5 text-coral" /> Add {formatLabel(label)} Block Line
          </button>
        </div>
      );
    } else {
      // Collection of rich items / objects (e.g., stats, navigation nodes, rows)
      return (
        <div className="space-y-4 bg-slate-50 border border-slate-200 p-4 rounded-xl" id={`field-${path}`}>
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-coral/90 uppercase tracking-wider font-mono">
              {formatLabel(label)} List Group ({value.length} items)
            </h4>
            <span className="text-[9px] font-mono text-slate-400 bg-white border border-slate-150 px-2 py-0.5 rounded">
              {path}
            </span>
          </div>

          <div className="space-y-4">
            {value.map((item: any, idx: number) => (
              <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl space-y-4 relative shadow-sm">
                <div className="flex justify-between items-center border-b border-slate-105 pb-2">
                  <span className="text-[10px] font-semibold text-slate-500 tracking-wider font-mono">
                    GRID ITEM INDEX #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const copy = value.filter((_, i) => i !== idx);
                      onValueChange(path, copy);
                    }}
                    className="p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded border border-red-200 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5 rotate-45 text-red-500" />
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
              const template =
                value.length > 0
                  ? JSON.parse(JSON.stringify(value[value.length - 1]))
                  : { label: "New Node", to: "" };
              onValueChange(path, [...value, template]);
            }}
            className="flex items-center gap-1.5 px-3 py-2 bg-coral/10 hover:bg-coral/15 text-coral rounded-lg text-xs font-bold border border-coral/20 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Append List Item
          </button>
        </div>
      );
    }
  }

  if (typeof value === "object" && value !== null) {
    // Subsection object
    return (
      <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-5" id={`field-${path}`}>
        <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-ping" /> {formatLabel(label)}
          </h4>
          <span className="text-[9px] font-mono text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">
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

  // Users roles management persistence database model
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  // Active workspace selector: "media-library" | "content-manager" | "users"
  const [navigationTab, setNavigationTab] = useState<"media-library" | "content-manager" | "users">("media-library");

  // Content Manager fields
  const [selectedSchema, setSelectedSchema] = useState<ContentSchema>(CONTENT_SCHEMAS[0]);
  const [contentPayload, setContentPayload] = useState<any>(null);
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [saving, setSaving] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Media Library catalog uploader
  const [mediaList, setMediaList] = useState<MediaAsset[]>([]);
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);
  const [copiedFile, setCopiedFile] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Media Picker Popup selector
  const [activeMediaPickerField, setActiveMediaPickerField] = useState<{ path: string } | null>(null);
  const [mediaSearch, setMediaSearch] = useState<string>("");

  // Users administration UI state
  const [usersTabMode, setUsersTabMode] = useState<"list" | "add" | "edit">("list");
  const [editingUser, setEditingUser] = useState<UserProfile | null>(null);
  const [userFormUsername, setUserFormUsername] = useState<string>("");
  const [userFormPassword, setUserFormPassword] = useState<string>("");
  const [userFormRole, setUserFormRole] = useState<"admin" | "content-manager">("content-manager");
  const [userFormError, setUserFormError] = useState<string | null>(null);
  const [userSuccessMessage, setUserSuccessMessage] = useState<string | null>(null);

  // Initializing database collections
  useEffect(() => {
    // Fetch users first from the real database/backend
    fetch("/api/users")
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch user database");
        return res.json();
      })
      .then((usersData) => {
        setUsers(usersData);
        
        // Load active auth session
        const loggedUserJson = localStorage.getItem("angels_care_logged_user");
        if (loggedUserJson) {
          try {
            const profile = JSON.parse(loggedUserJson);
            const matched = usersData.find((u: UserProfile) => u.username.toLowerCase() === profile.username.toLowerCase());
            if (matched) {
              setCurrentUser(matched);
              setIsLogged(true);
            } else {
              localStorage.removeItem("angels_care_logged_user");
            }
          } catch (e) {
            localStorage.removeItem("angels_care_logged_user");
          }
        } else {
          const legacyAuth = localStorage.getItem("angels_care_auth");
          if (legacyAuth === "true") {
            const defaultAdmin = usersData.find((u: UserProfile) => u.username === "admin") || usersData[0];
            setCurrentUser(defaultAdmin);
            setIsLogged(true);
          }
        }
      })
      .catch((err) => {
        console.error("Error loading users from database table, using local storage fallback:", err);
        const storedUsers = localStorage.getItem("angels_care_users");
        let initialUsers: UserProfile[] = [];
        if (storedUsers) {
          try {
            initialUsers = JSON.parse(storedUsers);
          } catch (e) {
            initialUsers = [];
          }
        }
        if (initialUsers.length === 0) {
          initialUsers = [
            { id: "1", username: "admin", role: "admin", password: "godfrey2026" },
            { id: "2", username: "manager", role: "content-manager", password: "angels2026" },
          ];
        }
        setUsers(initialUsers);

        const loggedUserJson = localStorage.getItem("angels_care_logged_user");
        if (loggedUserJson) {
          try {
            const profile = JSON.parse(loggedUserJson);
            const matched = initialUsers.find((u: UserProfile) => u.username.toLowerCase() === profile.username.toLowerCase());
            if (matched) {
              setCurrentUser(matched);
              setIsLogged(true);
            }
          } catch (e) {}
        }
      });
  }, []);

  // Sync users database helper
  const saveUsersToDB = (updatedList: UserProfile[]) => {
    setUsers(updatedList);
    localStorage.setItem("angels_care_users", JSON.stringify(updatedList));
    
    // Sync to MySQL / File database backend securely
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedList),
    })
      .then((res) => {
        if (!res.ok) throw new Error("User database synchronization failure");
        console.log("Users catalog updated securely in database.");
      })
      .catch((err) => {
        console.error("Failed syncing users in database backend:", err);
      });
  };

  // Fetch schema parameters
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
        setJsonError(null);
        setMessage(null);
      })
      .catch((err) => {
        console.error(err);
        setContentPayload(null);
        setJsonError(`Failed to fetch initial file payload from the API server: ${err.message || err}`);
      });
  }, [selectedSchema, isLogged, navigationTab]);

  // Fetch Media Storage
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
    if (isLogged) {
      fetchMedia();
    }
  }, [isLogged]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const query = username.toLowerCase().trim();
    const matched = users.find((u) => u.username.toLowerCase() === query);

    if (matched && matched.password === password) {
      localStorage.setItem("angels_care_auth", "true");
      localStorage.setItem("angels_care_logged_user", JSON.stringify(matched));
      setCurrentUser(matched);
      setIsLogged(true);
      setLoginError(null);
    } else {
      setLoginError("Invalid administrator or content manager credentials. Please check details.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("angels_care_auth");
    localStorage.removeItem("angels_care_logged_user");
    setCurrentUser(null);
    setIsLogged(false);
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  // Process and save local uploads
  const processUpload = (file: File, selectForFieldPath?: string) => {
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
            if (selectForFieldPath) {
              handleFieldChange(selectForFieldPath, data.url);
              setActiveMediaPickerField(null);
              setMessage({ type: "success", text: `Asset stored and selected inside the current image slot!` });
            } else {
              setMessage({ type: "success", text: `Asset "${data.name}" stored in the local catalog!` });
            }
            setTimeout(() => setMessage(null), 4000);
          } else {
            setMessage({ type: "error", text: data.error || "File upload save failed" });
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
      .catch((err) => console.error("Error purging media item", err));
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedFile(url);
    setTimeout(() => setCopiedFile(null), 2000);
  };

  // Form value nested handlers
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
  };

  const handleSave = () => {
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

  // Drag and drop mechanics
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

  // Users management CRUD functions
  const handleOpenAddUser = () => {
    setEditingUser(null);
    setUserFormUsername("");
    setUserFormPassword("");
    setUserFormRole("content-manager");
    setUserFormError(null);
    setUsersTabMode("add");
  };

  const handleOpenEditUser = (profile: UserProfile) => {
    setEditingUser(profile);
    setUserFormUsername(profile.username);
    setUserFormPassword(profile.password || "");
    setUserFormRole(profile.role);
    setUserFormError(null);
    setUsersTabMode("edit");
  };

  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();
    setUserFormError(null);
    setUserSuccessMessage(null);

    const nameQuery = userFormUsername.trim();
    if (!nameQuery) {
      setUserFormError("Username field is required.");
      return;
    }

    if (userFormPassword.length < 5) {
      setUserFormError("Password keys must be at least 5 characters long.");
      return;
    }

    // Creating new account
    if (!editingUser) {
      const duplicate = users.find((u) => u.username.toLowerCase() === nameQuery.toLowerCase());
      if (duplicate) {
        setUserFormError("Account username is already in use by another operator.");
        return;
      }

      const generatedId = (Math.max(...users.map((u) => parseInt(u.id) || 0)) + 1).toString();
      const newUserProfile: UserProfile = {
        id: generatedId,
        username: nameQuery,
        role: userFormRole,
        password: userFormPassword,
      };

      const updated = [...users, newUserProfile];
      saveUsersToDB(updated);
      setUserSuccessMessage(`Operator account "${nameQuery}" successfully activated!`);
    } else {
      // Editing existing account
      const duplicate = users.find(
        (u) => u.username.toLowerCase() === nameQuery.toLowerCase() && u.id !== editingUser.id
      );
      if (duplicate) {
        setUserFormError("Account username is already in use by another operator.");
        return;
      }

      const updated = users.map((u) => {
        if (u.id === editingUser.id) {
          return {
            ...u,
            username: nameQuery,
            role: userFormRole,
            password: userFormPassword,
          };
        }
        return u;
      });

      saveUsersToDB(updated);

      // If updating ourself, sync memory
      if (currentUser && currentUser.id === editingUser.id) {
        const matchingCurrent = updated.find((u) => u.id === currentUser.id);
        if (matchingCurrent) {
          setCurrentUser(matchingCurrent);
          localStorage.setItem("angels_care_logged_user", JSON.stringify(matchingCurrent));
        }
      }

      setUserSuccessMessage(`Operator account credentials successfully synced!`);
    }

    // Refresh settings
    setEditingUser(null);
    setUserFormUsername("");
    setUserFormPassword("");
    setUserFormRole("content-manager");
    setUsersTabMode("list");
    setTimeout(() => setUserSuccessMessage(null), 4000);
  };

  const handleDeleteUser = (profile: UserProfile) => {
    if (currentUser && currentUser.id === profile.id) {
      alert("Error: You cannot delete your own active administrator profile session!");
      return;
    }

    if (!confirm(`Are you sure you want to permanently delete user "${profile.username}"?`)) return;

    const filtered = users.filter((u) => u.id !== profile.id);
    saveUsersToDB(filtered);
    setUserSuccessMessage(`Account operator "${profile.username}" deleted successfully.`);
    setTimeout(() => setUserSuccessMessage(null), 4000);
  };

  const openMediaPicker = (path: string) => {
    setActiveMediaPickerField({ path });
    setMediaSearch("");
  };

  // LIGHT WHITE THEME STYLE CONSTANTS
  const isThemeLight = true;

  if (!isLogged) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4 font-sans select-none relative overflow-hidden">
        {/* Glow ambient design effects */}
        <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-coral/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[350px] h-[350px] rounded-full bg-coral/10 blur-[120px]" />

        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-xl p-8 backdrop-blur-md z-10 transition-transform hover:scale-[1.01]">
          <div className="flex flex-col items-center mb-6">
            <div className="h-12 w-auto mb-4">
              <img src={logo.url} alt="Angels Care Uganda" className="h-10 w-auto" />
            </div>
            <h1 className="text-lg font-bold tracking-tight text-slate-800 mb-1 flex items-center gap-2">
              Angels Care Admin Center
            </h1>
            <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-mono">
              SECURE CMS CONTROL MODULE
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                Operator Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. admin"
                className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral text-slate-800 rounded-lg text-xs transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                CMS Access Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••••"
                className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral text-slate-800 rounded-lg text-xs transition-colors"
                required
              />
            </div>

            {loginError && (
              <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-xs leading-relaxed">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2.5 bg-coral hover:bg-coral/95 active:scale-[0.99] font-bold text-white rounded-lg text-xs tracking-wide transition-all duration-150 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" /> Authenticate Operator
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Embedded Gateway</span>
            <span>v5.2-Angels-Stable</span>
          </div>
        </div>
      </div>
    );
  }

  // Filter lists inside picker
  const filteredPickerMedia = mediaList.filter((m) => m.name.toLowerCase().includes(mediaSearch.toLowerCase()));

  return (
    <AdminContext.Provider value={{ openMediaPicker, mediaList, fetchMedia }}>
      <div className="h-screen w-screen max-h-screen flex flex-col font-sans bg-slate-50 text-slate-800 overflow-hidden">
        {/* WEBSITES REAL COHESIVE TOP CMS BAR */}
        <header className="bg-white border-b border-slate-200 px-6 h-16 shrink-0 flex items-center justify-between z-10 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 hover:bg-slate-100 rounded-lg text-slate-600 cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <img src={logo.url} alt="Angels Care Uganda Logo" className="h-8 w-auto" />
              <div className="hidden sm:block">
                <h1 className="text-xs font-bold tracking-tight text-slate-800 flex items-center gap-1">
                  <span>Angels Care Portal</span>
                </h1>
                <p className="text-[9px] text-slate-401 tracking-wider text-slate-400">Headless File Synchronization Module</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-650 hover:text-coral bg-slate-50 border border-slate-200 px-4 py-2 rounded-full transition-colors"
            >
              <Eye className="w-3.5 h-3.5" /> View Website
            </a>

            {/* NEW ADMIN PROFILE DROPDOWN MENU AT TOP HEADER (Requirement 9) */}
            <div className="flex items-center gap-2.5 border-l border-slate-200 pl-4 py-1">
              <div className="w-8 h-8 rounded-full bg-coral/10 border border-coral/25 text-coral flex items-center justify-center font-bold text-xs shadow-inner">
                {currentUser ? currentUser.username.slice(0, 2).toUpperCase() : "OP"}
              </div>
              <div className="hidden sm:block text-left pr-1">
                <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="truncate max-w-[80px]">{currentUser?.username}</span>
                  <span
                    className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded font-mono uppercase tracking-wider ${
                      currentUser?.role === "admin"
                        ? "bg-coral/10 text-coral border border-coral/15"
                        : "bg-teal-50 text-teal-700 border border-teal-150"
                    }`}
                  >
                    {currentUser?.role === "admin" ? "Admin" : "Editor"}
                  </span>
                </div>
                <p className="text-[9px] text-slate-400 capitalize">Role session active</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1 text-[11px] font-bold text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100/80 px-3.5 py-2 rounded-full border border-red-150 transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" /> Logout
            </button>
          </div>
        </header>

        {/* CORE FRAME LAYOUT */}
        <div className="flex-grow flex h-[calc(100vh-64px)] overflow-hidden relative">
          {/* SIDEBAR NAVIGATION (Requirement 7 desktop viewport containment) */}
          <nav
            className={`${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 transition-transform duration-200 ease-in-out absolute md:relative z-20 w-64 md:w-72 bg-white border-r border-slate-205 p-5 h-full flex flex-col space-y-5 overflow-y-auto shrink-0 shadow-sm`}
          >
            <div className="space-y-4">
              <h2 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase px-2">
                Core Workspace Modules
              </h2>

              <div className="space-y-1">
                {/* MEDIA LIBRARY TO BE THE 1st TAB (Requirement 4) */}
                <button
                  onClick={() => {
                    setNavigationTab("media-library");
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs transition-all cursor-pointer ${
                    navigationTab === "media-library"
                      ? "bg-coral text-white font-bold shadow-md shadow-coral/10"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <ImageIcon className="w-4 h-4 shrink-0" />
                    <span>Media Library Catalog</span>
                  </span>
                </button>

                {/* USERS TAB (Requirement 9) */}
                {currentUser?.role === "admin" && (
                  <button
                    onClick={() => {
                      setNavigationTab("users");
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs transition-all cursor-pointer ${
                      navigationTab === "users"
                        ? "bg-coral text-white font-bold shadow-md shadow-coral/10"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <Users className="w-4 h-4 shrink-0" />
                      <span>System Operators (CRUD)</span>
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* SINGLE TYPES COLLAPSIBLE - ALWAYS VISIBLE BELOW MAIN NAVIGATION (Requirement 5) */}
            <div className="flex-grow space-y-4 pt-4 border-t border-slate-100">
              <div className="space-y-1">
                <h3 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase px-2 mb-2">
                  Pages & content types
                </h3>

                {CONTENT_SCHEMAS.filter((s) => s.type === "single").map((schema) => {
                  const isActive = navigationTab === "content-manager" && selectedSchema.id === schema.id;
                  const isHopeStoriesItem = schema.id === "hope_stories";

                  return (
                    <div key={schema.id} className="space-y-1">
                      <button
                        onClick={() => {
                          setSelectedSchema(schema);
                          setNavigationTab("content-manager");
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2 rounded-lg text-left text-xs transition-all cursor-pointer ${
                          isActive
                            ? "bg-coral/10 text-coral font-bold border-l-2 border-coral pl-2.5"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-950 font-medium"
                        }`}
                      >
                        <span className="flex items-center gap-2 truncate">
                          <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{schema.name}</span>
                        </span>
                        <ChevronRight className={`w-3 h-3 text-slate-400 transition-transform ${isActive ? "rotate-90 text-coral" : ""}`} />
                      </button>

                      {/* HOPE STORIES SUBMENU FOR COLLECTION TYPES (Requirement 6) */}
                      {isHopeStoriesItem && (
                        <div className="pl-6 pt-1 pb-1 space-y-1 border-l border-slate-150 ml-5">
                          {CONTENT_SCHEMAS.filter((s) => s.type === "collection").map((subSchema) => {
                            const isSubActive =
                              navigationTab === "content-manager" && selectedSchema.id === subSchema.id;
                            return (
                              <button
                                key={subSchema.id}
                                onClick={() => {
                                  setSelectedSchema(subSchema);
                                  setNavigationTab("content-manager");
                                  setMobileMenuOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-left text-[11px] transition-all cursor-pointer ${
                                  isSubActive
                                    ? "text-coral font-bold bg-coral/5"
                                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-medium"
                                }`}
                              >
                                <span className="truncate text-[10px]" title={subSchema.name}>
                                  📋 {subSchema.name}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>Platform standard</span>
              <span>Light theme active</span>
            </div>
          </nav>

          {/* MAIN CONTAINER WINDOW (Requirement 7 scrollbars constrained) */}
          <main className="flex-grow p-6 md:p-8 flex flex-col space-y-6 overflow-y-auto h-full bg-slate-50">
            {/* Feedback alert banners */}
            {message && (
              <div
                className={`flex items-start gap-2.5 p-4 rounded-xl border text-xs leading-relaxed shadow-sm transition-all ${
                  message.type === "success"
                    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                    : "bg-red-50 border-red-200 text-red-800"
                }`}
              >
                {message.type === "success" ? (
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-650 text-red-600" />
                )}
                <span>{message.text}</span>
              </div>
            )}

            {/* TAB 1: MEDIA LIBRARY */}
            {navigationTab === "media-library" && (
              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <h2 className="text-xl font-bold text-slate-850 text-slate-900 tracking-tight">
                    Website Media Library Catalog
                  </h2>
                  <p className="text-xs text-slate-505 text-slate-500">
                    Upload new items, explore, or retrieve storage reference routes of images to configure site layouts dynamically.
                  </p>
                </div>

                {/* DRAG AND DROP ZONE */}
                <div
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
                  className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all ${
                    isDragging
                      ? "border-coral bg-coral/5"
                      : "border-slate-200 bg-white hover:bg-slate-50/50"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mb-4 border border-coral/20">
                    <Upload className="w-5 h-5 text-coral" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">
                    Drag & Drop your banner or portrait files here
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 max-w-xs leading-relaxed">
                    Files upload securely as static resources hosted automatically in the `/uploads/` subdirectory.
                  </p>

                  <label className="px-5 py-2 bg-coral hover:bg-coral/95 text-white text-xs font-bold rounded-full shadow-sm cursor-pointer transition-all active:scale-[0.98]">
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

                {/* MEDIA STREAMING LOADER */}
                {uploadLoading ? (
                  <div className="flex flex-col items-center py-20 text-xs text-slate-400">
                    <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-coral animate-spin mb-3" />
                    Writing asset payload to physical database systems...
                  </div>
                ) : mediaList.length === 0 ? (
                  <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl text-xs text-slate-400">
                    No images uploaded inside media folder. Click "Browse Files" or drag to insert folder items!
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                        Available Assets ({mediaList.length})
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                      {mediaList.map((asset) => (
                        <div
                          key={asset.name}
                          className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col group hover:border-coral transition-all"
                        >
                          {/* Image preview module */}
                          <div className="h-32 bg-slate-50 flex items-center justify-center relative overflow-hidden select-none border-b border-slate-100">
                            {asset.format === "image" ? (
                              <img
                                src={asset.url}
                                alt={asset.name}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                              />
                            ) : (
                              <ImageIcon className="w-8 h-8 text-slate-400 animate-pulse" />
                            )}
                            <span className="absolute bottom-2 right-2 text-[9px] font-mono bg-black/65 text-white px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">
                              {asset.format}
                            </span>
                          </div>

                          <div className="p-3.5 flex-grow flex flex-col space-y-2">
                            <div className="flex-grow">
                              <p className="text-[11px] font-bold text-slate-800 truncate" title={asset.name}>
                                {asset.name}
                              </p>
                              <p className="text-[9px] text-slate-400 font-mono mt-0.5">
                                Size: {formatBytes(asset.size)}
                              </p>
                            </div>

                            <div className="flex items-center gap-1.5 pt-2 border-t border-slate-100">
                              <button
                                onClick={() => handleCopyUrl(asset.url)}
                                className={`flex-grow py-1.5 rounded-lg text-[10px] font-bold border flex items-center justify-center gap-1 transition-all cursor-pointer ${
                                  copiedFile === asset.url
                                    ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                                    : "bg-slate-50 border-slate-200 text-slate-650 hover:bg-slate-100/80"
                                }`}
                              >
                                {copiedFile === asset.url ? "Copied" : "Copy path"}
                              </button>

                              <button
                                onClick={() => handleDeleteMedia(asset.name)}
                                className="p-1.5 bg-red-50 text-red-650 text-red-500 hover:bg-red-100/50 rounded-lg border border-red-100 transition-colors cursor-pointer"
                                title="Delete file"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: CONTENT SCHEMA MANAGER */}
            {navigationTab === "content-manager" && (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono uppercase tracking-wider mb-1">
                      <span>Collections Editor</span>
                      <span>/</span>
                      <span className="text-coral font-bold bg-coral/5 px-2 py-0.2 rounded font-mono text-[10px]">
                        {selectedSchema.type} schema
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-850 text-slate-900 tracking-tight flex items-center gap-2">
                      {selectedSchema.name}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleSave}
                      disabled={saving || !contentPayload}
                      className={`px-5 py-2.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 transition-all cursor-pointer ${
                        saving
                          ? "bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed"
                          : "bg-coral hover:bg-coral/95 text-white active:scale-[0.98]"
                      }`}
                    >
                      <Save className="w-4 h-4" /> {saving ? "Saving content..." : "Publish Page Changes"}
                    </button>
                  </div>
                </div>

                {/* NO RAW SWITHCER TABS - VISUAL ONLY (Requirement 10) */}
                <div className="flex-grow">
                  {!contentPayload ? (
                    <div className="flex-grow flex flex-col justify-center items-center py-20 text-slate-405 text-xs text-center border border-slate-200 rounded-2xl bg-white p-8 space-y-4 shadow-sm">
                      {jsonError ? (
                        <div className="space-y-4 max-w-sm">
                          <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
                          <h3 className="text-sm font-bold text-slate-800">API Gateway Offline</h3>
                          <p className="text-slate-500 leading-relaxed text-[11px]">
                            Could not fetch initial content database node for{" "}
                            <strong>{selectedSchema.file}.json</strong>. This could be due to background server syncing
                            or local disk permissions.
                          </p>
                          <button
                            onClick={() => {
                              setJsonError(null);
                              const prev = selectedSchema;
                              setSelectedSchema({ ...prev });
                            }}
                            className="px-4 py-2 bg-coral hover:bg-coral/90 text-white text-xs font-bold rounded-full transition-all active:scale-95 shadow-md shadow-coral/10 cursor-pointer"
                          >
                            Retry API Endpoint
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-coral animate-spin mb-3" />
                          <p className="text-slate-600 font-semibold">Connecting file synchronization gateway...</p>
                          <p className="text-[10px] text-slate-450 text-slate-400 max-w-xs leading-relaxed">
                            Reading physical JSON structures across the server cluster pools.
                          </p>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="bg-white border border-slate-200 p-5 md:p-8 rounded-2xl shadow-sm space-y-6">
                      <div className="bg-coral/5 border border-coral/10 p-4 rounded-xl text-[11px] text-slate-605 text-slate-600 leading-relaxed flex items-center gap-2">
                        <Info className="w-4 h-4 text-coral shrink-0" />
                        <div>
                          <span className="font-semibold text-slate-800">Interactive Editor Mode:</span> Automatic page layout detection and visual schema render.
                        </div>
                      </div>

                      <RenderValue
                        value={contentPayload}
                        path=""
                        label={selectedSchema.name}
                        onValueChange={handleFieldChange}
                      />
                    </div>
                  )}
                </div>
              </>
            )}

            {/* TAB 3: USERS ADMINISTRATION VIEW (Requirement 9) */}
            {navigationTab === "users" && currentUser?.role === "admin" && (
              <div className="space-y-6">
                {usersTabMode === "list" ? (
                  <>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-4">
                      <div>
                        <h2 className="text-xl font-bold text-slate-850 text-slate-900 tracking-tight flex items-center gap-2">
                          <Users className="w-5 h-5 text-coral shrink-0" />
                          <span>Portal Operators & Accounts (CRUD)</span>
                        </h2>
                        <p className="text-xs text-slate-500">
                          View active portal sessions, manage operator access properties, or add new staff.
                        </p>
                      </div>

                      <button
                        onClick={handleOpenAddUser}
                        className="px-4 py-2 bg-coral hover:bg-coral/95 text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                      >
                        <UserPlus className="w-4 h-4" /> Add New Operator
                      </button>
                    </div>

                    {/* CRUD messages */}
                    {userSuccessMessage && (
                      <div className="flex items-center gap-2.5 p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-850 text-xs shadow-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{userSuccessMessage}</span>
                      </div>
                    )}

                    <div className="max-w-4xl space-y-4">
                      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                            Active Operators Accounts ({users.length})
                          </h3>
                        </div>

                        <div className="divide-y divide-slate-100">
                          {users.map((profile) => (
                            <div key={profile.id} className="p-4 sm:p-5 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-150 flex items-center justify-center text-slate-600 font-bold text-sm">
                                  {profile.username.slice(0, 2).toUpperCase()}
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-slate-800 flex items-center gap-2">
                                    <span>{profile.username}</span>
                                    {currentUser?.id === profile.id && (
                                      <span className="text-[9px] bg-slate-100 text-slate-500 px-1 py-0.2 rounded font-medium">
                                        Your Profile
                                      </span>
                                    )}
                                  </div>
                                  <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded font-mono uppercase mt-1 inline-block ${
                                    profile.role === "admin"
                                      ? "bg-coral/10 text-coral border border-coral/10"
                                      : "bg-teal-50 text-teal-700 border border-teal-100"
                                  }`}>
                                    {profile.role === "admin" ? "System Admin" : "Content Manager"}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                {/* Edit triggers */}
                                <button
                                  onClick={() => handleOpenEditUser(profile)}
                                  className="px-3 py-1.5 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                                >
                                  Edit Profile
                                </button>

                                {/* Delete triggers (disabled on current user) */}
                                <button
                                  onClick={() => handleDeleteUser(profile)}
                                  disabled={currentUser?.id === profile.id}
                                  className={`p-2 rounded-lg border transition-colors ${
                                    currentUser?.id === profile.id
                                      ? "bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed"
                                      : "bg-red-50 border-red-200 hover:bg-red-100 text-red-650 text-red-600 cursor-pointer"
                                  }`}
                                  title={currentUser?.id === profile.id ? "Cannot delete yourself" : "Delete profile"}
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                      <button
                        onClick={() => setUsersTabMode("list")}
                        className="p-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-650 hover:text-slate-900 rounded-full transition-all shadow-sm cursor-pointer"
                        title="Back to Operators List"
                      >
                        <ChevronLeft className="w-5 h-5 shrink-0" />
                      </button>
                      <div>
                        <h2 className="text-xl font-bold text-slate-850 text-slate-900 tracking-tight">
                          {usersTabMode === "edit" ? "Edit Operator Credentials" : "Add New System Operator"}
                        </h2>
                        <p className="text-xs text-slate-500 font-medium">
                          {usersTabMode === "edit" ? `Modify user profiles settings for "${editingUser?.username}"` : "Register a new operator with credentials level"}
                        </p>
                      </div>
                    </div>

                    <div className="max-w-xl mx-auto pt-6">
                      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
                        <div className="border-b border-slate-100 pb-4">
                          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-mono flex items-center gap-1.5 font-semibold">
                            <ShieldCheck className="w-5 h-5 text-coral shrink-0" />{" "}
                            {editingUser ? "Configure Operator Profile" : "Register Operator Module"}
                          </h3>
                        </div>

                        <form onSubmit={handleSaveUser} className="space-y-6">
                          {userFormError && (
                            <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl flex items-start gap-2.5 leading-relaxed">
                              <AlertCircle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                              <span>{userFormError}</span>
                            </div>
                          )}

                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                              Account Username
                            </label>
                            <input
                              type="text"
                              value={userFormUsername}
                              onChange={(e) => setUserFormUsername(e.target.value)}
                              placeholder="e.g. joshua"
                              required
                              className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-coral focus:ring-1 focus:ring-coral text-slate-800 outline-none text-xs rounded-xl transition-colors shadow-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                              CMS Access Password
                            </label>
                            <input
                              type="password"
                              value={userFormPassword}
                              onChange={(e) => setUserFormPassword(e.target.value)}
                              placeholder="••••••••••••"
                              required
                              className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-coral focus:ring-1 focus:ring-coral text-slate-800 outline-none text-xs rounded-xl transition-colors shadow-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                              System Role Level
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                              <button
                                type="button"
                                onClick={() => setUserFormRole("content-manager")}
                                className={`px-4 py-3 text-xs font-bold border rounded-xl transition-all text-center cursor-pointer ${
                                  userFormRole === "content-manager"
                                    ? "bg-coral/10 border-coral text-coral shadow-sm shadow-coral/5"
                                    : "bg-white border-slate-200 text-slate-650 hover:bg-slate-50"
                                }`}
                              >
                                Content Manager
                              </button>
                              <button
                                type="button"
                                onClick={() => setUserFormRole("admin")}
                                className={`px-4 py-3 text-xs font-bold border rounded-xl transition-all text-center cursor-pointer ${
                                  userFormRole === "admin"
                                    ? "bg-coral/10 border-coral text-coral shadow-sm shadow-coral/5"
                                    : "bg-white border-slate-200 text-slate-650 hover:bg-slate-50"
                                }`}
                              >
                                Administrator
                              </button>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-2 font-medium leading-relaxed">
                              {userFormRole === "admin"
                                ? "Admins can do anything on the dashboard, modify contents, and add/edit/delete other user profiles."
                                : "Content managers can edit site schemas page nodes and upload files, but cannot touch user permissions."}
                            </p>
                          </div>

                          <div className="flex gap-3 pt-4 border-t border-slate-100">
                            <button
                              type="button"
                              onClick={() => setUsersTabMode("list")}
                              className="flex-grow py-3 border border-slate-300 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="flex-grow py-3 bg-coral hover:bg-coral/95 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer hover:shadow-coral/10 transition-all active:scale-[0.98]"
                            >
                              {editingUser ? "Save Operator Profile" : "Activate Operator"}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </main>
        </div>

        {/* REUSEABLE COMPACT ADVANCED MEDIA PICKER DIALOG POPUP MODAL (Requirement 8) */}
        {activeMediaPickerField && (
          <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
              onClick={() => setActiveMediaPickerField(null)}
            />

            {/* Modal Box */}
            <div className="bg-white rounded-2xl w-full max-w-2xl border border-slate-200 shadow-2xl flex flex-col h-[520px] max-h-[85vh] z-10 overflow-hidden">
              {/* Header */}
              <div className="px-5 py-3.5 border-b border-slate-150 flex items-center justify-between bg-slate-50 shrink-0">
                <div>
                  <h3 className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase">
                    Advanced Media Asset Selector
                  </h3>
                  <p className="text-xs font-extrabold text-slate-800 text-[11px] truncate max-w-sm">
                    Target Form Field: <code className="text-coral bg-coral/5 px-1 rounded font-mono text-[10px]">{activeMediaPickerField.path}</code>
                  </p>
                </div>
                <button
                  onClick={() => setActiveMediaPickerField(null)}
                  className="p-1 text-slate-405 hover:bg-slate-100/80 rounded-full text-slate-500 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Advanced Search & Direct inline upload bar */}
              <div className="px-5 py-3.5 bg-white border-b border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                {/* Search */}
                <div className="flex-grow relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={mediaSearch}
                    onChange={(e) => setMediaSearch(e.target.value)}
                    placeholder="Search images name..."
                    className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 focus:border-coral focus:ring-1 focus:ring-coral text-slate-800 rounded-lg outline-none transition-colors"
                  />
                </div>

                {/* Quick inline upload inside media picker popup */}
                <label className="bg-coral hover:bg-coral/95 text-white font-semibold text-xs py-2 px-4 rounded-lg shadow-sm text-center cursor-pointer transition-colors shrink-0">
                  {uploadLoading ? "Uploading..." : "Upload & Select"}
                  <input
                    type="file"
                    accept="image/*"
                    disabled={uploadLoading}
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        processUpload(e.target.files[0], activeMediaPickerField.path);
                      }
                    }}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Grid content of images */}
              <div className="flex-grow p-5 overflow-y-auto bg-slate-50">
                {uploadLoading ? (
                  <div className="flex flex-col items-center py-20 text-xs text-slate-400">
                    <div className="w-6 h-6 rounded-full border-2 border-slate-300 border-t-coral animate-spin mb-3" />
                    Writing asset into current layout field...
                  </div>
                ) : filteredPickerMedia.length === 0 ? (
                  <div className="text-center py-20 text-slate-400 text-xs font-medium">
                    No matching image files found. Try uploading one directly!
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {filteredPickerMedia.map((asset) => (
                      <div
                        key={asset.name}
                        onClick={() => {
                          handleFieldChange(activeMediaPickerField.path, asset.url);
                          setActiveMediaPickerField(null);
                        }}
                        className="bg-white border border-slate-200 hover:border-coral hover:shadow-md rounded-xl overflow-hidden cursor-pointer flex flex-col transition-all group"
                      >
                        <div className="h-24 bg-slate-50 flex items-center justify-center border-b border-slate-100 relative overflow-hidden select-none">
                          {asset.format === "image" ? (
                            <img
                              src={asset.url}
                              alt={asset.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-250"
                            />
                          ) : (
                            <ImageIcon className="w-6 h-6 text-slate-400" />
                          )}
                        </div>
                        <div className="p-2 flex-grow flex flex-col justify-center">
                          <p className="text-[10px] font-bold text-slate-800 truncate" title={asset.name}>
                            {asset.name}
                          </p>
                          <p className="text-[9px] text-slate-400 font-mono mt-0.5">{formatBytes(asset.size)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 text-[10px] text-slate-400 font-medium font-mono flex justify-between shrink-0">
                <span>Select any image to auto-inject in slot</span>
                <span>Found {filteredPickerMedia.length} results</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminContext.Provider>
  );
}
