import React from "react";


export const AppLoading = () => {
    return (<>
            <div className={"flex justify-center items-center fixed z-[111111] h-full w-screen bg-black bg-opacity-70 bottom-0 left-0 top-0 right-0"}>
                <span className="common_loader"></span>
            </div>
        </>
    )
}