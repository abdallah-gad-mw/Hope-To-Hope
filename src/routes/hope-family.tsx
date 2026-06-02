import { createFileRoute } from "@tanstack/react-router";
import { BlankPage } from "@/components/blank-page";

export const Route = createFileRoute("/hope-family")({
  head: () => ({ meta: [{ title: "Hope Family — Angels Care Uganda" }] }),
  component: () => <BlankPage title="Hope Family" />,
});
