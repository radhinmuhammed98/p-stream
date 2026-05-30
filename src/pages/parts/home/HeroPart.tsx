import classNames from "classnames";
import { useCallback, useRef, useState } from "react";
import Sticky from "react-sticky-el";

import { SearchBarInput } from "@/components/form/SearchBar";
import { ThinContainer } from "@/components/layout/ThinContainer";
import { useSlashFocus } from "@/components/player/hooks/useSlashFocus";
import { HeroTitle } from "@/components/text/HeroTitle";
import { useIsIOS, useIsMobile, useIsPWA } from "@/hooks/useIsMobile";
import { useIsTV } from "@/hooks/useIsTv";
import { useRandomTranslation } from "@/hooks/useRandomTranslation";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import { useBannerSize } from "@/stores/banner";

export interface HeroPartProps {
  setIsSticky: (val: boolean) => void;
  searchParams: ReturnType<typeof useSearchQuery>;
  showTitle?: boolean;
  isInFeatured?: boolean;
}

export function HeroPart({
  setIsSticky,
  searchParams,
  showTitle,
  isInFeatured,
}: HeroPartProps) {
  const { t: randomT } = useRandomTranslation();
  const [search, setSearch, setSearchUnFocus] = searchParams;
  const [showBg, setShowBg] = useState(false);
  const bannerSize = useBannerSize();
  const { isMobile } = useIsMobile();
  const { isTV } = useIsTV();

  const stickStateChanged = useCallback(
    (isFixed: boolean) => {
      setShowBg(isFixed);
      setIsSticky(isFixed);
    },
    [setIsSticky],
  );

  const isPWA = useIsPWA();
  const isIOS = useIsIOS();
  const isIOSPWA = isIOS && isPWA;

  // Navbar height is 80px (h-20)
  const navbarHeight = 80;
  // On desktop: inline with navbar (same top position + 14px adjustment)
  // On mobile: below navbar (navbar height + banner)
  const topOffset = isMobile
    ? navbarHeight + bannerSize + (isIOSPWA ? 34 : 0)
    : bannerSize + 14;

  const placeholder = randomT(`home.search.placeholder`);
  const inputRef = useRef<HTMLInputElement>(null);
  useSlashFocus(inputRef);

  return (
    <ThinContainer>
      <div
        className={classNames(
          "space-y-10 text-center",
          showTitle ? "mt-28" : "mt-4",
        )}
      >
        {showTitle && (!isTV || search.length === 0) ? (
          <div className="relative z-10 mb-10 veyra-hero-identity">
            {/* Atmospheric teal glow orb */}
            <div className="veyra-hero-glow" aria-hidden="true" />

            {/* VEYRA wordmark */}
            <HeroTitle className="mx-auto max-w-md veyra-wordmark-hero">
              VEYRA
            </HeroTitle>

            {/* Tagline */}
            <p className="veyra-hero-tagline">Watch Beyond.</p>

            {/* Description */}
            <p className="veyra-hero-description">
              Discover films, series and stories through a cleaner cinematic
              experience.
            </p>
          </div>
        ) : null}

        <div className="relative h-20 z-30">
          <Sticky
            topOffset={-topOffset}
            stickyStyle={{
              paddingTop: `${topOffset}px`,
            }}
            onFixedToggle={stickStateChanged}
            scrollElement="window"
          >
            <SearchBarInput
              ref={inputRef}
              onChange={setSearch}
              value={search}
              onUnFocus={setSearchUnFocus}
              placeholder={placeholder ?? ""}
              isSticky={showBg}
              isInFeatured={isInFeatured}
            />
          </Sticky>
        </div>
      </div>
    </ThinContainer>
  );
}
