import styled from 'styled-components'

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #cbd5e1;
  background-color: #25262c;
  border-radius: 10px;
  width: 250px;
  height: 250px;
  @media screen and (min-width: 768px) {
    height: 80vh;
    min-width: 500px;
  }
`
export const IconContainer = styled.ul`
  display: flex;
`
export const List = styled.li`
  list-style-type: none;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 20px;
  color: ${props => (props.color ? '#faff00' : '#f1f5f9')};
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const Line = styled.hr`
  border: 1px solid #cbd5e1;
  width: 30vw;
`
export const TextField = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  width: 30vw;
  height: 70vh;
  font-size: 22px;
  color: #f8fafc;
  margin-left: 20px;
  font-weight: ${props => (props.activeBold ? 'bold' : 'normal')};
  font-style: ${props => (props.activeItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.activeUnderLine ? 'underline' : 'normal')};
`
