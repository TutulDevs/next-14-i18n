import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { pathnames, locales, localePrefix, defaultLocale } from "./i18n";

const nextIntlMiddleware = createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix,
});

// const nextIntlMiddleware = createMiddleware({
//   // A list of all locales that are supported
//   locales: ["en", "es"],

//   // Used when no locale matches
//   defaultLocale: "en",
// });

export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(es|en)/:path*"],
};
