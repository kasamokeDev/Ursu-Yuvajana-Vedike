const Styles = (theme) => ({
  formContainer: {
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
  PaymentModal: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },
});

export default Styles;
