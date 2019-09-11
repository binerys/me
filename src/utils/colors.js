export const useDarkTheme = (hex) => {
  // from: https://24ways.org/2010/calculating-color-contrast
  hex = hex.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000

  return yiq >= 128;
}
