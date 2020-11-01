import React, { useState, useEffect, useContext, useCallback } from "react";
import { Select, Table } from "antd";
import api from "../../../services/api";
import { ButtonCommon } from "../../common/Button";
import * as Styled from "./styles";
import { CartContext } from "../../store/Store";
const { Option } = Select;

const TableProducts = () => {
  const [cart, setCart] = useContext(CartContext);
  const [state, setState] = useState([]);
  const [categorySelected, setCategorySelected] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [pages, setPages] = useState([]);
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  async function productsPagination(product_id) {
    const response = await api.get(
      `/products?_page=${currentPage}&_limit=${limit}&category_id=${product_id}`
    );
    setTotal(response.headers["x-total-count"]);

    const totalPages = Math.ceil(total / limit);
    const arrayPages = [];

    for (let i = 1; i <= totalPages; i++) {
      arrayPages.push(i);
    }
    setPages(arrayPages);
    setAllProducts(response.data);
  }

  const listCategories = () => {
    api
      .get(`/categories`)
      .then((response) => response.data)
      .then((data) => {
        setAllCategories(data);
      })
      .catch((error) => error);
  };

  useEffect(() => {
    if (categorySelected != null) {
      productsPagination(categorySelected);
    }
  }, [categorySelected, currentPage, limit, total]);

  useEffect(() => {
    listCategories();
  }, []);

  const limits = useCallback((e) => {
    setLimit(e.target.value);
    setCurrentPage(1);
  }, []);

  function checkQuantityAndCartPush(res) {
    if (state.includes(res.name)) {
      state.splice(state.indexOf(res.name), 1);
    } else {
      state.push(res.name);
    }

    let index = cart.findIndex((x) => x.id == res.id);

    if (index === -1) {
      cart.push(res);
      setCart([...cart]);
    } else {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === res.id) {
          cart[i].quantity++;
        }
      }
    }
  }

  const columns = [
    {
      render: (res) => <>{res.name}</>,
    },
    {
      render: (res) => (
        <>
          <ButtonCommon
            title="adicionar no carrinho"
            onClick={() => checkQuantityAndCartPush(res)}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <Styled.Container>
        <Select
          placeholder="Selecione a categoria"
          onChange={(e) => setCategorySelected(e)}
          value={categorySelected}
        >
          {allCategories.map((categories) => (
            <Option key={categories.id} value={categories.id}>
              {categories.name}
            </Option>
          ))}
        </Select>
        <Table
          rowKey={(record) => record.id}
          bordered
          columns={columns}
          dataSource={allProducts}
          pagination={false}
          locale={{ emptyText: "Nenhuma categoria selecionada" }}
        />
        <Styled.ContainerPagination>
          <Styled.PaginationButton>
            {pages != "" && (
              <select
                style={{ margin: " 0 10px", padding: " 4px " }}
                onChange={limits}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            )}
            {currentPage > 1 && (
              <Styled.PaginationItem
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Anterior
              </Styled.PaginationItem>
            )}
            {pages.map((page) => (
              <Styled.PaginationItem
                key={page}
                isSelect={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Styled.PaginationItem>
            ))}
            {currentPage < pages?.length && (
              <Styled.PaginationItem
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Próximo
              </Styled.PaginationItem>
            )}
          </Styled.PaginationButton>
        </Styled.ContainerPagination>
      </Styled.Container>
    </>
  );
};

export default TableProducts;
