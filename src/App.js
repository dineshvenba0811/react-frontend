import './App.css';
import React, {useEffect, useState} from "react";
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployeeEntry from './components/CreateEmployeeEntry';
import DisplayEmployeeData from "./components/DisplayEmployeeData";
import EditEmployeeEntry from "./components/EditEmployeeEntry";
import CreateDepartmentEntry from "./components/CreateDepartmentEntry";
import DisplayDepartmentData from "./components/DisplayDepartmentData";
import EditDepartmentEntry from "./components/EditDepartmentEntry";

function App() {
  return (
    <div >
      <header >
          <HeaderComponent/>
      </header>
                <BrowserRouter>
                    <Routes>
                            <Route path="/" element={<CreateEmployeeEntry />} />
                            <Route path="/viewEmployee" element={<DisplayEmployeeData />} />
                            <Route path="/editEmployee/:id" element={<EditEmployeeEntry />} />

                            <Route path="/createDepartment" element={<CreateDepartmentEntry />} />
                            <Route path="/viewDepartment" element={<DisplayDepartmentData />} />
                            <Route path="/editDepartment/:id" element={<EditDepartmentEntry />} />

                    </Routes>
                </BrowserRouter>
    </div>

  );
}

export default App;
