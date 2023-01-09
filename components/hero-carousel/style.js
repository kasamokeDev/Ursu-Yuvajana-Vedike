const Styles = (theme) => ({
  slideType1: {
    animation: 'translate-title 2s linear',
    animationFillMode: 'forwards',
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
});

export default Styles;
