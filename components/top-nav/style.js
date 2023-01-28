const Styles = (theme) => ({
  link: {
    textDecoration: 'none',
    fontSize: '20px',
    [theme.breakpoints.down('lg')]: {
      color: 'blue',
    },
    [theme.breakpoints.up('lg')]: {
      color: '#000000',
    },
    // '&:hover': {
    //   color: 'yellow'
    // }
  },
  icon: { color: '#000' },
  logo: { flexGrow: '1', cursor: 'pointer' },
  draw: { background: 'red' },
  navlinks: {
    marginLeft: '10px',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '&:hover': {
      boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
  },
});

export default Styles;
