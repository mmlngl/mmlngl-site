import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~ui/button";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
