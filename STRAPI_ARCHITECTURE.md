# Strapi v5 Content Architecture Design
## Angels Care Uganda — Content Management Blueprint

This document defines a production-ready **Strapi v5 Content Architecture** tailored for Angels Care Uganda's digital platform. It maps existing static files (under `src/content/*.json`) into a highly flexible, fully relational database structure. 

Instead of mimicking the flat structure of the static JSON arrays, this architecture uses **Strapi v5 features**—such as the native **Blocks Editor**, **Component Library**, **Media Relations**, and custom Single/Collection Types—to empower non-technical editors on the ground (like Pastor Godfrey and his administrative team) to safely edit, scale, and publish updates independently without risking visual regressions.

---

## 1. Core Architectural Goals & Strategy

1. **Client-Centric Content Management**: 
   * Protect non-technical admins from raw HTML/Markdown syntax by adopting Strapi v5's **Blocks Editor** for rich text fields (such as lists, quotes, and emphasis).
   * Restrict formatting choices to structured layouts to prevent breaking the platform's visual design.
2. **Media Library Integration**:
   * Migrate all local hard-coded asset routes (e.g., `/src/assets/images/...`) into Strapi's centralized **Media Library**.
   * Take advantage of Strapi's automated responsive image formats (large, medium, small, thumbnail) to optimize loading on rural/mobile connections inside settlements where bandwidth is crucial.
3. **Strict Structural Validation**:
   * Implement strict data validation types (such as `Email`, `UID` slug generators, and `Decimal` bounds) to prevent formatting errors.
4. **Localization and i18n Preparedness**:
   * Map all text nodes using Strapi's standard Multi-locale framework (`i18n`), accommodating future translations (English, French, Swahili, and Luganda).

---

## 2. Shared Component Library (Category: `shared`)

To maximize modularity, we abstract repeating visual structures into reusable Strapi Components. This allows editors to use identical building blocks across different pages.

### `shared.seo` (Search Engine Optimization)
*Handles metadata on a per-page level.*
* **`metaTitle`**: `String` (Required, length limit of 60 characters)
* **`metaDescription`**: `Text` (Required, length limit of 160 characters)
* **`metaImage`**: `Media` (Single image, restricted to JPG/PNG/WebP, for social previews)

### `shared.link` (Action Button/Hyperlink)
*A standardized schema for navigation links and call-to-action triggers.*
* **`label`**: `String` (Required, e.g. "Join the Hope Family", "Sponsor a Teacher")
* **`url`**: `String` (Required, e.g., `/about/kyaka-ii`, or external DonorBox link)
* **`style`**: `Enumeration` (Options: `Primary` [solid orange], `Secondary` [clear/sky blue], `Text-Only` [simple underline])

### `shared.hero` (Standard Hero Block)
*The default layout header found on almost every single view.*
* **`badge`**: `String` (Optional, e.g., "Established 2008")
* **`title`**: `String` (Required, prominent screen display text)
* **`subtitle`**: `Text` (Required, smaller clarifying text block)
* **`image`**: `Media` (Single image/video, required, high resolution)
* **`primaryAction`**: `Component` (`shared.link`, Required)
* **`secondaryAction`**: `Component` (`shared.link`, Optional)

### `shared.cta-banner` (Call to Action Ribbon)
*Standard panel encouraging donation, sponsorship, or engagement.*
* **`badge`**: `String` (Optional)
* **`title`**: `String` (Required)
* **`description`**: `Text` (Required)
* **`action`**: `Component` (`shared.link`, Required)

### `shared.metric-card` (Impact Statistics Tracker)
*Compact grid card showcasing measurable impact data.*
* **`category`**: `String` (Optional, grouping label, e.g. "Education Scale", "Demographics")
* **`value`**: `String` (Required, highlighted statistic, e.g. "1,000+", "80% / 20%", "Rank #1")
* **`label`**: `String` (Required, description key, e.g., "Active Students")
* **`description`**: `Text` (Required, detailed explanatory text)

### `shared.quote-block` (Message or Testimonial)
*Specifically engineered to highlight testimony blocks, founder messages, and letters.*
* **`quote`**: `Text` (Required, rich text format)
* **`author`**: `String` (Required, e.g., "Byaruhanga Godfrey")
* **`role`**: `String` (Optional, e.g., "Founder & Executive Director")
* **`organization`**: `String` (Optional, default: "Angels Care Uganda")
* **`mediaOverlay`**: `Media` (Optional, e.g., video placeholder or portrait image)
* **`videoUrl`**: `String` (Optional, e.g., YouTube embed link)

