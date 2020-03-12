module.exports = {
  theme: {
    extend: {
      colors: {
        night: {
          default: "#11112F",
          light: "#161638"
        },
        camel: {
          default: "#F67242",
          light: "#FFA180"
        },
        stone: "#6A6B6F",
        ghost: {
          default: "#F9FAF9",
          light: "#80818B",
          '44': "rgba(249, 250, 249, 0.44)"
        },
        platinum: {
          default: "#BFC6CE"
        },
        bronze: {
          default: "#D66942"
        }
      },
      minWidth: {
        mobile: "20rem"
      },

      minHeight: {
        "3/4": "75%",
        "24": "24rem"
      }
    },

    /* Most of the time we customize the font-sizes,
     so we added the Tailwind default values here for
     convenience */
    fontSize: {
      '14': "0.875rem",
      '16': "1rem",
      '18': "1.125rem",
      '21': "1.3125rem",
      '24': "1.5rem",
      '34': "2.125rem",
      '26': "1.625rem",
      '50': "3.125rem",
      '60': "3.75rem",
      '72': "4.5rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem"
    },

    /* We override the default font-families with our own default prefs  */
    fontFamily: {
      sans: [
        "Lato",
        "-apple-system",
        "BlinkMacSystemFont",
        "Helvetica Neue",
        "Arial",
        "sans-serif"
      ],
      serif: [
        "Zilla Slab",
        "Georgia",
        "-apple-system",
        "BlinkMacSystemFont",
        "Helvetica Neue",
        "Arial",
        "sans-serif"
      ],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        "Roboto Mono",
        "SFMono-Regular",
        "Segoe UI",
        "Courier",
        "monospace"
      ]
    }
  },

  variants: {
    width: ["responsive"]
  },

  plugins: []
};
