/**
 * Site-wide constants. Edit these once and every page picks them up.
 */

export const SITE_TITLE = 'Justin Zhang';
export const SITE_DESCRIPTION = 'Notes on software, systems, and things I build.';

/** Top nav. Add a page here after creating it in src/pages/. */
export const NAV = [
  { href: '/', label: 'home' },
  { href: '/blog', label: 'blog' },
  { href: '/projects', label: 'projects' },
] as const;

/** Shown in the footer. Remove any you don't want. */
export const LINKS = [
  { href: 'https://github.com/ju5tinz', label: 'github' },
  { href: 'mailto:ju5tinz.engineer@gmail.com', label: 'email' },
] as const;
