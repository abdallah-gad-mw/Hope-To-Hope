import { createFileRoute } from "@tanstack/react-router";
import { BlankPage } from "@/components/blank-page";

export const Route = createFileRoute("/projects/school")({
  head: () => ({ meta: [{ title: "Angels Care School — Angels Care Uganda" }] }),
  component: () => <BlankPage title="Angels Care School" parent="Projects" />,
});
