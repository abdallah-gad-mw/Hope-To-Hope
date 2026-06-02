import { createFileRoute } from "@tanstack/react-router";
import { BlankPage } from "@/components/blank-page";

export const Route = createFileRoute("/about/kyaka-ii")({
  head: () => ({ meta: [{ title: "Kyaka II — Angels Care Uganda" }] }),
  component: () => <BlankPage title="Kyaka II" parent="About" />,
});
