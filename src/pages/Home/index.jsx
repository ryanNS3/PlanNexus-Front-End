import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar"


export function Home() {

    return (
        <main className="grid grid-cols-12 gap-5 mx-8 max-w-[90rem]">
            <Sidebar className="col-span-2" />
            <Header className="col-span-10" />
            <Outlet />
        </main>
    )
}