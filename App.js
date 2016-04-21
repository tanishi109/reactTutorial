import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {id: 1, name: "Amber Porter"},
        {id: 2, name: "Frances Cruz"},
        {id: 3, name: "Sara Mendez"},
        {id: 4, name: "Paul Bell"},
        {id: 5, name: "Harry Ramos"},
        {id: 6, name: "Randy Collins"},
        {id: 7, name: "Dylan Dunn"},
        {id: 8, name: "Alan Mendoza"},
        {id: 9, name: "Julie Jacobs"},
        {id: 10, name: "Nathan Hill"},
        {id: 11, name: "Jean Fuller"},
        {id: 12, name: "Charles Guzman"},
        {id: 13, name: "Laura Munoz"},
        {id: 14, name: "Stephanie Jackson"},
        {id: 15, name: "Jacob Olson"},
        {id: 16, name: "Megan Ward"},
        {id: 17, name: "Julia Griffin"},
        {id: 18, name: "Madison Alvarez"}
      ]
    }
  }
  render() {
    let rows = this.state.data.map( (person) => {
      return <PersonRow key={person.id} data={person} />
    })
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  )
}

export default App