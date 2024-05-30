import { ThoughtForm } from "@/components/ThoughtForm";
import { LocaleType } from "@/i18n";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: LocaleType };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("About");

  return (
    <main className="">
      <h1 className="text-7xl">{t("title")}</h1>

      <ThoughtForm />
    </main>
  );
}
