import { ChangeEvent } from "react"
import styled from "styled-components"

const InputTextLabel= styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 500;
  color: #FFFFFF;
  width: 300px;
  p{
    margin-bottom: 5px;
  }

`
const Input= styled.input`
  max-width: 100%;
  border: none;
  outline: none;
  padding: 12px 10px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 0.8rem;
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  &::placeholder{
    font-size: 0.8rem;
    color: #a09f9f;
  }
`

interface InputTextProps{
  title: string
  placeholderText: string
  handleChange:(e:ChangeEvent<HTMLInputElement>)=> void
  value: string
  name: string
}

export default function InputText ({title, handleChange, placeholderText, value, name}: InputTextProps){
  return(
    <InputTextLabel>
      <p>{title}</p>
      <Input 
        type="text" 
        placeholder={placeholderText} 
        name={name}
        required
        value={value}
        onChange={handleChange}/>
    </InputTextLabel>
  )
}