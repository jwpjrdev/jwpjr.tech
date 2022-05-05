import { BaseStyles, SSRProvider, ThemeProvider } from "@primer/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <SSRProvider>
      <html lang="en">
            <head>
              <Meta />
              <Links />
              {typeof document === "undefined" ? "__STYLES__" : null}
            </head>
            <body>
            <ThemeProvider>
          <BaseStyles>
              <Outlet />
              <ScrollRestoration />
              <Scripts />
              <LiveReload />
              </BaseStyles>
        </ThemeProvider>
            </body>
      </html>
    </SSRProvider>
  );
}
