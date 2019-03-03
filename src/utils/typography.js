import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  headerFontFamily: ['Baloo Paaji', 'Segoe UI'],
  bodyFontFamily: ['Nunito', 'Helvetica', 'Arial', 'sans-serif'],
  googleFonts: [
    { name: 'Baloo Paaji', styles: ['400'] },
    {
      name: 'Nunito',
      styles: [ '400', '700']
    }
  ],
  scaleRatio: 2.5,
})

export default typography
