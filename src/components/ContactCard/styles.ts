import styled from 'styled-components'

export const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`

export const ContactName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 5px;
`

export const ContactCategory = styled.p`
  font-size: 12px;
  color: #7f8c8d;
  text-transform: capitalize;
  margin-bottom: 10px;
`

export const ContactInfo = styled.p`
  font-size: 14px;
  color: #34495e;
  margin-bottom: 5px;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`

export const ActionButton = styled.button<{
  variant?: 'edit' | 'delete' | 'favorite'
}>`
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s;

  ${(props) => {
    switch (props.variant) {
      case 'edit':
        return `
          background-color: #3498db;
          color: white;
          &:hover { background-color: #2980b9; }
        `
      case 'delete':
        return `
          background-color: #e74c3c;
          color: white;
          &:hover { background-color: #c0392b; }
        `
      case 'favorite':
        return `
          background-color: transparent;
          color: #f39c12;
          font-size: 18px;
          &:hover { background-color: #f8f9fa; }
        `
      default:
        return `
          background-color: #95a5a6;
          color: white;
          &:hover { background-color: #7f8c8d; }
        `
    }
  }}
`

export const FavoriteIcon = styled.span<{ isFavorite: boolean }>`
  color: ${(props) => (props.isFavorite ? '#f39c12' : '#bdc3c7')};
  font-size: 18px;
`
