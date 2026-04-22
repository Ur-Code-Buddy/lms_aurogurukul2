/**
 * Public product name and URLs (single source of truth for white-label UI copy).
 * Re-exports platform defaults from @courselit/common-models for use in apps/web.
 */
import {
    PLATFORM_PRODUCT_NAME,
    PLATFORM_PRODUCT_SITE_URL,
} from "@courselit/common-models";

export const PRODUCT_NAME = PLATFORM_PRODUCT_NAME;
export const PRODUCT_SITE_URL = PLATFORM_PRODUCT_SITE_URL;
/** Base URL for help/documentation links (no trailing slash). */
export const DOCUMENTATION_SITE_URL = "https://aurogurukul.com";
export const SUPPORT_EMAIL = "support@aurogurukul.com";

/** Full documentation URL for a path like `/en/foo` (leading slash optional). */
export function documentationUrl(path: string): string {
    const base = DOCUMENTATION_SITE_URL.replace(/\/$/, "");
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${base}${normalized}`;
}
