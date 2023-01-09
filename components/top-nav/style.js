const Styles = (theme) => ({
  link: {
    textDecoration: 'none',
    fontSize: '20px',
    [theme.breakpoints.down('lg')]: {
      color: 'blue',
    },
    [theme.breakpoints.up('lg')]: {
      color: '#FFFFFF',
    },
    '&:hover': {
      color: 'yellow'
    }
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
