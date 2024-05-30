"use client";
import { useTranslations } from "next-intl";

export const ThoughtForm = () => {
  const t = useTranslations("About");

 


  return (
    <form
      className="flex flex-col gap-4 max-w-md p-4 m-4 border rounded"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submit: ", e);
      }}
    >
      <h3 className="text-2xl">{t("form_title")}</h3>

      <label htmlFor="name" className="border border-slate-200 p-1 flex items-center gap-2">
        <span>Name</span>{" "}
        <input type="text" name="name" id="name" placeholder="enter" className="w-full" />
      </label>

      <button type="submit" className="bg-green-400 p-1">
        {t("submit")}
      </button>
    </form>
  );
};
