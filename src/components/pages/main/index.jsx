import Header from "../../atoms/headerElement";
import { Sidebar } from "../../molecules/Sidebar";
import { Outlet } from "react-router-dom";


export function Main() {


    return(
        <main className="flex flex-row">
            <Sidebar className='col-span-2'/>
            <Header className='col-span-10'/>
            <Outlet />
        </main>
    )
};