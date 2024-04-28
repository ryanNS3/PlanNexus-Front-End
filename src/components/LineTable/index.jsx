import avatar from "../../assets/avatar.jpg";

import { useEffect, useContext } from "react";
import { EmployeeContext } from "../../context/Employee";

export function LineTable() {
  const { GetAllEmployees, EmployeeData } = useContext(EmployeeContext);

  useEffect(() => {
    GetAllEmployees();

  }, []);

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
              <div className="flex gap-1 cursor-pointer p-2 hover:bg-cinza-100 rounded">
                <div className="rounded-full bg-cinza-400 height w-2 h-2"></div>
                <div className="rounded-full bg-cinza-400 height w-2 h-2"></div>
                <div className="rounded-full bg-cinza-400 height w-2 h-2"></div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  } else return null;
}
