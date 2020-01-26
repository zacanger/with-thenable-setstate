import * as React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import enzyme from 'enzyme'
import tape from 'tape'
import HOC from '.'

enzyme.configure({ adapter: new Adapter() })

tape.test('withThenableSetState', (t) => {
  class Foo extends React.Component {
    constructor(props) {
      super(props)
      this.state = { a: 0 }
    }

    thing() {
      this.thenableSetState({ a: 1 })
        .then(() => {})
        .catch(() => {})
    }

    render() {
      return <span />
    }
  }

  const Bar = HOC(Foo)

  const wrapper = enzyme.shallow(<Bar />)
  wrapper.instance().thing()

  t.equals(wrapper.state().a, 1)
  t.end()
})
