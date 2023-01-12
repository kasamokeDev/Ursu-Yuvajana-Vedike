const Styles = (theme) => ({
    slideType1: {
      animation: 'translate-title 2s linear',
      '@keyframes translate-title': {
        '0%': {
          opacity: 0,
          transform: 'translateY(-200%)',
        },
        '100%': {
          opacity: 1,
          transform: 'translateY(0)',
        },
      },
    },
    carouselImage: {
      [theme.breakpoints.down('sm')]: {
          maxHeight: '15rem',
      },
      maxWidth: '100%',
      maxHeight: '10rem',
      objectFit: 'cover',
    },
    swiperSlide : {
      maxHeight: '100%',
      maxWidth: '100%',
    },
    button: {
        width: '15rem',
        textTransform: 'none',
        borderRadius: '1rem',
        backgroundColor: 'rgb(45, 132, 204)',
        fontFamily: 'arial, sans-serif',
        color: '#FFFFFF',
    
        '&:hover': {
          backgroundColor: 'rgb(45, 132, 204)',
          color: '#FFFFFF',
        },
      },
  });
  
  export default Styles;
  