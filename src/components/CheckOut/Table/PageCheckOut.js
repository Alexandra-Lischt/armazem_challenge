import React, { useContext, useEffect, useMemo} from "react";
import * as Styled from "./styles";
import CountDown from 'ant-design-pro/lib/CountDown';
import {
  ShoppingOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import { ButtonCommon } from "../../common/Button"
import ModalSuccessOrder from "../../common/Modal"
import { CartContext } from "../../store/Store";
import TableOrder from "./TableOrder"

const PageCheckOut = () => {
  const [openModalSuccessOrder, setOpenModalSuccessOrder] = React.useState(false)
  const [cart, setCart] = useContext(CartContext);
  const [targetTime, setTargetTime]= React.useState(0)
  
  const finish = () => setCart([])
  
  useEffect(() => {
    let targetTime =  new Date().getTime() + 900000
    setTargetTime(targetTime)
  }, [])

  return (
    <>
      <Styled.Container>
        <h2>Finalizar pedido</h2>
        <Styled.BusinessName>
          <ShoppingOutlined />
          <div style={{ padding: "0 15px" }}>
            <h4>Armazém de Minas</h4>
            <CountDown style={{ fontSize: 20 }} target={targetTime} onEnd={finish}/>
          </div>
        </Styled.BusinessName>
        <Styled.ContainerTable>
          <p>Revise os seus itens</p>
         <TableOrder openModalSuccessOrder={(e) => setOpenModalSuccessOrder(e) }/>
          <Styled.ContainerButton>
          <ButtonCommon title="Finalizar compra" onClick={() => setOpenModalSuccessOrder(true)}/>
          </Styled.ContainerButton>
        </Styled.ContainerTable>
      </Styled.Container>
      <Modal
        width="40%"
        visible={openModalSuccessOrder}
        footer={null}
        destroyOnClose
      >
        <ModalSuccessOrder onCancel={() => setOpenModalSuccessOrder(false)} />
      </Modal>
    </>
  );
};

export default PageCheckOut;
