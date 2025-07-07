import styled from 'styled-components'

export const FormOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const FormContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 30px;
  width: 400px;
  max-width: 90vw;
`

export const FormTitle = styled.h2`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 24px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 14px;
  color: #2c3e50;
  margin-bottom: 5px;
  font-weight: 500;
`

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3498db;
  }

  &::placeholder {
    color: #95a5a6;
  }
`

export const RadioGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 5px;
`

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #2c3e50;
  cursor: pointer;

  input[type='radio'] {
    margin: 0;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s;

  ${(props) =>
    props.variant === 'primary'
      ? `
    background-color: #8e44ad;
    color: white;
    &:hover { background-color: #7d3c98; }
  `
      : `
    background-color: #95a5a6;
    color: white;
    &:hover { background-color: #7f8c8d; }
  `}
`
