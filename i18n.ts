import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { Pathnames } from "next-intl/navigation";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = "en" as const;
export const locales = ["en", "es"] as const;
export type LocaleType = (typeof locales)[number];

export const pathnames = {
  "/": "/",
  // "/about": "/about", // { en: "/about", es: "/about" },
  // "/about/*": "/about/*", // { en: "/about", es: "/about" },
  // "/contact": "/contact", // { en: "/contact", es: "/contact" },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = "always"; // undefined;

export type AppPathnames = keyof typeof pathnames;

export default getRequestConfig(async ({ locale }) => {
  const baseLocale = new Intl.Locale(locale).baseName;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(baseLocale as any)) notFound(); //redirect("/en/nothing");

  return {
    messages: (await import(`./messages/${baseLocale}.json`)).default,
  };
});
