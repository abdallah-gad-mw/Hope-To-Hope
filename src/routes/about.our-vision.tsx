import { createFileRoute } from "@tanstack/react-router";
import { BlankPage } from "@/components/blank-page";

export const Route = createFileRoute("/about/our-vision")({
  head: () => ({ meta: [{ title: "Our Vision — Angels Care Uganda" }] }),
  component: () => <BlankPage title="Our Vision" parent="About" />,
});
