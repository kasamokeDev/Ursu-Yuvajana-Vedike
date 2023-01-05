const Styles = (theme) => ({
  link: {
    textDecoration: 'none',
    fontSize: '20px',
    [theme.breakpoints.down('sm')]: {
      color: 'blue',
    },
    [theme.breakpoints.up('sm')]: {
      color: '#FFFFFF',
    },
  },
  icon: { color: 'white' },
  logo: { flexGrow: '1', cursor: 'pointer' },
  draw: { background: 'red' },
  navlinks: {
    marginLeft: '10px',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
});

export default Styles;
