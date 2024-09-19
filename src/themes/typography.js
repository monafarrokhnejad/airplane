// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||============================== //

const Typography = () => ({
  htmlFontSize: 16,
  fontFamily: `Inter,Nunito`,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  //Headline Large - Nunito Bold 24/34
  h1: {
    fontWeight: 700,
    fontSize: "2.4rem",
    lineHeight: "3.4rem",
    fontFamily: `Nunito`,
  },
  // Headline Medium - Nunito Bold 18/26
  h2: {
    fontWeight: 700,
    fontSize: "1.8rem",
    lineHeight: "2.6rem",
    fontFamily: `Nunito`,
  },
  // Headline Smal - Nunito Medium 14/20
  h3: {
    fontWeight: 500,
    fontSize: "1.4rem",
    lineHeight: "2rem",
    fontFamily: `Nunito`,
  },

  h4: {
    fontWeight: 500,
    fontSize: "1.8rem",
    lineHeight: "2.6rem",
    fontFamily: `Nunito`,
  },
  h5: {
    fontWeight: 500,
    fontSize: "1.6rem",
    lineHeight: "1.5rem",
    fontFamily: `Nunito`,
  },
  h6: {
    fontWeight: 700,
    fontSize: "1.4rem",
    lineHeight: "1.6rem",
    fontFamily: `Nunito`,
  },

  // Label Large- Inter Medium 14/16
  subtitle2: {
    fontSize: "1.4rem",
    fontWeight: 500,
    lineHeight: "1.6rem",
    fontFamily: `Inter`,
  },
  // Label Medium - Inter Medium 12/16
  subtitle1: {
    fontSize: "1.2rem",
    fontWeight: 500,
    lineHeight: "1.6rem",
    fontFamily: `Inter`,
  },

  // Body Medium - Inter Regular 12/16
  body1: {
    fontWeight: 400,
    fontSize: "1.2rem",
    lineHeight: "1.6rem",
    fontFamily: `Inter`,
  },

  body2: {
    fontSize: "0.75rem",
    lineHeight: "1.6rem",
  },
  caption: {
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: "1.6rem",
  },
  overline: {
    lineHeight: "1.6rem",
  },
});

export default Typography;
