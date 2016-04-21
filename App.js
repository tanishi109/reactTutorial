import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this)
    this.state = {val: 0}
  }
  update() {
    this.setState({val: this.state.val + 1})
  }
  render() {
    return (
      <InnerComponent update={this.update}{...this.state}{...this.props} />
    )
  }
}

const Button = (props) => {
  return <button onClick={props.update}>{props.txt} -> {props.val}</button>
}

const Label = (props) => {
  return <label onMouseMove={props.update}>{props.txt} -> {props.val}</label>
}

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonMixed txt="MixedButton" />
        <LabelMixed txt="MixedLabel" />
      </div>
    )
  }
}

export default App