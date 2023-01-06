const Styles = (theme) => ({
  aboutContainer: {
    alignContent: 'center',
    mb: 10,
  },
  aboutGridContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: { xs: 'column', sm: 'row' },
    mt: 5,
  },
  aboutText: {
    textAlign: 'justify',
    width: '100%',
    fontFamily: 'sans-serif',
  },
  aboutImage: {
    height: { xs: '280', md: '350' },
    width: { xs: '100%', md: '100%' },
    maxHeight: { xs: 233, md: 600 },
    maxWidth: { xs: 350, md: 500 },
  },
  aboutDividerContainer: {
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
  },
});

export default Styles;
