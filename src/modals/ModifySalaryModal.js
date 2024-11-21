import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModifySalaryModal = ({ employee, closeModal }) => {
  // Always initialize `newSalary` with a safe fallback
  const [newSalary, setNewSalary] = useState(employee?.salary );

  const handleSubmit = () => {
    console.log(`Updated salary for ${employee?.name}: $${newSalary}`);
    alert(`Updated salary for ${employee?.name} to $${newSalary}`);
    closeModal(); // Close the modal after submission
  };

  if (!employee) {
    // Render nothing if `employee` is not provided
    return null;
  }

  return (
    <div
      className="modal d-flex justify-content-center align-items-center"
      style={{
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modify Salary</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <p>
              <strong>ID:</strong> {employee.id} <br />
              <strong>Name:</strong> {employee.name} <br />
              <strong>Current Salary:</strong> $
              {employee.salary?.toLocaleString() || 'Not Available'}
            </p>
            <div className="mb-3">
              <label htmlFor="newSalary" className="form-label">
                New Salary:
              </label>
              <input
                type="number"
                className="form-control"
                id="newSalary"
                value={newSalary}
                onChange={(e) => setNewSalary(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={closeModal}>
              Go Back
            </button>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifySalaryModal;
