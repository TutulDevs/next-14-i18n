import { LinkLocale } from "@/components/LinkLocale";
import { notFound } from "next/navigation";

export default function NotFoundCatchAll() {
  // notFound();

  return (
    <div>
      <h2>Not Found in {`'NotFoundCatchAll`}</h2>
      <p>Could not find requested resource</p>
      <LinkLocale href="/">Return Home</LinkLocale>
    </div>
  );
}
