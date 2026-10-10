"use client";

import { useSyncExternalStore } from "react";

/** Nothing to subscribe to: the year only changes on a date boundary. */
const subscribe = () => () => {};
const currentYear = () => new Date().getFullYear();

/**
 * Rendered on the client so a build never freezes the copyright year into the
 * prerendered HTML. The server snapshot keeps the first paint stable.
 */
export function CopyrightYear() {
  const year = useSyncExternalStore(subscribe, currentYear, currentYear);
  return <>{year}</>;
}