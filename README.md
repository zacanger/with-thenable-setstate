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

class Foo extends React.Component {
  state = { a: 0 }

  // async/await example
  async something () {
    try {
      await this.thenableSetState({ a: 1 })
    } catch (e) {

    }
  }

  // promise syntax example
  somethingElse () {
    this.thenableSetState({ a: 2 })
    .then(() => {
    })
    .catch((e) => {

    })
  }
}

export default withThenableSetState(Foo)
```

`require('with-thenable-setstate')` also works.

## License

[MIT](./LICENSE.md)
