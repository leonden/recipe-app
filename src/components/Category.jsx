import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import React from "react";

function Category() {
  return (
    <List>
      <NavLink to={"/cuisine/Italian"}>
        <FaPizzaSlice>
          <h4>Italian</h4>
        </FaPizzaSlice>
      </NavLink>
      <NavLink to={"/cuisine/American"}>
        <FaHamburger>
          <h4>American</h4>
        </FaHamburger>
      </NavLink>
      <NavLink to={"/cuisine/Thai"}>
        <GiNoodles>
          <h4>Thai</h4>
        </GiNoodles>
      </NavLink>
      <NavLink to={"/cuisine/Japanese"}>
        <GiChopsticks>
          <h4>Italian</h4>
        </GiChopsticks>
      </NavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em 0;
`;

export default Category;
