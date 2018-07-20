const withThenableSetState = (Comp) =>
  class extends Comp {
    thenableSetState (state, cb) {
      return new Promise((resolve) => {
        this.setState(state, (...args) => {
          if (typeof cb === 'function') {
            cb(args)
          }
          resolve(args)
        })
      })
    }
  }

export default withThenableSetState
