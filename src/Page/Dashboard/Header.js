import React from "react";

export default function Header({ setIsAdding }) {
  return (
    <div>
      <h1>Employee Management System</h1>
      <div>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Employee
        </button>
      </div>
    </div>
  );
}
