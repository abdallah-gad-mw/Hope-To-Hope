import { createFileRoute, Outlet } from "@/lib/router";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects — Angels Care Uganda" }] }),
  component: () => <Outlet />,
});
