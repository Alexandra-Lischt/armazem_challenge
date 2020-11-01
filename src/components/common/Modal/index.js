import React, { useContext, useEffect } from 'react';
import { CheckCircleTwoTone, InfoCircleTwoTone } from '@ant-design/icons';
import { ButtonCommon } from "../Button"
import * as Styled from './styles';
import { CartContext } from "../../store/Store"
import { useRouter } from "next/router";

const ModalSuccessOrder = props => {
  const router = useRouter();

  const [cart, setCart] = useContext(CartContext)

  const handleCancel = () => {
    setCart([])
    props.onCancel()
    router.push("/")
  }

  return (
    <>
     {
       cart != "" ? (
        <Styled.Container>
        <CheckCircleTwoTone twoToneColor="#52c41a" />
        <h2>Pedido realizado com sucesso!</h2>
        <ButtonCommon title="Fechar" onClick={() => handleCancel()}/>
      </Styled.Container>
       ) : (
        <Styled.Container>
          <InfoCircleTwoTone />
          <h2>Deseja voltar a página inicial ?</h2>
          <Styled.ContainerButtons>
        <ButtonCommon title="Fechar" onClick={() => props.onCancel()}/>
        <ButtonCommon title="Voltar" onClick={() => router.push("/")}/>
          </Styled.ContainerButtons>
        </Styled.Container>
       )
     }
    </>
  )
}

export default ModalSuccessOrder;