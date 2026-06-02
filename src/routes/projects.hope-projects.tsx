import { createFileRoute } from "@tanstack/react-router";
import { BlankPage } from "@/components/blank-page";

export const Route = createFileRoute("/projects/hope-projects")({
  head: () => ({ meta: [{ title: "Hope Projects — Angels Care Uganda" }] }),
  component: () => <BlankPage title="Hope Projects" parent="Projects" />,
});
