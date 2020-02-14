export const theme = {
  grey_900: "#171414",
  grey_800: "#322D2D",
  grey_700: "#4E4646",
  grey_600: "#7C7474",
  grey_500: "#AAA2A3",
  grey_400: "#C9C3C4",
  grey_300: "#E8E5E5",
  grey_200: "#EFEDED",
  grey_100: "#F7F6F6",
  sec_col_900: "#171414",
  sec_col_600: "#7C7474",
  sec_col_500: "#AAA2A3",
  sec_col_400: "#C9C3C4",
  sec_col_200: "#EFEDED",
  strokeWidth: "4px",
  sm_shadow: `0px 2px 0px ${props => props.theme.grey_900},
  0px 2px 5px ${props => props.theme.grey_900};`,
}

export const p1_theme = {
  ...theme,
  pri_col_900: "",
}
