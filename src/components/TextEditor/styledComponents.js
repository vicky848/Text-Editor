import styled from 'styled-components'

export const Container = styled.div`
  background-color: #25262c;
  height: 100vh;
  color: #f8fafc;
  padding: 20px;
  text-align: center;
`

export const SmallImage = styled.img`
  height: 300px;
  width: 300px;
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
   background-color: #1b1c22;
  height : 800px
  width: 400px;
  margin-top : 20px;
`

export const CardContainer = styled.div`
  text-align: center;
`

export const Toolbar = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  background-color: #25262c
  height: 400px;
  margin :5px
  
  
 
  `

export const StyledButton = styled.button`
  color: ${({active}) => (active ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  background-color: #1b1c22;
  color: #f8fafc;
  font-size: 16px;
  font-weight: ${({isBold}) => (isBold ? 'bold' : 'normal')};
  font-style: ${({isItalic}) => (isItalic ? 'italic' : 'normal')};
  text-decoration: ${({isUnderline}) => (isUnderline ? 'underline' : 'normal')};
  padding: 10px;
  border: 1px solid #334155;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`
