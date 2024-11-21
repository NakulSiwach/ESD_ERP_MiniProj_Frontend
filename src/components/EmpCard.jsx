import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmpCard = ({ employee, onModifySalary }) => {
  const { id, name, email, salary, profilePicture } = employee;

  return (
    <div className="card shadow-sm m-3" style={{ width: '18rem' }}>
      <img
        src={profilePicture || 'https://via.placeholder.com/150'}
        className="card-img-top"
        alt={`${name}'s profile`}
        style={{ objectFit: 'cover', height: '200px' }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>ID:</strong> {id} <br />
          <strong>Email:</strong> {email} <br />
          <strong>Salary:</strong> ${salary.toLocaleString()}
        </p>
        <button
          className="btn btn-secondary"
          onClick={() => onModifySalary(employee)}
        >
          Modify Salary
        </button>
      </div>
    </div>
  );
};

export default EmpCard;
