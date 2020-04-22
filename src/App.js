import React, { Component } from 'react';
import './App.css';
import employees from "./employees.json";
import EmployeeCard from "./components/EmployeeCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container"

class App extends Component {
state = {
  employees
}
render(){
  return (
    <Wrapper>
      <Title>Avengers Employee Directory</Title>
      <Container>

        {this.state.employees.map(employee => (
          <EmployeeCard 
          id ={employee.id}
          key = {employee.id}
          hero = {employee.hero}
          name = {employee.name}
          image = {employee.image}
          strength = {employee.strength}
          />
        ))}
      </Container>
    </Wrapper>
  )
}

}

export default App;
