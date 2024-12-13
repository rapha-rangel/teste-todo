import { ChangeEvent, useEffect, useState } from "react"
import styled from "styled-components"

const InputTextLabel= styled.label`
  display: flex;
  flex-direction: column;
  width: 300px;
  h4{
    font-size: 1.2rem;
    font-weight: 500;
    color: #FFFFFF;
    margin-bottom: 5px;
  }

`
const Input= styled.input`
  max-width: 100%;
  border: none;
  outline: none;
  padding: 8px 10px;
  border-radius: 5px;
  background-color: white;
  font-weight: 500;
  font-size: 1.2rem;
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
`


interface InputDateProps{
  title: string
  handleChange:(e:ChangeEvent<HTMLInputElement>)=> void
  value: string
  name: string
}

export default function InputDate({title, handleChange, name, value}: InputDateProps){
  const [limitDateCalendar, setLimiteDateCalendar] = useState("");

  useEffect(()=>{
    const today = new Date();
    const year =today.getFullYear().toString();
    const month =(today.getMonth()+1).toString();
    const day = today.getDate().toString();
    setLimiteDateCalendar(`${year}-${month}-${day}`);
  }, [])

  return(
    <InputTextLabel>
      <h4>{title}</h4>
      <Input 
        type="date" 
        required
        min={limitDateCalendar}  
        onChange={handleChange}
        name={name}
        value={value}/>
    </InputTextLabel>
  )
}