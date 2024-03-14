import {Header} from "../../atoms/headerElement";
import { Sidebar } from "../../molecules/Sidebar";


export function Main() {


    return(
        <main className="grid grid-cols-12 gap-4">
            <Sidebar className="col-span-2" />
            <Header className="col-span-10" />
        </main>
    )
}