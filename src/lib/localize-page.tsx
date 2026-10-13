import "server-only";
import { cloneElement, isValidElement, type ReactNode, type ReactElement } from "react";
import Header from "@/components/Header";
import { localizedPath, type Locale } from "./locales";
import { translate } from "./translate";

// Resolve server-only content components before translating their rendered text.
// Interactive navigation remains a client component with explicit locale props.
export function localizePage(node: ReactNode, locale: Locale): ReactNode {
  if (typeof node === "string") return translate(locale, node);
  if (Array.isArray(node)) return node.map(child => localizePage(child, locale));
  if (!isValidElement(node)) return node;
  const element = node as ReactElement<Record<string, unknown>>;
  if (element.type === Header) return cloneElement(element, { locale });
  if (typeof element.type === "function" && !("$$typeof" in element.type)) {
    return localizePage((element.type as (props: Record<string, unknown>) => ReactNode)({ ...element.props, locale }), locale);
  }
  const props: Record<string, unknown> = {};
  if (typeof element.props.href === "string") props.href = localizedPath(locale, element.props.href);
  for (const attribute of ["aria-label", "title", "alt"]) {
    if (typeof element.props[attribute] === "string") {
      const text = element.props[attribute] as string;
      props[attribute] = text.startsWith("Read ") ? `${translate(locale, "Read Entry")} — ${translate(locale, text.slice(5))}` : text.startsWith("Explore ") ? `${translate(locale, "Explore Project")} — ${translate(locale, text.slice(8))}` : translate(locale, text);
    }
  }
  if (element.props.children !== undefined) props.children = localizePage(element.props.children as ReactNode, locale);
  return cloneElement(element, props);
}
