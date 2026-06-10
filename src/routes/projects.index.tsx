import { createFileRoute, redirect } from "@/lib/router";

export const Route = createFileRoute("/projects/")({
  beforeLoad: () => {
    throw redirect({ to: "/projects/school", replace: true });
  },
});
