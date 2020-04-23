import React, {Component} from "react";
import "./style.css";



class Table extends Component {

    sortID = () => {
        console.log("click");
        this.setState((a, b) => a.id - b.id)
    }

    sortName = () => {
        this.setState({sortBy: (a, b) => a.name.localeCompare(b.name)})
    }

    sortStrength = () => {
        this.setState({sortBy: (a, b) => a.strength.localeCompare(b.strength)})
    }

    sortAlias = () => {
        this.setState( {sortBy: (a, b) => a.hero.localeCompare(b.hero)})
    }

     state =  {
        sortBy: (a, b) => a.id - b.id
    };
    
 render(){
     const {data} = this.props;
     return (
        <div>
<br></br>;
<br></br>;
<table className = "inactiveTab">
    <thead>
        <tr>
            <th onClick ={() => this.setState({sortBy: (a, b) => a.id - b.id })}>Hero I.D.</th>
            <th onClick ={() => this.setState( {sortBy: (a, b) => a.hero.localeCompare(b.hero)})}>Alias</th>
            <th onClick ={() => this.setState( {sortBy: (a, b) => a.name.localeCompare(b.name)})}>Name</th>
            <th onClick ={() => this.setState( {sortBy: (a, b) => a.strength.localeCompare(b.strength)})}>Strength</th>
            <th className ="btnCell">Send to Mission</th>
        </tr>
    </thead>
    <tbody>
        {[...data].filter(employee => employee.active === false).sort(this.state.sortBy).map(employee => (
         <tr key = {employee.id} id ={employee.id}>
         <td>{employee.id}</td>
         <td>{employee.hero}</td>
         <td>{employee.name}</td>
         <td>{employee.strength}</td>
         <td className= "btnCell">
             <button 
                 type = "button" 
                 className = "BTN" 
                 id = {employee.id}
                 onClick ={() => this.props.Activate(employee.id)}
 
             >Activate Mission</button> 
         </td>
         </tr>
          ))}
    </tbody>
                   </table>
            </div>
     )
 }
}
export default Table;
