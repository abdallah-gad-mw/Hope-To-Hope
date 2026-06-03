import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/hope-stories")({
  head: () => ({
    meta: [
      { title: "Stories of Hope — Angels Care Uganda" },
      {
        name: "description",
        content:
          "Read the latest updates and testimonies from our community in the Kyaka II refugee settlement.",
      },
    ],
  }),
  component: () => <Outlet />,
});
