import React from "react";
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const textFieldTheme = createTheme ({
    palette: {
        primary: {
            main: "#ffffff"
        }}})

        const TextFieldStyle = styled(TextField)(({theme}) => ({
            color:theme.palette.primary.main
        }))

export default function TopNav () {

    return (
        <>
        <div className="p-2 flex flex-row justify-around bg-[var(--primaryColor)] rounded">
          
            <a className="" href="/"><img src="/cobWebLogo.jpeg" height="30px" width="30px"/></a>
            
            
                <ThemeProvider theme={textFieldTheme}>
            <TextFieldStyle
    className="w-[40%]"
id="filled-basic" 
label="Search" 
variant="filled"
  size="small"  
  slotProps={{
    type: "search", 
  }}
/>
</ThemeProvider>
            

            <a className="" href="/userProfile"><img src="" height="30px" width="30px"/></a>
            
        </div>
        </>
    )

}