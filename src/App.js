import React from "react";
import SortButton from "./components/SortButton";
import EmployeeTable from "./components/pages/Table";
import Header from "./components/Header"

function App() {
    return (
      <div>
        <Header></Header>
        <EmployeeTable></EmployeeTable>
      </div>
    );
  }

export default App;