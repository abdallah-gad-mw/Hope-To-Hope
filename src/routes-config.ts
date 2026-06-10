import { Route as RootIndex } from "./routes/index";
import { Route as AboutLayout } from "./routes/about";
import { Route as AboutIndex } from "./routes/about.index";
import { Route as AboutVision } from "./routes/about.our-vision";
import { Route as AboutTeam } from "./routes/about.our-team";
import { Route as AboutKyaka } from "./routes/about.kyaka-ii";
import { Route as ProjectsLayout } from "./routes/projects";
import { Route as ProjectsIndex } from "./routes/projects.index";
import { Route as ProjectsSchool } from "./routes/projects.school";
import { Route as ProjectsMedical } from "./routes/projects.medical-centre";
import { Route as ProjectsOrphanage } from "./routes/projects.orphanage";
import { Route as ProjectsHope } from "./routes/projects.hope-projects";
import { Route as HopeStoriesLayout } from "./routes/hope-stories";
import { Route as HopeStoriesIndex } from "./routes/hope-stories.index";
import { Route as HopeStoriesLaunch } from "./routes/hope-stories.online-launch";
import { Route as HopeFamily } from "./routes/hope-family";
import { Route as PrivacyPolicy } from "./routes/privacy-policy";
import { Route as TermsOfService } from "./routes/terms-of-service";

export const routesConfig: Record<string, any> = {
  "/": RootIndex,
  "/about": AboutLayout,
  "/about/index": AboutIndex,
  "/about/our-vision": AboutVision,
  "/about/our-team": AboutTeam,
  "/about/kyaka-ii": AboutKyaka,
  "/projects": ProjectsLayout,
  "/projects/index": ProjectsIndex,
  "/projects/school": ProjectsSchool,
  "/projects/medical-centre": ProjectsMedical,
  "/projects/orphanage": ProjectsOrphanage,
  "/projects/hope-projects": ProjectsHope,
  "/hope-stories": HopeStoriesLayout,
  "/hope-stories/index": HopeStoriesIndex,
  "/hope-stories/online-launch": HopeStoriesLaunch,
  "/hope-family": HopeFamily,
  "/privacy-policy": PrivacyPolicy,
  "/terms-of-service": TermsOfService,
};
