import type { FC } from "react";
import { useOutcome } from "~lib/entities/outcome";
import { cn } from "~lib/shared/design-system/utils";
import { AgentHarnessUI, type AgentHarnessUIProps } from "~ui/agent-harness-ui";
import { Markdown, type MarkdownProps } from "~ui/markdown";

export const Content: FC<Omit<MarkdownProps, "children">> = ({
  className,
  extraComponents,
  ...props
}) => {
  const outcome = useOutcome();

  return (
    <Markdown
      className={cn("my-6 md:my-8", className)}
      extraComponents={{
        AgentHarnessUI: (props: AgentHarnessUIProps) => (
          <AgentHarnessUI {...props} />
        ),
        ...extraComponents,
      }}
      {...props}
    >
      {outcome.content}
    </Markdown>
  );
};
