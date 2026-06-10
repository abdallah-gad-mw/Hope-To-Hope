import { defineConfig } from "tinacms";

// Use local branch fallback
const branch = process.env.VITE_TINA_BRANCH || process.env.TINA_BRANCH || "main";

export default defineConfig({
  branch,
  clientId: process.env.VITE_TINA_CLIENT_ID || "sandbox",
  token: process.env.TINA_TOKEN || "sandbox",

  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Page: Home",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "home",
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: { component: "textarea" },
              },
              { type: "string", name: "primaryBtn", label: "Primary Button Text" },
              { type: "string", name: "secondaryBtn", label: "Secondary Button Text" },
              { type: "image", name: "image", label: "Hero Image" },
            ],
          },
          {
            type: "object",
            name: "purpose",
            label: "Purpose Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true },
              { type: "string", name: "linkText", label: "Link Text" },
              { type: "image", name: "image", label: "Image" },
            ],
          },
          {
            type: "object",
            name: "metrics",
            label: "Metrics Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              {
                type: "object",
                name: "cards",
                label: "Metric Cards",
                list: true,
                fields: [
                  { type: "string", name: "category", label: "Category" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "pillars",
            label: "Our Pillars",
            fields: [
              {
                type: "object",
                name: "school",
                label: "Education Pillar",
                fields: [
                  { type: "string", name: "badge", label: "Badge" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "paragraphs", label: "Paragraphs", list: true },
                  { type: "string", name: "btnText", label: "Button Text" },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "rankBadgeTitle", label: "Rank Badge Title" },
                  { type: "string", name: "rankBadgeValue", label: "Rank Badge Value" },
                ],
              },
              {
                type: "object",
                name: "medical",
                label: "Medical Pillar",
                fields: [
                  { type: "string", name: "badge", label: "Badge" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "paragraphs", label: "Paragraphs", list: true },
                  { type: "string", name: "btnText", label: "Button Text" },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "badgeTitle", label: "Badge Title" },
                  { type: "string", name: "badgeValue", label: "Badge Value" },
                ],
              },
              {
                type: "object",
                name: "orphanage",
                label: "Orphanage Pillar",
                fields: [
                  { type: "string", name: "badge", label: "Badge" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "paragraphs", label: "Paragraphs", list: true },
                  { type: "string", name: "btnText", label: "Button Text" },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "badgeTitle", label: "Badge Title" },
                  { type: "string", name: "badgeValue", label: "Badge Value" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "sustainability",
            label: "Sustainability Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "projects",
                label: "Sustainability Projects",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                  },
                ],
              },
              { type: "string", name: "btnText", label: "Button Text" },
            ],
          },
          {
            type: "object",
            name: "founder",
            label: "Founder Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "role", label: "Role" },
              { type: "string", name: "organization", label: "Organization" },
              { type: "string", name: "youtubeUrl", label: "YouTube Embed URL" },
            ],
          },
          {
            type: "object",
            name: "actionBanner",
            label: "Action Banner Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
              { type: "string", name: "btnText", label: "Button Text" },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
              { type: "string", name: "emailLabel", label: "Email Label" },
              { type: "string", name: "emailValue", label: "Email Value" },
              { type: "string", name: "phoneLabel", label: "Phone Label" },
              { type: "string", name: "phoneValue", label: "Phone Value" },
              {
                type: "object",
                name: "form",
                label: "Form Settings",
                fields: [
                  { type: "string", name: "nameLabel", label: "Name Input Label" },
                  { type: "string", name: "namePlaceholder", label: "Name Input Placeholder" },
                  { type: "string", name: "emailLabel", label: "Email Input Label" },
                  { type: "string", name: "emailPlaceholder", label: "Email Input Placeholder" },
                  { type: "string", name: "subjectLabel", label: "Subject Input Label" },
                  {
                    type: "string",
                    name: "subjectPlaceholder",
                    label: "Subject Input Placeholder",
                  },
                  { type: "string", name: "messageLabel", label: "Message Input Label" },
                  {
                    type: "string",
                    name: "messagePlaceholder",
                    label: "Message Input Placeholder",
                  },
                  { type: "string", name: "submitBtn", label: "Submit Button Text" },
                  { type: "string", name: "successTitle", label: "Success Dialog Title" },
                  {
                    type: "string",
                    name: "successText",
                    label: "Success Dialog Text",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "about_kyaka",
        label: "Page: About Kyaka II",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about_kyaka",
        },
        fields: [
          { type: "string", name: "metaTitle", label: "Meta Title" },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description",
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: { component: "textarea" },
              },
              { type: "string", name: "primaryBtn", label: "Primary Button Text" },
              { type: "string", name: "secondaryBtn", label: "Secondary Button Text" },
              { type: "image", name: "imageUrl", label: "Image" },
            ],
          },
          {
            type: "object",
            name: "refugeeStats",
            label: "Refugee Statistics Section",
            fields: [
              { type: "string", name: "sectionBadge", label: "Section Badge" },
              { type: "string", name: "sectionTitle", label: "Section Title" },
              {
                type: "object",
                name: "cardPrimary",
                label: "Primary Metric Card",
                fields: [
                  { type: "string", name: "badge", label: "Badge" },
                  { type: "string", name: "value", label: "Value" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "object",
                name: "cardSecondary",
                label: "Secondary Metric Card",
                fields: [
                  { type: "string", name: "badge", label: "Badge" },
                  { type: "string", name: "value", label: "Value" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "history",
            label: "History Section",
            fields: [
              { type: "string", name: "sectionTitle", label: "Section Title" },
              {
                type: "string",
                name: "sectionSubtitle",
                label: "Section Subtitle",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "originCard",
                label: "Origin Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "string",
                    name: "p1",
                    label: "Paragraph 1",
                    ui: { component: "textarea" },
                  },
                  {
                    type: "string",
                    name: "p2",
                    label: "Paragraph 2",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "object",
                name: "congoCard",
                label: "Congo Card",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "string",
                    name: "p1",
                    label: "Paragraph 1",
                    ui: { component: "textarea" },
                  },
                  {
                    type: "string",
                    name: "p2",
                    label: "Paragraph 2",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "object",
                name: "unhcrCard",
                label: "UNHCR Card",
                fields: [
                  { type: "string", name: "tag", label: "Tag" },
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                  },
                  { type: "image", name: "mapImageUrl", label: "Map Image" },
                  { type: "string", name: "lightboxBadge", label: "Lightbox Badge" },
                  { type: "string", name: "lightboxCredit", label: "Lightbox Credit" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "demographics",
            label: "Demographics Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "ratioBadge", label: "Ratio Badge" },
              { type: "string", name: "ratioTitle", label: "Ratio Title" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "response",
            label: "Response Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "missionQuote",
                label: "Mission Quote",
                ui: { component: "textarea" },
              },
              { type: "image", name: "imageUrlPrimary", label: "Primary Image URL" },
              { type: "image", name: "imageUrlSecondary", label: "Secondary Image URL" },
            ],
          },
        ],
      },
      {
        name: "about_team",
        label: "Page: About Team",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about_team",
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true },
              { type: "string", name: "primaryBtn", label: "Primary Button" },
              { type: "string", name: "secondaryBtn", label: "Secondary Button" },
            ],
          },
          {
            type: "object",
            name: "leadership",
            label: "Leadership Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "founder",
                label: "Founder Profile",
                fields: [
                  { type: "string", name: "id", label: "ID ID" },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "role", label: "Role" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                  },
                  { type: "string", name: "status", label: "Status Badge" },
                  { type: "string", name: "linkText", label: "Link Text" },
                  { type: "string", name: "linkUrl", label: "Link URL" },
                ],
              },
              {
                type: "object",
                name: "leaders",
                label: "Staff Directory",
                list: true,
                fields: [
                  { type: "string", name: "id", label: "ID ID" },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "role", label: "Role" },
                  {
                    type: "string",
                    name: "description",
                    label: "Bio / Description",
                    ui: { component: "textarea" },
                  },
                  { type: "string", name: "category", label: "Category" },
                  { type: "string", name: "subrole", label: "Sub-Role" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "actionBanner",
            label: "Action Banner Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
              { type: "string", name: "btnText", label: "Button Text" },
            ],
          },
          {
            type: "object",
            name: "directory",
            label: "Directory & Full Staff Section",
            fields: [
              { type: "string", name: "badge", label: "Section Badge" },
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
              { type: "string", name: "searchPlaceholder", label: "Search Placeholder" },
              {
                type: "object",
                name: "emptyState",
                label: "Empty Search State Settings",
                fields: [
                  { type: "string", name: "title", label: "Empty Title" },
                  { type: "string", name: "subtext", label: "Empty Subtext" },
                  { type: "string", name: "btnText", label: "Button Text" },
                ],
              },
              {
                type: "object",
                name: "staffList",
                label: "Complete Staff List",
                list: true,
                fields: [
                  { type: "string", name: "id", label: "ID ID" },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "role", label: "Role" },
                  {
                    type: "string",
                    name: "category",
                    label: "Category (teaching / support / liaison)",
                  },
                  { type: "string", name: "initials", label: "Avatar Initials" },
                  { type: "string", name: "grad", label: "Qualification / Class" },
                  { type: "string", name: "avatarBg", label: "Avatar Background Style" },
                  {
                    type: "string",
                    name: "bio",
                    label: "Short Bio (Optional)",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "liaison",
            label: "Canadian Liaison Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "subtext",
                label: "Detailed Context",
                ui: { component: "textarea" },
              },
              { type: "string", name: "points", label: "Bullet Points", list: true },
              { type: "string", name: "btnText", label: "Action Button Text" },
              {
                type: "object",
                name: "dialog",
                label: "Liaison Contact Dialog Form Settings",
                fields: [
                  { type: "string", name: "successTitle", label: "Success Title" },
                  {
                    type: "string",
                    name: "successText",
                    label: "Success Text",
                    ui: { component: "textarea" },
                  },
                  { type: "string", name: "title", label: "Dialog Header Title" },
                  { type: "string", name: "nameLabel", label: "Name Field Label" },
                  { type: "string", name: "emailLabel", label: "Email Field Label" },
                  { type: "string", name: "subjectLabel", label: "Subject Field Label" },
                  { type: "string", name: "messageLabel", label: "Message Field Label" },
                  { type: "string", name: "submitBtn", label: "Submit Button Label" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "about_vision",
        label: "Page: Vision & Mission",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about_vision",
        },
        fields: [
          { type: "string", name: "metaTitle", label: "Meta Title" },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description",
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "founderMsg",
            label: "Founder's Message",
            fields: [
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "author", label: "Author" },
              { type: "string", name: "role", label: "Author Subtitle/Role" },
            ],
          },
          {
            type: "object",
            name: "journey",
            label: "Our Journey / Who We Are",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true },
              { type: "image", name: "imageUrlPrimary", label: "Primary Image URL" },
              { type: "image", name: "imageUrlSecondary", label: "Secondary Image URL" },
            ],
          },
          {
            type: "object",
            name: "metrics",
            label: "Metrics & Demographic Cards",
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "string",
                name: "subtitle",
                label: "Section Subtitle",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "educationCard",
                label: "Education Card Info",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                  },
                  { type: "string", name: "labelPrimary", label: "Primary Label Segment" },
                  { type: "string", name: "labelSecondary", label: "Secondary Label Segment" },
                  { type: "number", name: "ratioPrimary", label: "Primary Ratio Percentage" },
                  { type: "number", name: "ratioSecondary", label: "Secondary Ratio Percentage" },
                  { type: "string", name: "footerLabel", label: "Footer Context String" },
                ],
              },
              {
                type: "object",
                name: "orphansCard",
                label: "Orphans Card Info",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                  },
                  { type: "string", name: "listHeader", label: "List Header" },
                  {
                    type: "object",
                    name: "items",
                    label: "List Items",
                    list: true,
                    fields: [{ type: "string", name: "label", label: "Label" }],
                  },
                ],
              },
              {
                type: "object",
                name: "vocationalCard",
                label: "Vocational & Self-reliance Card Info",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "partners",
            label: "Global Partners List",
            list: true,
            fields: [
              { type: "string", name: "abbrev", label: "Initials / Abbrev" },
              { type: "string", name: "pills", label: "Tags / Pills", list: true },
              { type: "string", name: "title", label: "Partner Name" },
              {
                type: "string",
                name: "desc",
                label: "Description Context",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "canadaSpotlight",
            label: "Canada Partner Spotlight",
            fields: [
              { type: "string", name: "header", label: "Header Heading" },
              {
                type: "string",
                name: "quoteParagraph1",
                label: "Highlight Quote",
                ui: { component: "textarea" },
              },
              { type: "string", name: "author", label: "Author Name" },
              { type: "string", name: "authorSubtitle", label: "Author Subtitle" },
            ],
          },
        ],
      },
      {
        name: "hope_family",
        label: "Page: Hope Family monthly Program",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "hope_family",
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: { component: "textarea" },
              },
              { type: "string", name: "btnText", label: "Button Label" },
            ],
          },
          {
            type: "object",
            name: "accordion",
            label: "Accordion Info Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              {
                type: "object",
                name: "items",
                label: "Accordion Item List",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "string",
                    name: "content",
                    label: "Description Content",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "benefits",
            label: "Benefits Section",
            fields: [
              { type: "string", name: "title", label: "Header Title" },
              {
                type: "object",
                name: "cards",
                label: "Highlight Cards",
                list: true,
                fields: [
                  { type: "string", name: "tag", label: "Pill/Tag" },
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "string",
                    name: "description",
                    label: "Context Description",
                    ui: { component: "textarea" },
                  },
                ],
              },
              { type: "string", name: "btnText", label: "Button text" },
            ],
          },
          {
            type: "object",
            name: "donation",
            label: "Join Program/Checkout Block",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "description",
                label: "Context Description",
                ui: { component: "textarea" },
              },
              { type: "string", name: "infoText", label: "Detailed info text" },
              {
                type: "string",
                name: "quote",
                label: "Highlight Quote",
                ui: { component: "textarea" },
              },
              { type: "string", name: "quoteAuthor", label: "Quote Author Attribution" },
              {
                type: "object",
                name: "widget",
                label: "DonorBox Widget Link settings",
                fields: [
                  { type: "string", name: "url", label: "Donorbox URL" },
                  { type: "string", name: "title", label: "Widget iframe title" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "projects_school",
        label: "Project: School",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "projects_school",
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subheading", label: "Subheading" },
              {
                type: "string",
                name: "intro",
                label: "Introduction Description",
                ui: { component: "textarea" },
              },
              { type: "string", name: "primaryBtn", label: "Primary Button Text" },
            ],
          },
          {
            type: "object",
            name: "metrics",
            label: "Performance Metrics Highlight",
            fields: [
              {
                type: "object",
                name: "students",
                label: "Students Metric Block",
                fields: [
                  { type: "string", name: "value", label: "Metric Value (e.g., 1,000+)" },
                  { type: "string", name: "label", label: "Metric Label" },
                  {
                    type: "string",
                    name: "detail",
                    label: "Detail context text",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "object",
                name: "ratio",
                label: "Class Ratio Metric Block",
                fields: [
                  { type: "string", name: "value", label: "Metric Value" },
                  { type: "string", name: "label", label: "Metric Label" },
                  {
                    type: "string",
                    name: "detail",
                    label: "Detail context text",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "object",
                name: "rank",
                label: "Performance Rank Metric Block",
                fields: [
                  { type: "string", name: "value", label: "Metric Value" },
                  { type: "string", name: "label", label: "Metric Label" },
                  {
                    type: "string",
                    name: "detail",
                    label: "Detail context text",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "subjects",
            label: "Curriculum Subjects",
            list: true,
            fields: [
              { type: "string", name: "id", label: "ID ID" },
              { type: "string", name: "name", label: "Subject Title" },
            ],
          },
          {
            type: "object",
            name: "needs",
            label: "Operational Demands & Needs List",
            fields: [
              { type: "string", name: "badge", label: "Pill Badge" },
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "string",
                name: "description",
                label: "Context Description",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "items",
                label: "Target Needs Cards",
                list: true,
                fields: [
                  { type: "string", name: "id", label: "ID ID" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "cost", label: "Target Cost Estimator" },
                  {
                    type: "string",
                    name: "description",
                    label: "Short description",
                    ui: { component: "textarea" },
                  },
                  { type: "string", name: "pills", label: "Information Pills/Tags", list: true },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "curriculum",
            label: "Curriculum Standard Detail",
            fields: [
              { type: "string", name: "badge", label: "Badge Badge" },
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "string",
                name: "description",
                label: "Main Description",
                ui: { component: "textarea" },
              },
              { type: "string", name: "list", label: "Curriculum list bullets", list: true },
            ],
          },
          {
            type: "object",
            name: "advocacy",
            label: "Absenteeism & Advocacy Block",
            fields: [
              { type: "string", name: "badge", label: "Pilled Badge" },
              { type: "string", name: "title", label: "Header Title" },
              {
                type: "string",
                name: "description",
                label: "Main Text context",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "quote",
                label: "Highlight Message quote",
                ui: { component: "textarea" },
              },
              { type: "string", name: "primaryBtn", label: "Donation Primary Button" },
              { type: "string", name: "secondaryBtn", label: "Donation Secondary Button" },
            ],
          },
        ],
      },
      {
        name: "projects_medical",
        label: "Project: Medical Centre",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "projects_medical",
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Settings",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "intro",
                label: "Introduction Text",
                ui: { component: "textarea" },
              },
              { type: "string", name: "clinicMotto", label: "Clinic Motto/Subtitle" },
              { type: "string", name: "btnText", label: "Action button text" },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Critical Stats Highlights",
            fields: [
              {
                type: "object",
                name: "card1",
                label: "Stat Card One Settings",
                fields: [
                  { type: "string", name: "badge", label: "Badge" },
                  { type: "string", name: "title", label: "Number value" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description context",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "object",
                name: "card2",
                label: "Stat Card Two Settings",
                fields: [
                  { type: "string", name: "badge", label: "Badge" },
                  { type: "string", name: "title", label: "Number value" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description context",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "object",
                name: "card3",
                label: "Stat Card Three Settings",
                fields: [
                  { type: "string", name: "badge", label: "Badge" },
                  { type: "string", name: "title", label: "Number value" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description context",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "services",
            label: "Services Grid",
            fields: [
              { type: "string", name: "badge", label: "Pill badge" },
              { type: "string", name: "title", label: "Title Heading" },
              { type: "string", name: "description", label: "Introductory Description" },
              {
                type: "object",
                name: "items",
                label: "Core Subs Services List",
                list: true,
                fields: [
                  { type: "string", name: "name", label: "Service name title" },
                  {
                    type: "string",
                    name: "description",
                    label: "Brief capability description",
                    ui: { component: "textarea" },
                  },
                  { type: "string", name: "pills", label: "Category markers/Pills", list: true },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "history",
            label: "History & Background Context",
            fields: [
              { type: "string", name: "badge", label: "Story Badge" },
              { type: "string", name: "title", label: "Section Title Header" },
              {
                type: "string",
                name: "p1",
                label: "Context paragraphs 1",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "p2",
                label: "Context paragraphs 2",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "quote",
                label: "Founder/Clinician statement Quote",
                ui: { component: "textarea" },
              },
              { type: "string", name: "quoteAuthor", label: "Author quote attribution" },
              { type: "image", name: "imageUrl", label: "Background/Vitals Image" },
            ],
          },
          {
            type: "object",
            name: "needs",
            label: "Clinic Demands & Funding Essentials",
            fields: [
              { type: "string", name: "badge", label: "Demands Badge" },
              { type: "string", name: "title", label: "Title Heading" },
              {
                type: "string",
                name: "description",
                label: "Information description text",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "items",
                label: "Items Demanded Inventory list",
                list: true,
                fields: [
                  { type: "string", name: "id", label: "ID ID" },
                  { type: "string", name: "title", label: "Name Title" },
                  { type: "string", name: "cost", label: "Procurement / Sponsorship Cost" },
                  {
                    type: "string",
                    name: "description",
                    label: "Detailed support description",
                    ui: { component: "textarea" },
                  },
                  { type: "string", name: "pills", label: "Status pills tags", list: true },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "projects_orphanage",
        label: "Project: Orphanage",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "projects_orphanage",
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Details settings",
            fields: [
              { type: "string", name: "badge", label: "Hero Badge" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "intro",
                label: "Introduction descriptive text",
                ui: { component: "textarea" },
              },
              { type: "string", name: "btnText", label: "Action trigger button text" },
            ],
          },
          {
            type: "object",
            name: "metrics",
            label: "Orphan Shelter stats metrics info",
            fields: [
              {
                type: "object",
                name: "sponsored",
                label: "Fully Enlisted Scholars Metric info",
                fields: [
                  { type: "string", name: "value", label: "Value String" },
                  { type: "string", name: "label", label: "Label tag" },
                  {
                    type: "string",
                    name: "detail",
                    label: "Subtext details",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "object",
                name: "household",
                label: "Household Living Metric info",
                fields: [
                  { type: "string", name: "value", label: "Value String" },
                  { type: "string", name: "label", label: "Label tag" },
                  {
                    type: "string",
                    name: "detail",
                    label: "Subtext details",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "object",
                name: "foster",
                label: "Foster Placement Metric info",
                fields: [
                  { type: "string", name: "value", label: "Value String" },
                  { type: "string", name: "label", label: "Label tag" },
                  {
                    type: "string",
                    name: "detail",
                    label: "Subtext details",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "model",
            label: "Living Model structure description",
            fields: [
              { type: "string", name: "badge", label: "Structural Badge" },
              { type: "string", name: "title", label: "Heading Title" },
              {
                type: "string",
                name: "description",
                label: "Model operational description overview",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "blocks",
                label: "Contrast Blocks settings",
                list: true,
                fields: [
                  { type: "string", name: "badge", label: "Card header" },
                  { type: "string", name: "title", label: "Card Subheading" },
                  {
                    type: "string",
                    name: "description",
                    label: "Card main structural description",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "care",
            label: "Comprehensive Care List Details",
            fields: [
              { type: "string", name: "badge", label: "Safety Badge" },
              { type: "string", name: "title", label: "Operational safety list header Title" },
              { type: "string", name: "description", label: "Intro text context" },
              { type: "string", name: "imageUrl", label: "Hero context illustration image URL" },
              {
                type: "object",
                name: "items",
                label: "Services mapped lists items",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title title" },
                  {
                    type: "string",
                    name: "description",
                    label: "Capability detailed string",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "needs",
            label: "Special needs & campaign demands",
            fields: [
              { type: "string", name: "badge", label: "Needs Pill badge" },
              { type: "string", name: "title", label: "Demands header title" },
              {
                type: "string",
                name: "description",
                label: "Detailed intro description",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "items",
                label: "Support Targets lists items",
                list: true,
                fields: [
                  { type: "string", name: "id", label: "ID ID" },
                  { type: "string", name: "title", label: "Campaign Item Name" },
                  { type: "string", name: "cost", label: "Sponsorship Threshold Cost" },
                  {
                    type: "string",
                    name: "description",
                    label: "Brief item detailed text",
                    ui: { component: "textarea" },
                  },
                  { type: "string", name: "pills", label: "Importance badges list", list: true },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "projects_hope",
        label: "Project: Hope Projects (Sustainability)",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "projects_hope",
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Settings",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "description",
                label: "Description context",
                ui: { component: "textarea" },
              },
              { type: "string", name: "btnText", label: "Action Button Text" },
            ],
          },
          {
            type: "object",
            name: "girlsEducation",
            label: "Girls' Education Initiative Details Settings",
            fields: [
              { type: "string", name: "badge", label: "Initiative Badge" },
              { type: "string", name: "title", label: "Heading Title" },
              {
                type: "string",
                name: "description",
                label: "Summary info context",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "quote",
                label: "Field Worker statement quote",
                ui: { component: "textarea" },
              },
              { type: "string", name: "quoteAuthor", label: "Message Author Name attribution" },
              { type: "image", name: "imageUrl", label: "Illustration image URL" },
            ],
          },
          {
            type: "object",
            name: "briquette",
            label: "Briquette Fuel Sustainability Details Settings",
            fields: [
              { type: "string", name: "badge", label: "Project Bio-Fuel Badge" },
              { type: "string", name: "title", label: "Heading Title" },
              {
                type: "string",
                name: "description",
                label: "Deforestation fuel ecological summary",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "quote",
                label: "Coordinator statement quote",
                ui: { component: "textarea" },
              },
              { type: "string", name: "quoteAuthor", label: "Attributed coordinator name" },
              { type: "image", name: "imageUrl", label: "Product and community image URL" },
            ],
          },
          {
            type: "object",
            name: "milling",
            label: "Maize Milling Machine Fundraising Details Settings",
            fields: [
              { type: "string", name: "badge", label: "Self-reliance target campaign badge" },
              { type: "string", name: "title", label: "Mill Program Title" },
              {
                type: "string",
                name: "description",
                label: "Grinding machine campaign context",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "quote",
                label: "Campaign quote text highlight",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "quoteAuthor",
                label: "Campaign statement author attribution",
              },
              { type: "image", name: "imageUrl", label: "Demonstration / Blueprint image URL" },
            ],
          },
          {
            type: "object",
            name: "support",
            label: "Unified Campaign Action Call Box Setting",
            fields: [
              { type: "string", name: "badge", label: "Action Badge Badge" },
              { type: "string", name: "title", label: "Action Box Header Title" },
              {
                type: "string",
                name: "description",
                label: "Main Action description info",
                ui: { component: "textarea" },
              },
              { type: "string", name: "btnText", label: "Join Support Button Text" },
            ],
          },
        ],
      },
      {
        name: "legal",
        label: "Privacy & Legal Pages",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "legal",
        },
        fields: [
          {
            type: "object",
            name: "privacyPolicy",
            label: "Privacy Policy Settings",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "metaTitle", label: "Meta Title" },
              { type: "string", name: "metaDesc", label: "Meta Description" },
              { type: "string", name: "subtitle", label: "Subtitle Attribution" },
              { type: "string", name: "paragraphs", label: "Policy Paragraphs", list: true },
              { type: "string", name: "lastUpdated", label: "Last Updated string" },
            ],
          },
          {
            type: "object",
            name: "termsOfService",
            label: "Terms of Service Settings",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "metaTitle", label: "Meta Title" },
              { type: "string", name: "metaDesc", label: "Meta Description" },
              { type: "string", name: "subtitle", label: "Subtitle Attribution" },
              { type: "string", name: "paragraphs", label: "Terms Paragraphs", list: true },
              { type: "string", name: "lastUpdated", label: "Last Updated string" },
            ],
          },
        ],
      },
      {
        name: "hope_stories",
        label: "Blog: Hope Stories Metadata List",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "hope_stories",
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero section heading",
            fields: [
              { type: "string", name: "badge", label: "Campaign Badge" },
              { type: "string", name: "title", label: "Title Heading" },
              { type: "string", name: "subtitle", label: "Subtitle Details" },
            ],
          },
          {
            type: "object",
            name: "stories",
            label: "Stories Quick Links Index Table",
            list: true,
            fields: [
              { type: "string", name: "id", label: "Key Identifier / Slug" },
              { type: "string", name: "slug", label: "Slug url segment" },
              { type: "string", name: "title", label: "Story Title" },
              { type: "string", name: "category", label: "Section Category" },
              { type: "string", name: "date", label: "Posting Day" },
              { type: "string", name: "author", label: "Author String" },
              {
                type: "string",
                name: "excerpt",
                label: "Excerpt synopsis preview",
                ui: { component: "textarea" },
              },
              { type: "string", name: "readTime", label: "Read Duration string" },
              { type: "image", name: "image", label: "Story Featured Photo" },
              { type: "string", name: "to", label: "Target Route Link" },
            ],
          },
          {
            type: "object",
            name: "placeholders",
            label: "Placeholders Elements",
            fields: [
              {
                type: "object",
                name: "comingSoon",
                label: "Coming Soon Block Settings",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Context text description" },
                ],
              },
              {
                type: "object",
                name: "sponsor",
                label: "Sponsor Life Board Settings",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Context text description" },
                  { type: "string", name: "btnText", label: "Action CTA Button text" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "blog_posts",
        label: "Blog: Individual Hope Stories Documents",
        path: "src/content",
        format: "json",
        match: {
          include: "story_*",
        },
        fields: [
          {
            type: "object",
            name: "meta",
            label: "Meta SEO properties",
            fields: [
              { type: "string", name: "title", label: "SEO meta title" },
              {
                type: "string",
                name: "description",
                label: "SEO meta description",
                ui: { component: "textarea" },
              },
            ],
          },
          { type: "string", name: "backButtonText", label: "Back list Button label text" },
          {
            type: "object",
            name: "header",
            label: "Header Segment details",
            fields: [
              { type: "string", name: "date", label: "Story Published Date" },
              { type: "string", name: "author", label: "Story Author string" },
              { type: "string", name: "title", label: "Header Title text" },
              { type: "image", name: "image", label: "Header Illustration Main Photo Banner" },
            ],
          },
          {
            type: "object",
            name: "content",
            label: "Story Paragraph Content",
            fields: [
              {
                type: "string",
                name: "lead",
                label: "Subtext Lead synopsis string",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "paragraphs",
                label: "Body content Paragraph list",
                list: true,
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "video",
            label: "Illustration / YouTube Video settings",
            fields: [
              { type: "string", name: "title", label: "Video box subtitle" },
              { type: "string", name: "url", label: "Youtube raw embed Link URL" },
            ],
          },
          {
            type: "object",
            name: "advocacy",
            label: "Advocacy Action Block settings",
            fields: [
              {
                type: "string",
                name: "text",
                label: "Advocacy quote message",
                ui: { component: "textarea" },
              },
              { type: "string", name: "btnText", label: "CTA Action button label string" },
            ],
          },
          { type: "string", name: "tags", label: "Category keywords tagging tokens", list: true },
        ],
      },
      {
        name: "navigation",
        label: "Site Setting: Primary Navigation Menu",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "navigation",
        },
        fields: [
          { type: "string", name: "donateUrl", label: "Global Donate URL" },
          {
            type: "object",
            name: "navItems",
            label: "Main Navigation Items",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Display Label" },
              { type: "string", name: "to", label: "Redirect Route Link (to)" },
              {
                type: "object",
                name: "children",
                label: "Sub-items Dropdown list",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Sub-link Label" },
                  { type: "string", name: "to", label: "Redirect Route (to)" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "footer",
        label: "Site Setting: Footer Details",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "footer",
        },
        fields: [
          { type: "string", name: "newsletterTitle", label: "Newsletter Form Header Title" },
          {
            type: "string",
            name: "newsletterSubtext",
            label: "Newsletter Form Description Subtext",
          },
          { type: "string", name: "newsletterButtonText", label: "Newsletter Submit Button" },
          {
            type: "string",
            name: "aboutText",
            label: "About Brief contextual statement string",
            ui: { component: "textarea" },
          },
          { type: "string", name: "poweredByText", label: "Powered By attribution labels title" },
          { type: "string", name: "poweredByUrl", label: "Powered by attribution Click URL" },
          {
            type: "object",
            name: "socials",
            label: "Social Networks links",
            list: true,
            fields: [
              {
                type: "string",
                name: "type",
                label: "type (instagram / facebook / youtube / twitter)",
              },
              { type: "string", name: "url", label: "raw URL" },
            ],
          },
          {
            type: "object",
            name: "columns",
            label: "Footer Links columns layout list",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Column Section Header Title" },
              {
                type: "object",
                name: "links",
                label: "Links listing nodes",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Link display text" },
                  { type: "string", name: "to", label: "Redirect Route (to)" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
