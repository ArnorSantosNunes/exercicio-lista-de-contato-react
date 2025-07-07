import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 20px 0;
`

export const SidebarItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#34495e' : 'transparent')};
  transition: background-color 0.3s;

  &:hover {
    background-color: #34495e;
  }

  span {
    margin-left: 10px;
    font-size: 14px;
  }
`

export const CategoryCount = styled.span`
  margin-left: auto !important;
  background-color: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`

export const NewContactButton = styled.button`
  width: calc(100% - 40px);
  margin: 20px;
  padding: 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`
