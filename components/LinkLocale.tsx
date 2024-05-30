import { useLocale } from "next-intl";
import Link, { LinkProps } from "next/link";

export const LinkLocale: React.FC<
  LinkProps & {
    children: React.ReactNode;
    className?: string;
  }
> = (props) => {
  const locale = useLocale();

  return (
    <Link
      {...props}
      href={
        typeof props.href == "string" ? `/${locale + props.href}` : props.href
      }
      className={props.className}
    >
      {props.children}
    </Link>
  );
};
