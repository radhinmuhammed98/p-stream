import { createTheme } from "../types";

const tokens = {
  white: "#FFFFFF",
  black: {
    c50: "#000000",
    c75: "#050505",
    c80: "#0a0a0a",
    c100: "#101010",
    c125: "#181818",
    c150: "#222222",
    c200: "#2e2e2e",
    c250: "#3a3a3a",
  },
  semantic: {
    red: {
      c100: "#FF003C", // Stark comic glitch red
      c200: "#E44F4F",
      c300: "#FF003C",
      c400: "#B43434",
    },
    green: {
      c100: "#00FF66",
      c200: "#40B44B",
      c300: "#31A33C",
      c400: "#237A2B",
    },
    silver: {
      c100: "#FFFFFF",
      c200: "#DEDEDE",
      c300: "#AAAAAA",
      c400: "#888888",
    },
    yellow: {
      c100: "#FFFFFF",
      c200: "#EEEEEE",
      c300: "#CCCCCC",
      c400: "#888888",
    },
    rose: {
      c100: "#FF003C",
      c200: "#8A293B",
      c300: "#FF003C",
      c400: "#701B2B",
    },
  },
  ash: {
    c50: "#FFFFFF",
    c100: "#EEEEEE",
    c200: "#CCCCCC",
    c300: "#888888",
    c400: "#666666",
    c500: "#444444",
    c600: "#333333",
    c700: "#222222",
    c800: "#111111",
    c900: "#050505",
  },
  shade: {
    c25: "#FFFFFF",
    c50: "#EEEEEE",
    c100: "#CCCCCC",
    c200: "#999999",
    c300: "#777777",
    c400: "#555555",
    c500: "#333333",
    c600: "#222222",
    c700: "#181818",
    c800: "#101010",
    c900: "#000000",
  },
};

export default createTheme({
  name: "spidermanoir",
  extend: {
    colors: {
      themePreview: {
        primary: tokens.white,
        secondary: tokens.black.c150,
        ghost: tokens.white,
      },

      pill: {
        background: tokens.black.c50,
        backgroundHover: tokens.black.c150,
        highlight: tokens.white,
        activeBackground: tokens.black.c200,
      },

      global: {
        accentA: tokens.white,
        accentB: tokens.white,
      },

      lightBar: {
        light: tokens.black.c250,
      },

      buttons: {
        toggle: tokens.white,
        toggleDisabled: tokens.black.c250,
        danger: tokens.semantic.rose.c300,
        dangerHover: tokens.white,

        secondary: tokens.black.c50,
        secondaryText: tokens.white,
        secondaryHover: tokens.black.c150,
        primary: tokens.white,
        primaryText: tokens.black.c50,
        primaryHover: tokens.semantic.silver.c200,
        purple: tokens.white,
        purpleHover: tokens.semantic.silver.c200,
        cancel: tokens.black.c150,
        cancelHover: tokens.black.c250,
      },

      background: {
        main: tokens.black.c50,
        secondary: tokens.black.c75,
        secondaryHover: tokens.black.c125,
        accentA: tokens.black.c200,
        accentB: tokens.black.c50,
      },

      modal: {
        background: tokens.black.c80,
      },

      type: {
        logo: tokens.white,
        emphasis: tokens.white,
        text: tokens.shade.c100,
        dimmed: tokens.shade.c200,
        divider: tokens.ash.c700,
        secondary: tokens.ash.c200,
        danger: tokens.semantic.red.c100,
        success: tokens.semantic.green.c100,
        link: tokens.white,
        linkHover: tokens.shade.c50,
      },

      search: {
        background: tokens.black.c100,
        hoverBackground: tokens.black.c150,
        focused: tokens.black.c200,
        placeholder: tokens.shade.c400,
        icon: tokens.shade.c300,
        text: tokens.white,
      },

      mediaCard: {
        hoverBackground: tokens.black.c125,
        hoverAccent: tokens.white,
        hoverShadow: tokens.black.c50,
        shadow: tokens.black.c50,
        barColor: tokens.ash.c700,
        barFillColor: tokens.white,
        badge: tokens.white,
        badgeText: tokens.black.c50,
      },

      largeCard: {
        background: tokens.black.c100,
        icon: tokens.white,
      },

      dropdown: {
        background: tokens.black.c80,
        altBackground: tokens.black.c100,
        hoverBackground: tokens.black.c150,
        highlight: tokens.white,
        highlightHover: tokens.semantic.silver.c200,
        text: tokens.shade.c100,
        secondary: tokens.shade.c200,
        border: tokens.ash.c700,
        contentBackground: tokens.black.c50,
      },

      authentication: {
        border: tokens.ash.c600,
        inputBg: tokens.black.c100,
        inputBgHover: tokens.black.c150,
        wordBackground: tokens.black.c200,
        copyText: tokens.shade.c100,
        copyTextHover: tokens.white,
        errorText: tokens.semantic.rose.c100,
      },

      settings: {
        sidebar: {
          activeLink: tokens.black.c150,
          badge: tokens.black.c50,

          type: {
            secondary: tokens.shade.c200,
            inactive: tokens.shade.c100,
            icon: tokens.shade.c100,
            iconActivated: tokens.white,
            activated: tokens.white,
          },
        },

        card: {
          border: tokens.ash.c700,
          background: tokens.black.c100,
          altBackground: tokens.black.c100,
        },

        saveBar: {
          background: tokens.black.c80,
        },
      },

      utils: {
        divider: tokens.ash.c700,
      },

      onboarding: {
        bar: tokens.black.c200,
        barFilled: tokens.white,
        divider: tokens.black.c150,
        card: tokens.black.c80,
        cardHover: tokens.black.c125,
        border: tokens.ash.c700,
        good: tokens.white,
        best: tokens.white,
        link: tokens.white,
      },

      errors: {
        card: tokens.black.c75,
        border: tokens.ash.c600,

        type: {
          secondary: tokens.ash.c200,
        },
      },

      about: {
        circle: tokens.black.c100,
        circleText: tokens.ash.c100,
      },

      editBadge: {
        bg: tokens.black.c200,
        bgHover: tokens.black.c250,
        text: tokens.white,
      },

      progress: {
        background: tokens.black.c200,
        preloaded: tokens.black.c250,
        filled: tokens.white,
      },

      video: {
        buttonBackground: tokens.black.c200,

        autoPlay: {
          background: tokens.black.c150,
          hover: tokens.black.c200,
        },

        scraping: {
          card: tokens.black.c100,
          error: tokens.semantic.red.c200,
          success: tokens.semantic.green.c200,
          loading: tokens.white,
          noresult: tokens.black.c250,
        },

        audio: {
          set: tokens.white,
        },

        context: {
          background: tokens.black.c50,
          light: tokens.white,
          border: tokens.ash.c700,
          hoverColor: tokens.black.c150,
          buttonFocus: tokens.black.c200,
          flagBg: tokens.black.c200,
          inputBg: tokens.black.c100,
          buttonOverInputHover: tokens.black.c200,
          inputPlaceholder: tokens.shade.c300,
          cardBorder: tokens.ash.c700,
          slider: tokens.black.c200,
          sliderFilled: tokens.white,
          error: tokens.semantic.red.c200,

          buttons: {
            list: tokens.black.c150,
            active: tokens.white,
          },

          closeHover: tokens.black.c200,

          type: {
            main: tokens.white,
            secondary: tokens.shade.c100,
            accent: tokens.white,
          },
        },
      },
    },
  },
});
