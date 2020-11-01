import React, { useEffect, useContext } from "react";
import * as Styled from "./styles";
import { LeftOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useRouter } from "next/router";
import { CartContext } from "../../store/Store";

const Header = (props) => {
  const router = useRouter();
  const [nameRoute, setNameRoute] = React.useState(router?.route);
  const [move, setMove] = React.useState(false);
  const [movep, setMovep] = React.useState(false);
  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    setNameRoute(router?.route);
  }, [router]);

  return (
    <>
      <Styled.Container>
        {nameRoute != "/" && <LeftOutlined onClick={() => router.push("/")} />}
        <img src="https://armazemminas.com.br/wp-content/uploads/2020/03/logo-armazem-de-minas-novo.png" />
        {nameRoute != "/checkout" && (
          <div style={{ cursor: "pointer" }} onMouseEnter={() => setMove(true)}>
            <Badge count={cart.length} style={{ backgroundColor: "#108ee9" }}>
              <ShoppingCartOutlined
                onClick={() => cart.length != "" && router.push("/checkout")}
              />
            </Badge>
          </div>
        )}
        {move != false && cart != "" && (
          <>
            <Styled.ContainerMove onMouseLeave={() => setMove(false)}>
              {cart.map((item) => {
                return (
                  <Styled.Content key={item.id}>
                    <img src={item.image} />
                    <p>{item.name}</p>
                  </Styled.Content>
                );
              })}
            </Styled.ContainerMove>
          </>
        )}
      </Styled.Container>
    </>
  );
};

export default Header;
