import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Angels Care Uganda" },
      { name: "description", content: "About Angels Care Uganda." },
    ],
  }),
  component: () => <Outlet />,
});
