export const variantMenuWrapper = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}

export const variantMenuContent = {
  initial: {
    width: '0px',
    height: '0%'
  },
  animate: {
    width: '320px',
    height: '100%',
    borderRadius: ['10%', '15%', '0%']
  },
  exit: {
    width: '0px',
    height: '0%',
    opacity: ['0.8', '0.5'],
    borderRadius: ['10%', '15%', '0%']
  }
}

export const variantMenuList = {
  initial: {
    opacity: 0,
    x: '-50'
  },
  animate: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: '-50'
  }
}
