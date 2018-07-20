# with-thenable-setstate

HOC to add a thenable setState to your React components.

**NOTE:** this is under develepment, and the `this.thenableSetState` method name
might change (if I can think of anything less verbose).

--------

## Installation

`npm i with-thenable-setstate`

## Usage

```javascript
import * as React from 'react'
import withThenableSetState from 'with-thenable-setstate'
// `require` also works:
// const withThenableSetState = require('with-thenable-setstate')

class Foo extends React.Component {
  state = { a: 0 }

  // async/await example
  async something () {
    try {
      await this.thenableSetState({ a: 1 })
      await doSomethingElseNow()
    } catch (e) {
      // handle e
    }
  }

  // promise syntax example
  somethingElse () {
    this.thenableSetState({ a: 2 })
      .then(doSomethingElseNow)
      .catch((e) => {
        // handle e
      })
  }
}

export default withThenableSetState(Foo)
```

## License

[MIT](./LICENSE.md)
