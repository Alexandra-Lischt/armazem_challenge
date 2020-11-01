import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
padding: 15px 0;
box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
z-index: -1;

.anticon svg {
  width: 24px;
  height: 24px;
  position: relative;
}

p {
  margin: 0;
}

img {
  width: 10vw;
}
`

export const ContainerMove = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 8px 10px;
max-height: 15vw;
width: 22vw;
position: absolute;
background: #fff;
box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.2);
overflow-y: scroll;
top: 6%;
right: 1%;
z-index: 999999;
`

export const Content = styled.div`
display: flex;
width:100%;
align-items: center;
justify-content: flex-start;
padding: 4px;

img {
  width: 6vw;
  height: auto;

}

p {
  font-size: 13px;
  padding-left: 8px;
}
`