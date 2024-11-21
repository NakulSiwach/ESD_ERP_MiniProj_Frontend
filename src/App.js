import React, { useState } from 'react';
import './App.css';
import EmpCard from './components/EmpCard';
import NavBar from './components/Navbar';
import ModifySalaryModal from './modals/ModifySalaryModal';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      salary: 50000,
      profilePicture: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      salary: 60000,
      profilePicture: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      salary: 55000,
      profilePicture: 'https://via.placeholder.com/150',
    },
  ];

  const [selectedEmployee, setSelectedEmployee] = useState(null); // Employee selected for modification
  const [isModalOpen, setModalOpen] = useState(false); // Modal visibility state

  const handleModifySalary = (employee) => {
    setSelectedEmployee(employee);
    setModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="container">
      <NavBar />
      <div className="row">
        {employees.map((employee) => (
          <div className="col-md-4" key={employee.id}>
            <EmpCard
              employee={employee}
              onModifySalary={handleModifySalary} // Pass the handler
            />
          </div>
        ))}
      </div>
      {isModalOpen && (
        <ModifySalaryModal
          employee={selectedEmployee}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;
