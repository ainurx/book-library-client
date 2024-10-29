import SharedLayout from "../shared_layout/layout";

function layout({children}){
    return(
        <>
            {/* <SharedLayout> */}
                {children}
            {/* </SharedLayout> */}
        </>
    )
}

export default layout