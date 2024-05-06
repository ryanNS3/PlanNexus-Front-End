import { useEffect, useState, useContext } from 'react';

export function EmployeeDetails({ employee }) {

        return (
            <div>
                <h2>{employee.nome}</h2>
                <p>Outras informações sobre o funcionário...</p>
            </div>
        );
    
}
