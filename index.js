const withThenableSetState = (Comp) =>
  class extends Comp {
    thenableSetState(state, cb) {
      return new Promise((resolve) => {
        this.setState(state, (...args) => {
          if (typeof cb === 'function') {
            cb(args)
          }
        })
      })
    }
  }

module.exports = withThenableSetState
