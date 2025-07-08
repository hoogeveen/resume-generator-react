import styled from "@emotion/styled";
import type { ReactNode } from "react";

const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1em;
  font-weight: 600;
`;

export const TitleComponent = ({ children }: { children: ReactNode }) => {
  return <Title>{children}</Title>;
};
