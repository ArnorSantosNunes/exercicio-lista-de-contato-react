import styled from 'styled-components'

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px 0;
`

export const EmptyState = styled.div`
  text-align: center;
  color: #7f8c8d;
  font-size: 18px;
  margin-top: 50px;
`
