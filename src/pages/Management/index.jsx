import React from "react";
import { Main } from "../../components/Main";



export function Management(){
  const ManagementTab = React.lazy(() => import("../../components/ManagementTab/index"));

    return(
        <>
        <Main>
          <React.Suspense fallback={<div>Loading...</div>}>
            <ManagementTab/>
          </React.Suspense>
          </Main>
        </>

    )
}