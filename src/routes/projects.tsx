import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects — Angels Care Uganda" }] }),
  component: () => <Outlet />,
});
