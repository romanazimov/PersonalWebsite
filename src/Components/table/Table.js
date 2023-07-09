// import TableHeader from "./TableHeader"
// import TableBody from "./TableBody"
import { Component } from "react"

class Table extends Component {
    render() {
      const { characterData } = this.props
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {characterData.map((data,i) => (
              <tr key={i}>
                <td key={data.name}>{data.name}</td>
                <td key={data.job}>{data.job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    }
}

export default Table;