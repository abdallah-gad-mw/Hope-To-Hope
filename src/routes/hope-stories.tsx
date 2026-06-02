import { createFileRoute } from "@tanstack/react-router";
import { BlankPage } from "@/components/blank-page";

export const Route = createFileRoute("/hope-stories")({
  head: () => ({ meta: [{ title: "Hope Stories — Angels Care Uganda" }] }),
  component: () => <BlankPage title="Hope Stories" />,
});
