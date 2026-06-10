import { createFileRoute, redirect } from "@/lib/router";

export const Route = createFileRoute("/about/")({
  beforeLoad: () => {
    throw redirect({ to: "/about/our-vision", replace: true });
  },
});