### `shared.accordion-item` (Collapsible Information Unit)
*For FAQ lists, policy disclosures, and multi-part content panels.*
* **`title`**: `String` (Required, e.g. "How do my monthly contributions reach the field?")
* **`content`**: `Rich Text (Blocks)` (Required, supports nested bullets and bold accents)

### `shared.campaign-milestone` (Fundraising Timeline Item)
*For mapping strategic campaign achievements (e.g., modernizing the Medical Clinic).*
* **`phaseTitle`**: `String` (Required, e.g., "Phase 1: Civil Foundation")
* **`allocatedFunds`**: `String` (Optional, e.g., "$5,000 USD")
* **`achievementTarget`**: `Text` (Required, outlining completion parameters)
* **`progressPercent`**: `Integer` (Range: `0-100`, default: `0`)
* **`isUnlocked`**: `Boolean` (Default: `false`, controls visual completeness states)
* **`editorialNotes`**: `Text` (Optional progress notes from Pastor Godfrey)

### `shared.partner-card` (Sponsorship/Sponsor Details)
*To represent international supporting organizations.*
* **`abbreviation`**: `String` (Required, e.g. "KTMS", "TFI")
* **`title`**: `String` (Required, full name)
* **`description`**: `Text` (Required)
* **`pillsLabels`**: `Custom fields` (Repeatable components or comma-separated strings for badges)

---

## 3. Collection Types (Dynamic Multi-Instance Content)

### `Hope Stories` (Collection Type: `api::hope-story.hope-story`)
Consolidates the overall blog metadata and full individual page assets under a unified content schema. Individual records represent unique story entities (such as "Angels Care Online Launch!").

* **Core Fields:**
  * **`title`**: `String` (Required, title of the update)
  * **`slug`**: `UID` (Required, target field: `title`. Defines unique browser URL structure)
  * **`category`**: `Enumeration` (Required. Active choices: `Community Update`, `Testimonial`, `Critical Relief`, `Campaign Success`)
  * **`date`**: `Date` (Required, localized date representation)
  * **`author`**: `String` (Required, e.g. "Written By Angels Care / NSCC")
  * **`readTime`**: `String` (Default estimation helper, e.g., "3 min read")
  * **`excerpt`**: `Text` (Required, text preview shown in catalog index listings)
  * **`coverImage`**: `Media` (Single image, required, optimized formats)
  * **`leadText`**: `Text` (Highlighted initial paragraph / introduction block)
  * **`content`**: `Rich Text (Blocks)` (Required, main narrative container. Strapi Blocks allows seamless embedding of sub-headings, structured quotes, and media slides directly inside the body)
  * **`videoEmbed`**: `String` (Optional, YouTube/Vimeo raw embed string for firsthand footage)
  * **`advocacyQuote`**: `Component` (`shared.quote-block`, Optional)
  * **`tags`**: `Text` (Comma-separated string or repeatable text list for metadata filtering)
  * **`seo`**: `Component` (`shared.seo`, Required)
* **Strapi Settings & Customizations:**
  * **Draft & Publish**: `Enabled`. Allows Pastor Godfrey to save initial field logs, compile reviews, and publish when verified.
  * **UID Slug Automation**: Automatic generation saves non-technical users from manual URL string typing error risks.

---

## 4. Single Types (Unique Static Page Data Structures)

Single Types represent unique views on the website. This prevents editors from messing up page structures while allowing them to safely update copy and images.

---

### A. Page: `Home` (Single Type: `api::home.home`)
*Defines content blocks on the landing page.*

* **`seo`**: `Component` (`shared.seo`, Required)
* **`hero`**: `Component` (`shared.hero`, Required)
* **`purpose`**: `Component` (Private model block representing organizational purpose):
  * **`badge`**: `String` (e.g. "Our Purpose")
  * **`title`**: `String`
  * **`paragraphs`**: `Rich Text (Blocks)` (Replacing flat JSON string arrays)
  * **`link`**: `Component` (`shared.link`)
  * **`image`**: `Media` (Single image, required)
