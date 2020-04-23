import React, { Component } from 'react';
import './App.css';
import employees from "./employees.json";
import EmployeeCard from "./components/EmployeeCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container"
import Table from "./components/Table"

class App extends Component {
state = {
  employees
}

Activate = id =>  {
   let employees = this.state.employees;
   employees[id-1].active = true;
   console.log(employees[id-1]);
     this.setState({employees});
   }

debrief = id => {
  let employees = this.state.employees;
  employees[id-1].active = false;
  console.log(employees[id-1]);
    this.setState({employees});
}



render(){
  return (
    <Wrapper>
      <Title>Avengers Employee Directory</Title>
      <Container>

        {this.state.employees.filter(employee => employee.active === true).map(employee => (
          <EmployeeCard
            debrief = {this.debrief} 
            id ={employee.id}
            key = {employee.id}
            hero = {employee.hero}
            name = {employee.name}
            image = {employee.image}
            strength = {employee.strength}
          />
        ))}
      </Container>
      <Table data ={this.state.employees} Activate= {this.Activate}/>
    </Wrapper>
  )
}

}

export default App;
