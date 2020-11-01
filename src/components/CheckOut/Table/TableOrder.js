import React, { useContext, useEffect } from "react";
import * as Styled from "./styles";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { CartContext } from "../../store/Store";

const TableOrder = props => {
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = React.useState();

  function somar() {
    var sum = 0;

    for (var i = 0; i < cart.length; i++) {
      sum += cart[i].price * cart[i].quantity;
    }
    setTotal(sum);
  }

  useEffect(() => {
    somar();
  }, [cart]);

  useEffect(() => {
    if(total === 0){
      props.openModalSuccessOrder(true)
    }
  }, [total])


  return (
    <>
      <Styled.MainContainer>
        {cart.map((obj) => {
          function Acrescentar() {
            for (let i = 0; i < cart.length; i++) {
              if (cart[i].id === obj.id) {
                cart[i].quantity++;
              }
            }
            somar();
          }

          function subtrair() {
            for (let i = 0; i < cart.length; i++) {
              if (cart[i].quantity >= 0 && cart[i].id === obj.id) {
                cart[i].quantity--;
              }
              if (cart[i].quantity <= 0) {
                cart.splice(i, 1);
              }
            }
            somar();
          }

          return (
            <div key={obj.id}>
              <Styled.Table>
                <Styled.Content>
                  <Styled.ContainerIcons>
                    <MinusCircleOutlined onClick={() => subtrair()} />
                    {obj.quantity}
                    <PlusCircleOutlined onClick={() => Acrescentar()} />
                    <p>{obj.name}</p>
                  </Styled.ContainerIcons>
                </Styled.Content>
                <Styled.ContentPrice>
                  <p>R${obj.price}</p>
                </Styled.ContentPrice>
              </Styled.Table>
            </div>
          );
        })}
        <Styled.Table>
          <Styled.Content>
            <p>Total</p>
          </Styled.Content>
          <Styled.ContentPrice>
            <p>R$ {total?.toFixed(2)}</p>
          </Styled.ContentPrice>
        </Styled.Table>
      </Styled.MainContainer>
    </>
  );
};

export default TableOrder;
