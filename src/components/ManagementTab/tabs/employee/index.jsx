import React from 'react'
import { LineTable, TemplateView } from '../../../ViewTemplate'
import { EmployeeForm } from '../../../Form/employee'
import { EmployeeContext } from '../../../../context/Employee'
import { EmployeeDetails } from '../../../EmployeeDetails'

export default function TabEmployee() {
    const gridHeaderData = ['Status', 'Cargo']
    const { GetAllEmployees } = React.useContext(EmployeeContext)
    const { resAllEmployees, resProductLoading, resProductError } = GetAllEmployees()
    return (
        <TemplateView
            name="funcionário"
            formModal={<EmployeeForm />}
            header_data={gridHeaderData}
            loading={resProductLoading}
            error={resProductError}
        >
            {resAllEmployees &&
                resAllEmployees.json.response.map((employee) => {
                    return (
                        <LineTable
                            name={employee.nome}
                            photo={employee.foto}
                            grid={`67px 1fr repeat(${gridHeaderData.length + 1}, 100px)`}
                            typeModal='UniqueModal'
                            detailsModal={<EmployeeDetails employee={employee}/>}
                        
                        >
                            <div
                                className={`bg-[${
                                    employee.status ? "#64B140" : "#666666"
                                }] rounded px-4 py-2`}
                                >
                                <p className="text-preto">{employee.status ? "Ativo" : "Inativo"}</p>
                            </div>
                            <div className="bg-[#4B5645] rounded px-4 py-2">
                                <p className="text-[#fff]">{employee.nome_cargo}</p>
                            </div>

                        </LineTable>
                        
                    )
                    
                })
            
            }
        </TemplateView>
    )
}
