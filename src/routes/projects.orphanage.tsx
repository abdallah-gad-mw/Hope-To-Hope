import { createFileRoute } from "@tanstack/react-router";
import { BlankPage } from "@/components/blank-page";

export const Route = createFileRoute("/projects/orphanage")({
  head: () => ({ meta: [{ title: "Angels Care Orphanage — Angels Care Uganda" }] }),
  component: () => <BlankPage title="Angels Care Orphanage" parent="Projects" />,
});
