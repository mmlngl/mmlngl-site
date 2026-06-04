import type { FC, HTMLAttributes } from "react";
import { cn } from "~shared/design-system/utils";
import { Card, CardContent, CardFooter, CardHeader } from "./card";

export interface AgentHarnessUIProps extends HTMLAttributes<HTMLDivElement> {}

export const AgentHarnessUI: FC<AgentHarnessUIProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Card
      className={cn("shadow-xl not-prose bg-stone-100 pt-0 my-15", className)}
      {...props}
    >
      <CardHeader className="bg-stone-200 border-b block h-6" />
      <CardContent className="flex flex-col divide-y">
        <pre className="text-muted-foreground/50 pb-4 select-none">
          Vivamus quis magna imperdiet, auctor.
        </pre>
        <pre className="block py-4">
          {children}
          <span className="animate-[pulse_600ms_ease-in-out_infinite] select-none">
            ▐
          </span>
        </pre>
        <pre className="text-muted-foreground/50 pt-4 select-none">
          Vivamus quis magna imperdiet, auctor.
        </pre>
      </CardContent>
    </Card>
  );
};
