import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';

let directoryInfo = [
  {
    firstName: "Jaxson",
    lastName: "Quintana",
    department: "Architecture",
    title: "Head Architect",
    yearsEmployed: "20"
  },
  {
    firstName: "Kareena",
    lastName: "Connolly",
    department: "Architecture",
    title: "Junior Architect",
    yearsEmployed: 3,
  },
  {
    firstName: "Leyla",
    lastName: "Holland",
    department: "Architecture",
    title: "Junior Architect",
    yearsEmployed: 4,
  },
  {
    firstName: "Simrah",
    lastName: "James",
    department: "Software Development",
    title: "Senior Developer",
    yearsEmployed: 15,
  },
  {
    firstName: "Audrey",
    lastName: "Corona",
    department: "Software Development",
    title: "Junior Developer",
    yearsEmployed: 3,
  },
  {
    firstName: "Tomos",
    lastName: "Fuentes",
    department: "Software Development",
    title: "Junior Developer",
    yearsEmployed: 4,
  },
  {
    firstName: "Toby",
    lastName: "Flenderson",
    department: "Human Resources",
    title: "Human Resources Specialist",
    yearsEmployed: 15,
  },
  {
    firstName: "Oscar",
    lastName: "Martinez",
    department: "Accounting",
    title: "Senior Accountant",
    yearsEmployed: 13,
  },
  {
    firstName: "Kevin",
    lastName: "Malone",
    department: "Accounting",
    title: "Junior Accountant",
    yearsEmployed: 10,
  }, {
    firstName: "Angela",
    lastName: "Martin",
    department: "Accounting",
    title: "Head Acountant",
    yearsEmployed: 16,
  }


]

class EmployeeTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: [
        {
          firstName: "Jaxson",
          lastName: "Quintana",
          department: "Architecture",
          title: "Head Architect",
          yearsEmployed: "20"
        },
        {
          firstName: "Kareena",
          lastName: "Connolly",
          department: "Architecture",
          title: "Junior Architect",
          yearsEmployed: 3,
        },
        {
          firstName: "Leyla",
          lastName: "Holland",
          department: "Architecture",
          title: "Junior Architect",
          yearsEmployed: 4,
        },
        {
          firstName: "Simrah",
          lastName: "James",
          department: "Software Development",
          title: "Senior Developer",
          yearsEmployed: 15,
        },
        {
          firstName: "Audrey",
          lastName: "Corona",
          department: "Software Development",
          title: "Junior Developer",
          yearsEmployed: 3,
        },
        {
          firstName: "Tomos",
          lastName: "Fuentes",
          department: "Software Development",
          title: "Junior Developer",
          yearsEmployed: 4,
        },
        {
          firstName: "Toby",
          lastName: "Flenderson",
          department: "Human Resources",
          title: "Human Resources Specialist",
          yearsEmployed: 15,
        },
        {
          firstName: "Oscar",
          lastName: "Martinez",
          department: "Accounting",
          title: "Senior Accountant",
          yearsEmployed: 13,
        },
        {
          firstName: "Kevin",
          lastName: "Malone",
          department: "Accounting",
          title: "Junior Accountant",
          yearsEmployed: 10,
        }, {
          firstName: "Angela",
          lastName: "Martin",
          department: "Accounting",
          title: "Head Acountant",
          yearsEmployed: 16,
        }


      ]
    }
  }

  renderTableData() {
    return this.state.employees.map((employee, index) => {
      const { firstName, lastName, department, title, yearsEmployed } = employee //destructuring
      return (
        <tr key={firstName}>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{department}</td>
          <td>{title}</td>
          <td>{yearsEmployed}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <table id='employees' striped bordered hover>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}
export default EmployeeTable;