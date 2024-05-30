import { LocaleType } from "@/i18n";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export default async function UserDetailsPage({
  params,
}: {
  params: { id: string; locale: LocaleType };
}) {
  unstable_setRequestLocale(params?.locale);

  const t = await getTranslations("User");

  const id = params?.id ?? "";

  const userData = await fetch(
    `https://jsonplaceholder.typicode.com/users/${parseInt(id)}`
  );
  const user = await userData.json();

  return (
    <main className="">
      <h1 className="text-7xl">{t("title")}</h1>

      <div className="border rounded m-4 p-2">
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </main>
  );
}
