import { createFileRoute } from "@tanstack/react-router";
import { BlankPage } from "@/components/blank-page";

export const Route = createFileRoute("/projects/medical-centre")({
  head: () => ({ meta: [{ title: "Medical Centre — Angels Care Uganda" }] }),
  component: () => <BlankPage title="Medical Centre" parent="Projects" />,
});
