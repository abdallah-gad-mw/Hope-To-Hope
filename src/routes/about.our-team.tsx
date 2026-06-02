import { createFileRoute } from "@tanstack/react-router";
import { BlankPage } from "@/components/blank-page";

export const Route = createFileRoute("/about/our-team")({
  head: () => ({ meta: [{ title: "Our Team — Angels Care Uganda" }] }),
  component: () => <BlankPage title="Our Team" parent="About" />,
});
