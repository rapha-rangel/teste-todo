import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";


interface ChoiseRatingStarsProps {
  $isSelected: boolean; 
  $hoverActive: boolean; 
}

const ChoiseRatingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  width: 300px;
  background-color: white;
`

const ChoiseRatingList = styled.ul`
  display: flex;
  padding: 10px;
  gap: 10px;
  z-index: 10;
`

const ChoiseRatingStars = styled.li<ChoiseRatingStarsProps>`
  display: flex;
  padding: 10px;
  gap: 10px;
  justify-content: center;
  font-size: 1.6rem;
  cursor:pointer;
  svg{
    transition:all .2s ease-in-out;
    fill: ${({ $isSelected, $hoverActive }) =>
      $hoverActive || $isSelected ? "#FFD700" : "#91908d"};
  }
  &:hover ~ & svg {
    fill: ${({ $hoverActive }) => ($hoverActive ? "#FFD700" : "#91908d")};
  }
  &:hover svg {
    fill: #eee67c;
  }
`

interface ChoiseRatingProps{
  handleChange:(value: number, name: string) => void
  name: string
  value: number
 }
 

export default function ChoiseRating({name, handleChange, value}: ChoiseRatingProps) {
  const [stars, setStarts] = useState(value? value:1);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const choiseRating=(index: number)=>{
    setStarts(index + 1);
    handleChange(index, name);
  }
  return (

    <ChoiseRatingDiv>
      <ChoiseRatingList >
        {Array.from({ length: 5 }).map((_, index) => (
          <ChoiseRatingStars key={index}
            $isSelected={index < stars? true:false} 
            $hoverActive={hoverIndex !== null && index <= hoverIndex}
            onClick={() => choiseRating(index)}
            onMouseEnter={() => setHoverIndex(index)} 
            onMouseLeave={() => setHoverIndex(null)}>
            <FaStar/>
          </ChoiseRatingStars>
        ))}
      </ChoiseRatingList>
    </ChoiseRatingDiv>
  );
}