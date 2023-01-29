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
    marginTop: '2rem',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  modalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      height: '90%',
      overflowY: 'auto',
      width: '90%',
    },
  },
});

export default Styles;
