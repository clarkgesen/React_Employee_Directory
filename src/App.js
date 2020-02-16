import React from "react";
import SortButton from "./components/SortButton";
import EmployeeTable from "./components/pages/Table";

function App() {
    return (
      <div>
        <SortButton/>
        <EmployeeTable></EmployeeTable>
      </div>
    );
  }

export default App;