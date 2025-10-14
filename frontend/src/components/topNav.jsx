import React from "react";
import TextField from '@mui/material/TextField';

export default function TopNav () {

    return (
        <>
        <div className="p-4 flex flex-row justify-around bg-[var(--primaryColor)] rounded">
          
            <a className="" href="/"><img src="/cobWebLogo.jpeg" height="50px" width="50px"/></a>
            
            <div>
            <TextField id="outlined-basic" label="Search" variant="outlined" color="brand"/>
            </div>

            <a className="" href="/userProfile"><img src="" height="30px" width="30px"/></a>
            
        </div>
        </>
    )

}