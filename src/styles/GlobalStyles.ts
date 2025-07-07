import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  input {
    outline: none;
  }
`

export const Container = styled.div`
  display: flex;
  height: 100vh;
`

export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`
