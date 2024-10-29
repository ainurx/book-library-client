import React from "react";
import SharedLayout from "../shared_layout/layout";

function Layout({children}: {children: React.ReactNode}){
    return(
        <>
            {children}
        </>
        // <SharedLayout>
        // </SharedLayout>
    )
}

export default Layout