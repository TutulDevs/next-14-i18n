// import { Link } from "@/navigation";
// import Link from "next/link";
import { LinkLocale } from "./LinkLocale";
import LocaleSwitcher from "./locale_switcher/LocaleSwitcher";

export const Navbar = () => {
  return (
    <header className="border-b py-2 flex items-center justify-between">
      <LinkLocale href={"/"} className="font-bold text-2xl text-green-600">
        i18n
      </LinkLocale>

      <nav className="flex items-center gap-4">
        <LinkLocale href={"/about"}>About</LinkLocale>
        <LinkLocale href={"/contact"}>Contact</LinkLocale>

        <LocaleSwitcher />
      </nav>
    </header>
  );
};