* **`metrics`**: `Component` (`shared.metrics-section`, containing a repeatable list of `shared.metric-card`)
* **`pillars`**: `Component` (Group representing the three core service directions):
  * **`school`**: `Group` (Nursery and primary metadata):
    * **`badge`**: `String`
    * **`title`**: `String`
    * **`paragraphs`**: `Rich Text (Blocks)`
    * **`action`**: `Component` (`shared.link`)
    * **`image`**: `Media`
    * **`rankBadgeTitle`**: `String`
    * **`rankBadgeValue`**: `String`
  * **`medical`**: `Group` (ACMC Clinic metrics):
    * **`badge`**: `String`
    * **`title`**: `String`
    * **`paragraphs`**: `Rich Text (Blocks)`
    * **`action`**: `Component` (`shared.link`)
    * **`image`**: `Media`
    * **`badgeTitle`**: `String`
    * **`badgeValue`**: `String`
  * **`orphanage`**: `Group` (Family care context):
    * **`badge`**: `String`
    * **`title`**: `String`
    * **`paragraphs`**: `Rich Text (Blocks)`
    * **`action`**: `Component` (`shared.link`)
    * **`image`**: `Media`
    * **`badgeTitle`**: `String`
    * **`badgeValue`**: `String`
* **`sustainability`**: `Component`:
  * **`badge`**: `String`
  * **`title`**: `String`
  * **`subtitle`**: `Text`
  * **`projects`**: `Repeatable Component` (consisting of local `title`, `description`, `label` records representing active campaigns)
  * **`action`**: `Component` (`shared.link`)
* **`founder`**: `Component` (`shared.quote-block`, holding Pastor Godfrey’s mission quote and YouTube embed)
* **`actionBanner`**: `Component` (`shared.cta-banner`)
* **`contact`**: `Component` (Sub-model defining ground connection fields):
  * **`badge`**: `String`
  * **`title`**: `String`
  * **`description`**: `Text`
  * **`emailLabel`**: `String`
  * **`emailValue`**: `Email` (Enforces validation)
  * **`phoneLabel`**: `String`
  * **`phoneValue`**: `String`
  * **`formFields`**: `Group` (Standard structural localized labels for contact fields to facilitate effortless i18n support on form boundaries)

---

### B. Page: `About Kyaka` (Single Type: `api::about-kyaka.about-kyaka`)
*Contextualizes operational realities inside the Kyaka II Refugee Settlement.*

* **`seo`**: `Component` (`shared.seo`, Required)
* **`hero`**: `Component` (`shared.hero`, Required)
* **`refugeeStats`**: `Component`:
  * **`sectionBadge`**: `String`
  * **`sectionTitle`**: `String`
  * **`cardPrimary`**: `Component` (`shared.metric-card`, "Nationwide Influx")
  * **`cardSecondary`**: `Component` (`shared.metric-card`, "Local Density")
* **`history`**: `Component` (Mapping the geo-political origin profile):
  * **`sectionTitle`**: `String`
  * **`sectionSubtitle`**: `Text`
  * **`originCard`**: `Group` (`title`, `p1`, `p2` structured text block)
  * **`congoCard`**: `Group` (`title`, `p1`, `p2` structured text block)
  * **`unhcrMapCard`**: `Group` (Official demographic map overlays):
    * **`tag`**: `String`
    * **`title`**: `String`
    * **`description`**: `Text`
    * **`mapImage`**: `Media` (Single image, high resolution mapping file)
    * **`lightboxBadge`**: `String`
    * **`lightboxCredit`**: `Text`
* **`demographics`**: `Component`:
  * **`badge`**: `String`
  * **`ratioBadge`**: `String` (e.g. "77%")
  * **`ratioTitle`**: `String` 
  * **`description`**: `Text`
* **`response`**: `Component` (Direct clinical field deployment highlights):
  * **`badge`**: `String`
  * **`title`**: `String`
  * **`description`**: `Rich Text (Blocks)` (Allows custom inline lists/links)
  * **`missionQuote`**: `Component` (`shared.quote-block`)
  * **`images`**: `Media` (Multiple images array, representing kids & clinic infrastructure)

---

### C. Page: `About Team` (Single Type: `api::about-team.about-team`)
*Displays senior leadership, team structure, and international liaisons.*

