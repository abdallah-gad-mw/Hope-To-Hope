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
      { section: "Hero Section", label: "Hero Banner Image Route", key: "hero.image", type: "text" },
      { section: "Purpose Section", label: "Badge", key: "purpose.badge", type: "text" },
      { section: "Purpose Section", label: "Main Header", key: "purpose.title", type: "text" },
      { section: "Purpose Section", label: "Paragraphs", key: "purpose.paragraphs", type: "array-text" },
      { section: "Purpose Section", label: "Image Route", key: "purpose.image", type: "text" },
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

export function AdminDashboard() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string | null>(null);

  const [selectedSchema, setSelectedSchema] = useState<ContentSchema>(CONTENT_SCHEMAS[0]);
  const [contentPayload, setContentPayload] = useState<any>(null);
  const [jsonText, setJsonText] = useState<string>("");
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"visual" | "raw">("visual");
  const [saving, setSaving] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Authenticate session on client localstorage
  useEffect(() => {
    const auth = localStorage.getItem("angels_care_auth");
    if (auth === "true") {
      setIsLogged(true);
    }
  }, []);

  // Fetch file content whenever selection changes
  useEffect(() => {
    if (!isLogged) return;
    
    fetch(`/api/content/${selectedSchema.file}`)
      .then((res) => {
        if (!res.ok) throw new Error("File file lookup failed.");
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
        setJsonError("Failed to fetch initial file payload from the API server");
      });
  }, [selectedSchema, isLogged]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.toLowerCase() === ADMIN_USER && password === ADMIN_PASS) {
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

  // Helper to read nested keys dynamically
  const getNestedValue = (obj: any, pathStr: string): any => {
    if (!obj) return "";
    const parts = pathStr.split(".");
    let current = obj;
    for (const part of parts) {
      if (current[part] === undefined) return "";
      current = current[part];
    }
    return current;
  };

  // Helper to set nested keys safely without mutating directly
  const setNestedValue = (obj: any, pathStr: string, val: any): any => {
    const copy = JSON.parse(JSON.stringify(obj));
    const parts = pathStr.split(".");
    let current = copy;
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (current[part] === undefined) {
        current[part] = {};
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

  if (!isLogged) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 font-sans select-none relative overflow-hidden">
        {/* Glow ambient design effects */}
        <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-amber-500/10 blur-[130px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8 backdrop-blur-md z-10 transition-transform hover:scale-[1.01]">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-tr from-amber-500 to-coral rounded-2xl flex items-center justify-center shadow-lg border border-white/10 mb-4 animate-pulse">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white mb-2 font-mono flex items-center gap-2">
              <Database className="w-5 h-5 text-amber-500" /> Strapi v5 Core
            </h1>
            <p className="text-xs text-slate-400 text-center">
              Angels Care Uganda Content Management Administration System
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
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 text-slate-200 rounded-lg text-sm transition-colors"
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
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 text-slate-200 rounded-lg text-sm transition-colors"
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
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-coral hover:opacity-90 active:scale-[0.99] font-semibold text-white rounded-lg text-sm shadow-lg tracking-wider transition-all duration-150 flex items-center justify-center gap-2"
            >
              <Key className="w-4 h-4" /> Authenticate Access
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
            <span>Powered by Strapi Embedded Gateway</span>
            <span>v5.2.0-stable</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-200">
      {/* CMS TOP BAR */}
      <header className="bg-slate-900 border-b border-slate-800/80 px-4 py-3 flex items-center justify-between shadow-md z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 hover:bg-slate-800 rounded-lg text-slate-400"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="w-9 h-9 bg-gradient-to-tr from-amber-500 to-coral rounded-xl flex items-center justify-center shadow-md">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>Angels Care CMS Studio</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-500 px-1.5 py-0.5 rounded font-mono border border-amber-500/35">
                Strapi v5 Core
              </span>
            </h1>
            <p className="text-[10px] text-slate-400">Content Synchronization Interface</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/"
            className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-slate-300 hover:text-white bg-slate-800/60 px-2.5 py-1.5 rounded-lg border border-slate-700/60 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" /> View Live Application
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-[11px] font-semibold text-red-400 hover:text-red-300 bg-red-950/20 hover:bg-red-950/45 px-2.5 py-1.5 rounded-lg border border-red-900/35 transition-all"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      </header>

      {/* WORKSPACE PANELS */}
      <div className="flex-grow flex relative">
        {/* SIDE BAR NAVIGATION */}
        <nav
          className={`${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-200 ease-in-out absolute md:relative z-20 w-64 md:w-72 bg-slate-900/95 border-r border-slate-800/80 p-4 h-full md:h-auto flex flex-col space-y-6 overflow-y-auto`}
        >
          {/* Section: Single Types */}
          <div className="space-y-2">
            <h2 className="text-[11px] font-bold text-slate-400 tracking-widest uppercase px-2 mb-3">
              Single Pages (Static)
            </h2>
            <div className="space-y-0.5">
              {CONTENT_SCHEMAS.filter((s) => s.type === "single").map((schema) => (
                <button
                  key={schema.id}
                  onClick={() => {
                    setSelectedSchema(schema);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs transition-colors ${
                    selectedSchema.id === schema.id
                      ? "bg-amber-500/10 text-amber-500 font-semibold border-l-2 border-amber-500"
                      : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{schema.name}</span>
                  </span>
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                </button>
              ))}
            </div>
          </div>

          {/* Section: Collection Types */}
          <div className="space-y-2 pt-2 border-t border-slate-800/60">
            <h2 className="text-[11px] font-bold text-slate-400 tracking-widest uppercase px-2 mb-3">
              Stories & Posts (Dynamic Collection)
            </h2>
            <div className="space-y-0.5">
              {CONTENT_SCHEMAS.filter((s) => s.type === "collection").map((schema) => (
                <button
                  key={schema.id}
                  onClick={() => {
                    setSelectedSchema(schema);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs transition-colors ${
                    selectedSchema.id === schema.id
                      ? "bg-cyan-500/10 text-cyan-500 font-semibold border-l-2 border-cyan-500"
                      : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <Grid className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{schema.name}</span>
                  </span>
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex-grow" />

          {/* Footer of Sidebar */}
          <div className="bg-slate-950/65 rounded-xl p-3 border border-slate-800/50 text-[11px] text-slate-400">
            <div className="font-semibold text-slate-300 mb-1 flex items-center gap-1">
              <Database className="w-3 h-3 text-emerald-400" /> Content Engine Live
            </div>
            Production filesystem writes are active. Changes compile and reflect instantly inside active router instances.
          </div>
        </nav>

        {/* MAIN PANEL */}
        <main className="flex-grow p-4 md:p-8 flex flex-col space-y-6 overflow-y-auto max-h-[calc(100vh-64px)] selection:bg-amber-500/25 select-text">
          {/* Workspace Title bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-1">
                <span>Collections</span>
                <span>/</span>
                <span className="text-amber-500 capitalize">{selectedSchema.type} type</span>
              </div>
              <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                {selectedSchema.name}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSave}
                disabled={saving || !!jsonError}
                className={`px-4 py-2 rounded-lg text-xs font-semibold shadow-md border flex items-center gap-1.5 transition-all ${
                  saving
                    ? "bg-slate-800 border-slate-700 text-slate-400 cursor-not-allowed"
                    : "bg-amber-500 hover:bg-amber-600 border-amber-400 text-slate-950"
                }`}
              >
                <Save className="w-3.5 h-3.5" /> {saving ? "Saving Changes..." : "Publish Content"}
              </button>
            </div>
          </div>

          {/* Feedback Blocks */}
          {message && (
            <div
              className={`flex items-start gap-2.5 p-4 rounded-xl border text-xs leading-relaxed transition-all ${
                message.type === "success"
                  ? "bg-emerald-950/35 border-emerald-900/40 text-emerald-400"
                  : "bg-red-950/35 border-red-900/40 text-red-400"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500 animate-bounce" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
              )}
              <span>{message.text}</span>
            </div>
          )}

          {/* Workspace Tabs navigation */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-px">
            <div className="flex gap-2 text-xs">
              <button
                onClick={() => setActiveTab("visual")}
                className={`pb-3 px-3 relative font-semibold transition-colors ${
                  activeTab === "visual" ? "text-amber-500 border-b-2 border-amber-500" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5" /> Visual Layout Blocks
                </span>
              </button>
              <button
                onClick={() => setActiveTab("raw")}
                className={`pb-3 px-3 relative font-semibold transition-colors ${
                  activeTab === "raw" ? "text-amber-500 border-b-2 border-amber-500" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <FileJson className="w-3.5 h-3.5" /> Direct Raw JSON Entry
                </span>
              </button>
            </div>
            
            <span className="text-[10px] text-slate-500 font-mono">
              Src/content/{selectedSchema.file}.json
            </span>
          </div>

          {/* EDITING FORMS BLOCK */}
          {!contentPayload ? (
            <div className="flex-grow flex flex-col justify-center items-center py-20 text-slate-500 text-xs">
              <div className="w-8 h-8 rounded-full border-2 border-slate-700 border-t-amber-500 animate-spin mb-3" />
              Loading schemas payload metadata...
            </div>
          ) : (
            <div className="flex-grow">
              {activeTab === "visual" ? (
                <div className="space-y-8 bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl">
                  {/* Group fields by section name */}
                  {Array.from(new Set(selectedSchema.fields.map((f) => f.section))).map((sectionName) => (
                    <div key={sectionName} className="space-y-4 border-b border-slate-800/50 pb-6 last:border-0 last:pb-0">
                      <h3 className="text-xs font-bold text-amber-500 uppercase tracking-wider font-mono">
                        {sectionName}
                      </h3>
                      <div className="grid grid-cols-1 gap-5">
                        {selectedSchema.fields
                          .filter((f) => f.section === sectionName)
                          .map((field) => {
                            const value = getNestedValue(contentPayload, field.key);

                            return (
                              <div key={field.key} className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <label className="text-xs font-semibold text-slate-300">
                                    {field.label}
                                  </label>
                                  <span className="text-[9px] font-mono text-slate-500">
                                    {field.key}
                                  </span>
                                </div>

                                {field.type === "text" && (
                                  <input
                                    type="text"
                                    value={value}
                                    onChange={(e) => handleFieldChange(field.key, e.target.value)}
                                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-amber-500 focus:outline-none text-slate-200 rounded-lg text-xs"
                                  />
                                )}

                                {field.type === "textarea" && (
                                  <textarea
                                    value={value}
                                    onChange={(e) => handleFieldChange(field.key, e.target.value)}
                                    rows={3}
                                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-amber-500 focus:outline-none text-slate-200 rounded-lg text-xs font-sans leading-relaxed"
                                  />
                                )}

                                {field.type === "array-text" && (
                                  <div className="space-y-2">
                                    {(value || []).map((p: string, idx: number) => (
                                      <div key={idx} className="flex gap-2 items-start">
                                        <textarea
                                          value={p}
                                          onChange={(e) => {
                                            const arrCopy = [...value];
                                            arrCopy[idx] = e.target.value;
                                            handleFieldChange(field.key, arrCopy);
                                          }}
                                          rows={2}
                                          className="flex-grow px-4 py-2 bg-slate-950 border border-slate-800 focus:border-amber-500 focus:outline-none text-slate-200 rounded-lg text-xs"
                                        />
                                        <button
                                          onClick={() => {
                                            const arrCopy = value.filter((_: any, i: number) => i !== idx);
                                            handleFieldChange(field.key, arrCopy);
                                          }}
                                          className="p-2 bg-red-950/20 text-red-400 hover:text-red-300 hover:bg-red-950/50 rounded-lg border border-red-900/30 transition-colors mt-1"
                                        >
                                          <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                      </div>
                                    ))}
                                    <button
                                      onClick={() => {
                                        const arrCopy = [...(value || []), ""];
                                        handleFieldChange(field.key, arrCopy);
                                      }}
                                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700/80 text-slate-300 rounded-lg text-[10px] font-semibold transition-colors mt-2"
                                    >
                                      <Plus className="w-3.5 h-3.5" /> Add Paragraph Block
                                    </button>
                                  </div>
                                )}

                                {field.type === "metrics" && (
                                  <div className="space-y-4">
                                    {(value || []).map((card: any, idx: number) => (
                                      <div key={idx} className="bg-slate-950 border border-slate-800/80 p-4 rounded-xl space-y-3 relative">
                                        <button
                                          onClick={() => {
                                            const arrCopy = value.filter((_: any, i: number) => i !== idx);
                                            handleFieldChange(field.key, arrCopy);
                                          }}
                                          className="absolute top-4 right-4 p-1.5 hover:bg-red-950/40 hover:text-red-400 text-slate-500 rounded-lg transition-colors border border-transparent hover:border-red-950/50"
                                        >
                                          <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider font-mono bg-indigo-505/20 px-2 py-0.5 rounded border border-indigo-500/30">
                                          Card #{idx + 1}
                                        </span>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                          <div>
                                            <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                                              Highlight Metric
                                            </label>
                                            <input
                                              type="text"
                                              value={card.value || ""}
                                              onChange={(e) => {
                                                const copy = [...value];
                                                copy[idx] = { ...copy[idx], value: e.target.value };
                                                handleFieldChange(field.key, copy);
                                              }}
                                              className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 focus:outline-none text-xs rounded text-slate-200"
                                            />
                                          </div>
                                          <div>
                                            <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                                              Context Category
                                            </label>
                                            <input
                                              type="text"
                                              value={card.category || ""}
                                              onChange={(e) => {
                                                const copy = [...value];
                                                copy[idx] = { ...copy[idx], category: e.target.value };
                                                handleFieldChange(field.key, copy);
                                              }}
                                              className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 focus:outline-none text-xs rounded text-slate-200"
                                            />
                                          </div>
                                          <div>
                                            <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                                              Human Label
                                            </label>
                                            <input
                                              type="text"
                                              value={card.label || ""}
                                              onChange={(e) => {
                                                const copy = [...value];
                                                copy[idx] = { ...copy[idx], label: e.target.value };
                                                handleFieldChange(field.key, copy);
                                              }}
                                              className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 focus:outline-none text-xs rounded text-slate-200"
                                            />
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                                            Explanatory Details
                                          </label>
                                          <textarea
                                            value={card.description || ""}
                                            onChange={(e) => {
                                              const copy = [...value];
                                              copy[idx] = { ...copy[idx], description: e.target.value };
                                              handleFieldChange(field.key, copy);
                                            }}
                                            rows={2}
                                            className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 focus:outline-none text-xs rounded text-slate-200"
                                          />
                                        </div>
                                      </div>
                                    ))}
                                    <button
                                      onClick={() => {
                                        const newItem = { category: "Impact Topic", value: "0+", label: "New Metric", description: "Default details" };
                                        const arrCopy = [...(value || []), newItem];
                                        handleFieldChange(field.key, arrCopy);
                                      }}
                                      className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-950/30 hover:bg-indigo-950/50 text-indigo-400 rounded-lg text-[10px] font-semibold border border-indigo-900/40 transition-colors mt-2"
                                    >
                                      <Plus className="w-3.5 h-3.5" /> Append Metric Card
                                    </button>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      Direct JSON Text Editing Console
                    </span>
                    {jsonError ? (
                      <span className="text-xs text-red-400 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" /> {jsonError}
                      </span>
                    ) : (
                      <span className="text-xs text-emerald-400 flex items-center gap-1 font-semibold font-mono">
                        <CheckCircle className="w-3.5 h-3.5" /> Valid Syntax JSON Formatted
                      </span>
                    )}
                  </div>

                  <textarea
                    value={jsonText}
                    onChange={handleRawJsonChange}
                    rows={25}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-amber-500 focus:outline-none text-slate-200 rounded-xl text-xs font-mono leading-relaxed"
                    spellCheck={false}
                  />

                  <div className="text-slate-500 text-[11px] leading-relaxed">
                    Editing the raw JSON allows updating list values, fields, headings, maps, video embedding attributes and array elements that have nested configurations in the blueprint. Any typos or syntax omissions will be checked automatically.
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
