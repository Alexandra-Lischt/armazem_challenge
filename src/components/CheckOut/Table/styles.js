import styled from "styled-components"

export const ContainerTable = styled.div`
width: 40vw;

p {
  font-weight: 600;
}
`
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
margin: 40px 0;
width: 100%;

.anticon svg {
  width: 50px;
  height: auto;
}

h4 {
  margin: 0;
  font-weight: 600;
}

p {
  font-size: 13px;
}
`

export const BusinessName = styled.div`
display: flex;
align-items: flex-start;
justify-content:flex-start;
padding: 20px 0;
width: 40vw;
`

export const ContainerIcons = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;

.anticon svg {
  width: 24px;
  height: auto;
  margin: 0 12px;
}
`

export const Table = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
padding: 20px 0;
width: 100%;
`

export const MainContainer = styled.div`
box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
padding: 10px;
`

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;

p {
  margin: 0 12px;
  font-size: 14px;
}
`

export const ContentPrice = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
width: 100%;

p {
  margin: 0 12px;
  font-size: 14px;
}
`

export const ContainerButton = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
padding: 20px 0;
width: 100%;
`