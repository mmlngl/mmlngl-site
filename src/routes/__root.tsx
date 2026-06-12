// src/routes/__root.tsx
// <reference types="vite/client" />

import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ThemeProvider } from "~lib/shared/theme-provider";
import * as WayfindingUI from "~lib/widgets/wayfinding";
import { Copyright } from "~lib/widgets/wayfinding/footer/ui/copyright";
import stylesCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [{ rel: "stylesheet", href: stylesCss }],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="rounded-2xl border-4 relative m-2 bg-background shadow-lg overflow-hidden">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Copyright />
            <WayfindingUI.Masthead />
            <div className="lg:mr-14">
              {children}
              <WayfindingUI.Footer />
            </div>
          </ThemeProvider>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
