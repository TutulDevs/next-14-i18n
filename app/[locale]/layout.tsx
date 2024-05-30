import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { LocaleType, locales } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayoutLocale({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: LocaleType };
}>) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  // console.log("root: ", locale, messages);

  return (
    <html lang={locale}>
      <body className="px-4">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
