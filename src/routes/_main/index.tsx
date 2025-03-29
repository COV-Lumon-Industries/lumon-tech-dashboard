import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/")({
  beforeLoad: () => {
    throw redirect({
      to: "/dashboard",
      replace: true
    });
  },
  component: RouteComponent,
});

function RouteComponent() {
  return null;
}
