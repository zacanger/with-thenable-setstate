# with-thenable-setstate

HOC to add a thenable setState to your React components.

[![Support with PayPal](https://img.shields.io/badge/paypal-donate-yellow.png)](https://paypal.me/zacanger) [![Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/zacanger) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB)

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

[LICENSE](./LICENSE.md)
