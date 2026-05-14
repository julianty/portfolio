import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider, HelmetServerState } from "react-helmet-async";
import { AppContent } from "./app";

type HelmetContext = { helmet?: HelmetServerState };

export function render(url: string): { html: string; helmetContext: HelmetContext } {
  const helmetContext: HelmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppContent />
      </StaticRouter>
    </HelmetProvider>
  );
  return { html, helmetContext };
}
