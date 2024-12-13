import { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";

interface LayoutProps{
  children: ReactNode
}

const Theme ={
  font:{
    family:"Poppins",
    size:{
      small:"0.6rem",
      smallMedium: "0.8rem",
      medium: "1rem",
      large:"1.2rem",
      xLarge:"1.6rem",
      title: "3rem"
    },
    weight:{
      extralight:"200",
      light: "300",
      normal:"400",
      medium:"500",
      semibold:"600",
      bold:"700",
      extrabold:"800"
    }
  },
  colors:{
    border:["#494a4b","#5c8fe7", "#8C48DE", "#F2EE6A","#d132d1"], 
    buttons:["#6096e7", "#8C48DE","#f14040", "#ee9734"], 
    buttonsBorder:["#2ca5dd", "#7726db","#e71c1c", "#e7871a"], 
    hoverBorder:["#8acae7","#aa7be4", "#da6262" , "#eeb87b"],
    loading:"#5c8fe7"
  },
  largeBreakpoint: "1440px",
  laptopBreakpoint: "888px",
  tabletBreakpoint: "780px",
  headerBreakPoint:"650px"
};




export const Box = styled.div`
  height: 100%;
  color: ${props=> props.theme.colors.text};
`

export function DefaultLayout({children}: LayoutProps){
  return (
    <ThemeProvider theme={Theme}>
      <Box>
        {children}
      </Box>
    </ThemeProvider>
  )
}