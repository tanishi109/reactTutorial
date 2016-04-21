import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is state',
      num: 0
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Slider txt={this.state.txt} update={this.update} />
        <Slider txt={this.state.txt} update={this.update} />
        <Slider txt={this.state.txt} update={this.update} />
      </div>
    )
  }
}

const Slider = (props) => {
    return (
      <div>
        <input type="range" min="0" max="255" onChange={props.update} />
      </div>
    )
}

export default App