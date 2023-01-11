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
    maxHeight: '30rem',
    objectFit: 'cover',
  },
});

export default Styles;
