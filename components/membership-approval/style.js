const Styles = (theme) => ({
  dashboardContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  button: {
    width: '15rem',
    textTransform: 'none',
    borderRadius: '1rem',
    backgroundColor: 'rgb(45, 132, 204)',
    fontFamily: 'arial, sans-serif',
    color: '#FFFFFF',

    '&:hover': {
      backgroundColor: 'green',
      color: '#FFFFFF',
    },
  },
  rowContainer: {
    boxShadow:
      'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
      padding: '1rem',
      marginTop: '2rem'
  },
});

export default Styles;
