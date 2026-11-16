import * as React from "react";

/** Renders overlay content inside the scoped `.admin-module` wrapper so module styles apply; falls back to <body>. */
export function AdminPortalContainer({ children }: { children: (container: HTMLElement) => React.ReactNode }) {
  const [container, setContainer] = React.useState<HTMLElement | null>(null);
  React.useEffect(() => {
    setContainer(document.querySelector<HTMLElement>(".admin-module") ?? document.body);
  }, []);
  return container ? children(container) : null;
}
