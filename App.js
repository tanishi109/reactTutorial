import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({ val: this.state.val + 1 })
  }
  componentWillMount() {
    console.log("mounting")
  }
  render() {
    console.log("rendering!")
    return (
      <button onClick={this.update}>{this.state.val}</button>
    )
  }
  componentDidMount() {
    console.log("mountied")
  }
}

export default App