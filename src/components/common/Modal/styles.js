import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 20vh;

  .anticon svg {
    width: 50px;
    height: 50px;
  }
`

export const ContainerButtons = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
padding: 0 5%; 

`