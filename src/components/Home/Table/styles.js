import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin: 40px 0;
width: 100%;

.ant-select {
  width: 40vw;
}

.ant-table-thead {
  display: none;
}

.ant-table.ant-table-bordered > .ant-table-container {
  width: 39vw;
}

.ant-select-dropdown {
  padding: 0;
}

.ant-table-cell {
  color: #000000A6;
}

.ant-table table {
text-align: center;
}

.ant-table {
box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
padding: 0.5vw;
margin: 30px 0;
}

`
export const ContainerPagination = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;

export const Pagination = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const PaginationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #000000A6; 
`;

export const PaginationItem = styled.div`
  margin: 0 10px;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: .1rem;
  color: #000000A6;
  font-Weight: 500;
 
  ${(props) =>
    props.isSelect && {
      background: "#108ee9!important",
      padding: "0 10px",
      fontWeight: 600,
      color: "#fff !important",
      fontSize: "18px",
      borderRadius: "3px"
    }}
`;
