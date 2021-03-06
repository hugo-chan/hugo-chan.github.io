import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

/* Change body font of theme */
fairyGateTheme.baseFontSize = '20px'
fairyGateTheme.bodyFontFamily = ['Quattrocento Sans']

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography