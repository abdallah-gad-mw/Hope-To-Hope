import { createFileRoute } from "@tanstack/react-router";
import { BlankPage } from "@/components/blank-page";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [{ title: "About — Angels Care Uganda" }],
  }),
  component: () => <BlankPage title="About" />,
});
