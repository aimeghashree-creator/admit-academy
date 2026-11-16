import * as React from "react";
export function AdminPortalContainer({ children }: { children: (container: HTMLElement) => React.ReactNode }) {
 const [container, setContainer] = React.useState<HTMLElement | null>(null);
 React.useEffect(() => { setContainer(document.querySelector<HTMLElement>(".admin-module")); }, []);
 return container ? children(container) : null;
}
