import classNames from "classnames";
import { useTranslation } from "react-i18next";

import { Icon, Icons } from "@/components/Icon";
import { useIsMobile } from "@/hooks/useIsMobile";

export function BrandPill(props: {
  clickable?: boolean;
  header?: boolean;
  backgroundClass?: string;
}) {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <div
      className={classNames(
        "flex items-center space-x-2 rounded-full px-4 py-2 text-type-logo backdrop-blur-lg",
        "border border-transparent",
        props.backgroundClass ?? "bg-pill-background bg-opacity-50",
        props.clickable
          ? "transition-all duration-200 hover:scale-105 hover:bg-pill-backgroundHover hover:text-type-logo active:scale-95 hover:border-[rgba(20,229,212,0.25)] hover:shadow-[0_0_16px_rgba(20,229,212,0.12)]"
          : "",
      )}
    >
      <Icon className="text-2xl" icon={Icons.LOGO} />
      <span
        className={[
          "font-bold tracking-widest text-white uppercase",
          isMobile && props.header ? "hidden sm:block" : "",
        ].join(" ")}
      >
        {t("global.name")}
      </span>
    </div>
  );
}
