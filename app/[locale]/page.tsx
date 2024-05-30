// import { useTranslations } from "next-intl";
import { LinkLocale } from "@/components/LinkLocale";
import { LocaleType } from "@/i18n";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export default async function Home({
  params: { locale },
}: {
  params: { locale: LocaleType };
}) {
  unstable_setRequestLocale(locale);

  // const t = useTranslations("Index");
  const t = await getTranslations();

  const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersList: { id: number; name: string }[] = await usersData.json();

  return (
    <main className="">
      <h1 className="text-7xl">{t("Index.title")}</h1>

      <div className="mt-4 flex flex-col gap-4">
        {usersList?.map((el) => (
          <p key={el.id} className="flex items-center gap-2">
            <span>{el.id}</span>

            <LinkLocale
              href={`/about/${el.id}`}
              className="hover:text-green-700"
            >
              {el.name}
            </LinkLocale>
          </p>
        ))}
      </div>
    </main>
  );
}
