import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  padding: ${({ theme }) => `${theme.spacing(0, 1, 0, 1)}`};
  cursor: default;
`;
