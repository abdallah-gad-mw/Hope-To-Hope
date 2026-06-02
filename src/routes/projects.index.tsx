import { createFileRoute } from "@tanstack/react-router";
import { BlankPage } from "@/components/blank-page";

export const Route = createFileRoute("/projects/")({
  head: () => ({ meta: [{ title: "Projects — Angels Care Uganda" }] }),
  component: () => <BlankPage title="Projects" />,
});