* **`seo`**: `Component` (`shared.seo`, Required)
* **`hero`**: `Component` (`shared.hero`, Required)
* **`leadership`**: `Component` (Managing senior staff hierarchy safely):
  * **`badge`**: `String`
  * **`title`**: `String`
  * **`description`**: `Text`
  * **`founder`**: `Structure` (Godfrey’s profile card):
    * **`name`**: `String`
    * **`role`**: `String`
    * **`description`**: `Text`
    * **`status`**: `String`
    * **`externalLiaisonLink`**: `Component` (`shared.link`)
  * **`leaders`**: `Repeatable Component` (Academic/Admin heads list):
    * **`name`**: `String` (Required)
    * **`role`**: `String` (Required)
    * **`description`**: `Text`
    * **`category`**: `Enumeration` (Choices: `Teaching`, `Finance`, `Administration`)
    * **`subrole`**: `String`
* **`actionBanner`**: `Component` (`shared.cta-banner`)
* **`directory`**: `Component` (Interactive listings of support staff):
  * **`badge`**: `String`
  * **`title`**: `String`
  * **`description`**: `Text`
  * **`searchPlaceholder`**: `String` (Localizable search string)
  * **`emptyState`**: `Group` (`title`, `subtext`, `btnText` labels for interactive state resets)
  * **`staffList`**: `Repeatable Component` (Defines team metadata cards to allow easy layout injection):
    * **`name`**: `String` (Required)
    * **`role`**: `String` (Required)
    * **`category`**: `Enumeration` (Required, values: `teaching`, `support`, `liaison`)
    * **`initials`**: `String` (Character placeholder badge, e.g. "NE")
    * **`qualification`**: `String` (e.g. "Bachelor of Education (MUK)", "Meal Prep Specialist")
    * **`bio`**: `Text` (Optional)
* **`liaisons`**: `Component` (Canadian support agency contacts):
  * **`badge`**: `String`
  * **`title`**: `String`
  * **`description`**: `Text`
  * **`subtext`**: `Text`
  * **`points`**: `Rich Text (Blocks)` (Bullet points lists details)
  * **`action`**: `Component` (`shared.link`)
  * **`inquiryDialog`**: `Group` (Standard form placeholders and visual success states customized for the contact flow)

---

### D. Page: `Vision & Mission` (Single Type: `api::about-vision.about-vision`)
*Defines core values, global partnerships, and historical growth paths.*

* **`seo`**: `Component` (`shared.seo`, Required)
* **`hero`**: `Component`:
  * **`badge`**: `String`
  * **`description`**: `Text`
