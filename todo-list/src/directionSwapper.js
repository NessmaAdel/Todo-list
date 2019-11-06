export const directionSwapper = (defaultDirection, ltr) => {
    const cases = {
      right: 'left',
      left: 'right',
    };
    return !ltr ? cases[defaultDirection] : defaultDirection;
  };