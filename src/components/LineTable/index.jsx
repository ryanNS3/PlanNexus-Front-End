import avatar from "../../assets/avatar.jpg";
import { UniqueModal } from "../Modal";
import { useEffect, useContext, useState } from "react";
import { EmployeeContext } from "../../context/Employee";
import { EmployeeDetails } from "../EmployeeDetails";

export function LineTable() {
  const { GetAllEmployees, EmployeeData, updatedEmployee } = useContext(EmployeeContext);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    GetAllEmployees();
  }, [updatedEmployee]);

  if (EmployeeData && EmployeeData.length > 0) {
    return (
      <>
        {EmployeeData.map((employee, key) => (
          <div
            key={key}
            className="rounded-lg w-full py-[0.875rem] pr-9 pl-4 border-2 border-cinza-100 bg-white flex justify-between"
          >
            <div className="flex items-center justify-center gap-[0.781rem]">
              <img
                src={avatar}
                className="rounded-full"
                height={36}
                width={36}
              />
              <p className="text-xs tracking-[0.01em] ">{employee.nome}</p>
            </div>
            <div className="flex items-center justify-center gap-20">
              <div className="bg-[#64B140] rounded px-4 py-2">
                <p className="text-[#fff]">Sim</p>
              </div>

              <UniqueModal setSelectedId={setSelectedEmployee} SelectedId={employee.NIF}>
                 <EmployeeDetails employee={employee} />
              </UniqueModal>
            </div>
          </div>
        ))}
      </>
    );
  } else return null;
}