* **`founderMsg`**: `Component` (`shared.quote-block`, Pastor Godfrey's educational thesis)
* **`journey`**: `Component` (Core historical review):
  * **`badge`**: `String`
  * **`paragraphs`**: `Rich Text (Blocks)` (Allows multi-paragraph narrative structure)
  * **`images`**: `Media` (Allows uploading multiple workspace records for sliders)
* **`metrics`**: `Component` (Active demographics dashboards):
  * **`title`**: `String`
  * **`subtitle`**: `Text`
  * **`educationCard`**: `Group`:
    * **`title`**: `String`
    * **`description`**: `Text`
    * **`labelPrimary`**: `String` (e.g., "80% Refugee Children")
    * **`ratioPrimary`**: `Integer` (`80`)
    * **`labelSecondary`**: `String` (e.g., "20% Ugandan Nationals")
    * **`ratioSecondary`**: `Integer` (`20`)
    * **`footerLabel`**: `String`
  * **`orphansCard`**: `Group`:
    * **`title`**: `String`
    * **`description`**: `Text`
    * **`listHeader`**: `String`
    * **`items`**: `Repeatable Component` (holding simple `label` entries like "Accommodations")
  * **`vocationalCard`**: `Group`:
    * **`title`**: `String`
    * **`description`**: `Text`
* **`partners`**: `Repeatable Component` (`shared.partner-card`, representing Solma (KTMS), TFI, and hopetohope.org)
* **`canadaSpotlight`**: `Component` (`shared.quote-block`, Note from Rob Tarnowski)

---

### E. Page: `Hope Family` (Single Type: `api::hope-family.hope-family`)
*Encourages recurring donation checkouts and monthly support loops.*

* **`seo`**: `Component` (`shared.seo`, Required)
* **`hero`**: `Component` (`shared.hero`, Required)
* **`accordionSection`**: `Component` (`shared.accordion-section`)
* **`benefits`**: `Component`:
  * **`title`**: `String`
  * **`cards`**: `Repeatable Component` (Core recurring arguments):
    * **`tag`**: `String`
    * **`title`**: `String`
    * **`description`**: `Text`
  * **`action`**: `Component` (`shared.link`)
* **`donation`**: `Component` (Secured checkout layouts integration):
  * **`badge`**: `String`
  * **`title`**: `String`
  * **`description`**: `Text`
  * **`infoText`**: `Text`
  * **`quote`**: `Component` (`shared.quote-block`)
  * **`donorBoxWidget`**: `Group` (Direct DonorBox checkout configuration mapping):
    * **`embedUrl`**: `String` (Required, Donorbox safe URL parameter)
    * **`title`**: `String`

---

### F. Page: `Projects School` (Single Type: `api::projects-school.projects-school`)
*Covers Angels Care Primary School requirements, academic courses, and teacher sponsorship.*

* **`seo`**: `Component` (`shared.seo`, Required)
* **`hero`**: `Component` (`shared.hero`, Required)
* **`metrics`**: `Component` (Direct school indicators):
  * **`studentsCard`**: `Component` (`shared.metric-card`, 1000+ Students)
  * **`classRatioCard`**: `Component` (`shared.metric-card`, 120:1 Ratio)
  * **`examRankCard`**: `Component` (`shared.metric-card`, Rank #1 Score)
* **`subjects`**: `Repeatable Component` (Core curriculums lists):
  * **`courseName`**: `String` (Required)
  * **`description`**: `Text` (Optional)
* **`needs`**: `Component` (Immediate operational support targets):
  * **`badge`**: `String`
  * **`title`**: `String`
  * **`description`**: `Text`
  * **`items`**: `Repeatable Component` (Fundraising items representing exact needs like Salaries, Porridge, or Uniforms):
    * **`title`**: `String` (Required, e.g. "Teacher Salary")
    * **`cost`**: `String` (Required, e.g. "$100 CAN / month")
    * **`description`**: `Text` (Required)
    * **`pillsBadges`**: `Text` (Comma-separated indicators, e.g. "15 Teachers Needed, Critical Action")
* **`curriculumDetails`**: `Component`:
  * **`badge`**: `String`
  * **`title`**: `String`
  * **`description`**: `Text`
  * **`bullets`**: `Rich Text (Blocks)` (Standards lists from Ministry)
* **`advocacy`**: `Component`:
  * **`badge`**: `String`
  * **`title`**: `String`
  * **`description`**: `Text`
  * **`quote`**: `Component` (`shared.quote-block`, Girls' hygiene perspective)
  * **`primaryAction`**: `Component` (`shared.link`)
  * **`secondaryAction`**: `Component` (`shared.link`)

---

### G. Page: `Projects Medical` (Single Type: `api::projects-medical.projects-medical`)
*Covers Angels Care Medical Centre (ACMC) operational infrastructure and clinical campaign.*

* **`seo`**: `Component` (`shared.seo`, Required)
* **`hero`**: `Component` (`shared.hero`, Required)
* **`crisisScope`**: `Component` (Context of extreme clinical shortages):
  * **`badge`**: `String`
  * **`title`**: `String`
  * **`subtitle`**: `Text`
  * **`metrics`**: `Repeatable Component` (`shared.metric-card`, packing population pack, main centre shortages, and active sick rate metrics)
* **`subsidizedSystem`**: `Component`:
  * **`badge`**: `String`
  * **`title`**: `String`
  * **`description`**: `Text`
  * **`cards`**: `Repeatable Component` (subsidized cost card, student pipelines, and community prevention benefits):
    * **`title`**: `String`
    * **`value`**: `String` (e.g. "40% Less Cost", "100% Free")
    * **`subtext`**: `Text`
* **`clinicalServices`**: `Component` (Medical domains directory):
  * **`badge`**: `String`
  * **`title`**: `String`
  * **`description`**: `Text`
  * **`categories`**: `Repeatable Component` (for tabs filters like Primary Care, Maternal)
  * **`cards`**: `Repeatable Component` (detailed clinical capabilities):
    * **`title`**: `String` (Required)
    * **`description`**: `Text` (Required)
    * **`category`**: `String` (Must link directly with defined fields metadata)
* **`infrastructureCampaign`**: `Component` (`shared.campaign-progress`, managing backup solar upgrades, ultrasounds, and transit ambulances progress tracker)

---

### H. Page: `Projects Orphanage` (Single Type: `api::projects-orphanage.projects-orphanage`)
*Handles children safeguarding configurations and foster home networks.*

* **`seo`**: `Component` (`shared.seo`, Required)
* **`hero`**: `Component` (`shared.hero`, Required)
* **`budgetBreakdown`**: `Component` (Financial transparency analysis):
  * **`badge`**: `String`
  * **`title`**: `String` (e.g. "Where Your $90 Monthly Sponsorship Goes")
  * **`description`**: `Text`
  * **`items`**: `Repeatable Component` (Detailed category divisions):
    * **`name`**: `String` (Required, e.g. "Safe Housing & Shelter")
    * **`allocatedAmount`**: `String` (e.g. "$22 CAN")
    * **`percentage`**: `Integer` (e.g., `24`)
    * **`description`**: `Text`
* **`dualCareModel`**: `Component` (Community-driven integration structures):
  * **`badge`**: `String`
  * **`title`**: `String`
  * **`description`**: `Text`
  * **`houseOfGodfrey`**: `Group` (15 kids co-residing in immediate sanctuary):
    * **`badge`**: `String`
    * **`title`**: `String`
    * **`subtitle`**: `String`
    * **`description`**: `Text`
    * **`footer`**: `String`
  * **`communityFoster`**: `Group` (115 children integrated safely):
    * **`badge`**: `String`
    * **`title`**: `String`
    * **`subtitle`**: `String`
    * **`description`**: `Text`
    * **`footer`**: `String`
* **`sponsorshipTiers`**: `Component` (Active conversion layers):
  * **`badge`**: `String`
  * **`title`**: `String`
  * **`description`**: `Text`
  * **`childTier`**: `Group` ($90 sponsorship):
    * **`title`**: `String`
    * **`cost`**: `String`
    * **`bullets`**: `Rich Text (Blocks)`
    * **`action`**: `Component` (`shared.button` / `shared.link`)
  * **`homeTier`**: `Group` ($150 facility operational grant):
    * **`title`**: `String`
    * **`cost`**: `String`
    * **`bullets`**: `Rich Text (Blocks)`
    * **`action`**: `Component` (`shared.button` / `shared.link`)
* **`faq`**: `Component` (`shared.accordion-section`, responding to recurring donor inquiries)

---

### I. Page: `Projects Hope` (Single Type: `api::projects-hope.projects-hope`)
*Tracks sustainability programs and the active Maize Milling target campaign.*

* **`seo`**: `Component` (`shared.seo`, Required)
* **`hero`**: `Component` (`shared.hero`, Required)
* **`sustainabilityPrograms`**: `Repeatable Component` (Bio-briquettes and Feminine Care items listings):
  * **`title`**: `String` (Required)
  * **`tag`**: `String` (Required, e.g. "Eco-Sustainability & Climate")
  * **`problem`**: `Text` (Required, defining local issues)
  * **`solution`**: `Rich Text (Blocks)` (Required, details of programmatic solution)
  * **`accentBadge`**: `String` (e.g., "Eco-Friendly Biomass Residues")
  * **`coverImage`**: `Media` (Single image, required)
* **`millingCampaign`**: `Component` (`shared.campaign-progress`, representing Maize Milling Campaign funding steps and 12 single widowed mother cooperative startup indicators)

---

### J. Layout: `Navigation` (Single Type: `api::navigation.navigation`)
*Defines root header structure mapping dynamically.*

* **`donateLink`**: `Component` (`shared.link`, Required)
* **`menuItems`**: `Repeatable Component` (Hierarchical configuration):
  * **`label`**: `String` (Required, e.g. "About")
  * **`to`**: `String` (Required path trigger)
  * **`nestedChildren`**: `Repeatable Component` (Sub-menu layouts):
    * **`label`**: `String`
    * **`to`**: `String`

---

### K. Layout: `Footer` (Single Type: `api::footer.footer`)
*Centralizes footer connections, social pages, and newsletter targets.*

* **`newsletterTitle`**: `String` (Required)
* **`newsletterSubtext`**: `Text` (Required)
* **`newsletterButtonText`**: `String` (Required, e.g. "Subscribe")
* **`aboutSummaryText`**: `Text` (Required, short pitch)
* **`poweredByText`**: `String` (e.g., "Morellis")
* **`poweredByUrl`**: `String` (E.g., web-link coordinates)
* **`socials`**: `Repeatable Component` (Coordinates active links):
  * **`platform`**: `Enumeration` (Choices: `instagram`, `facebook`, `youtube`, `twitter`)
  * **`profileUrl`**: `String`
* **`columns`**: `Repeatable Component` (Manages links groups):
  * **`columnTitle`**: `String`
  * **`links`**: `Repeatable Component` (Direct target connections):
    * **`label`**: `String`
    * **`path`**: `String`

---

### L. Law: `Legal` (Single Type: `api::legal.legal`)
*Organizes Terms of Service and Privacy Policy agreements within structured blocks.*

* **`privacyPolicy`**: `Group` (Privacy requirements):
  * **`seo`**: `Component` (`shared.seo`)
  * **`title`**: `String` (Default: "Privacy Policy")
  * **`subtitle`**: `String`
  * **`bodyContent`**: `Rich Text (Blocks)` (Replacing array string nodes. Allows listing paragraphs cleanly)
  * **`lastUpdated`**: `String`
* **`termsOfService`**: `Group` (Terms of Service):
  * **`seo`**: `Component` (`shared.seo`)
  * **`title`**: `String` (Default: "Terms of Service")
  * **`subtitle`**: `String`
  * **`bodyContent`**: `Rich Text (Blocks)`
  * **`lastUpdated`**: `String`

---

## 5. Summary Matrix: Strapi v5 Type Declarations

| Content Model | Strapi API ID | Architecture Type | Chief Input Interfaces / Optimization Highlights |
| :--- | :--- | :--- | :--- |
| **Hope Stories** | `api::hope-story.hope-story` | **Collection Type** | Blocks Editor, Auto-Slug UID, Cover Media, Tag Arrays |
| **Home** | `api::home.home` | **Single Type** | Reusable Hero, Static Pillars, Clean Metrics sections |
| **About Kyaka** | `api::about-kyaka.about-kyaka` | **Single Type** | Demographics Ratios, UNHCR Map Image overlays |
| **About Team** | `api::about-team.about-team` | **Single Type** | Team Category Enumerations, Staff repeaters directory |
| **Vision & Mission**| `api::about-vision.about-vision` | **Single Type** | Multi-paragraph history sections, Partner cards |
| **Hope Family** | `api::hope-family.hope-family` | **Single Type** | Structured Accordions, Embed DonorBox form handles |
| **Projects School** | `api::projects-school.projects-school`| **Single Type** | School performance indexes, Salary campaign blocks |
| **Projects Medical**| `api::projects-medical.projects-medical`| **Single Type** | Comprehensive medical triage cards, Upgrades progress tracker |
| **Projects Orphanage**| `api::projects-orphanage.projects-orphanage`| **Single Type** | Transparent budget divisions, Dual care models, FAQ FAQs |
| **Projects Hope** | `api::projects-hope.projects-hope` | **Single Type** | Sustainability projects, Mill funding milestones |
| **Navigation** | `api::navigation.navigation` | **Single Type** | Hierarchical links menus |
| **Footer** | `api::footer.footer` | **Single Type** | Newsletter texts, Social profile maps, Columns listings |
| **Legal** | `api::legal.legal` | **Single Type** | Privacy Policy & Terms of Service Blocks |

---

## 6. Long-Term Content Editing Optimization Guidelines

To ensure non-technical clients like Pastor Godfrey and team can edit content independently without causing visual issues, follow these guidelines in the Strapi Admin configuration:

1. **Utilize Helpful Field Descriptions**:
   * Add helpful descriptive text directly inside Strapi's admin GUI for each field. For example:
     * *`progressPercent`*: `"Specify an integer from 0 to 100 representing fundraising traction. Entering 100 marks this phase as fully completed automatically on the site."*
     * *`metaDescription`*: `"Summary of this page's content. Max 160 characters. Shows in search engine listings."*
2. **Restrict Media Types**:
   * Prevent users from uploading heavy PDFs or invalid layouts into background image slots by configuring strict media validation. Only allow common web image formats (PNG, JPG, WebP) for hero banners.
3. **Select `Rich Text (Blocks)` for Flexible Layouts**:
   * Use Strapi v5's native **Blocks** editor instead of standard Markdown or raw HTML. This provides a user-friendly Word-like interface while sending clean JSON schemas to the React frontend.
4. **i18n Integration**:
   * Enable localization on descriptive fields while keeping static configurations (such as currency codes, URLs, percentages, and progress limits) synchronized across all language variations.
