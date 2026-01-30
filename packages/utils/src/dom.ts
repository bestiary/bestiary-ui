export const isClient = typeof window !== "undefined";

export function isElement(node: unknown): node is Element {
    if (typeof Element === "undefined") return false;
    return node instanceof Element;
}
