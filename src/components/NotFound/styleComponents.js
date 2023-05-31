import styled from 'styled-components'

export const NoResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  padding: 10px;
  @media screen and (min-width: 1024px) {
    height: 75vh;
  }
`

export const NoResultsText = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`

export const NoResultsPara = styled.p`
  font-family: 'Roboto';
  color: #94a3b8;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  margin: 0px;
`

export const FilterImage = styled.img`
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 340px;
  }
`
export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
`
export const SlideBarAndNotFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
`
