import Typography from "typography"
import parnassusTheme from "typography-theme-parnassus"

const typography = new Typography(parnassusTheme)

parnassusTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}
parnassusTheme.googleFonts = [
  {
    name: "VT323",
    styles: ["300", "400", "500", "600", "700"],
  },
]

//eventually replace import in header by parn.headerFontFamily?

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
