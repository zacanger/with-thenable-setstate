const withThenableSetState = (Comp) =>
  class extends Comp {
    thenableSetState(state) {
      return new Promise((resolve) => {
        this.setState(state, (...args) => {
          resolve(args)
        })
      })
    }
  }

export default withThenableSetState
