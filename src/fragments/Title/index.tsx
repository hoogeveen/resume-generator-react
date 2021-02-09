import React from "react";
import styled from "styled-components";

const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1em;
  font-weight: 600;
`;

export default ({ children }) => {
  return <Title>{children}</Title>;
};
