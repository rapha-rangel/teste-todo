import styled from "styled-components"
import { AiOutlineLoading } from "react-icons/ai";

interface LoadingDivProps{
  $size: string
}

const LoadingDiv =styled.div<LoadingDivProps>`
  text-align: center;
  vertical-align: center;
  font-size: ${props=>props.$size ==="large"? props.theme.font.size.title:props=> props.theme.font.size.large};
  color:${props=> props.theme.colors.loading};
  svg{
    animation: spin .8s infinite;
    -webkit-animation: spin .8s infinite;
    @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  }
`
interface LoadingProps{
  size:string
}

export default function Loading({size}: LoadingProps){
  return(
    <LoadingDiv
      $size={size}>
      <AiOutlineLoading/>
    </LoadingDiv>
  )
}