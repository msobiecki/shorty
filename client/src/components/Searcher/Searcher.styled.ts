import styled from "styled-components";

import {
  Box as BoxMUI,
  Container as ContainerMUI,
  Typography as TypographyMUI,
  Button as ButtonMUI,
  FormControl as FormControlMUI,
  InputLabel as InputLabelMUI,
  Input as InputMUI,
  Grid as GridMUI,
  CircularProgress as CircularProgressMUI,
} from "@material-ui/core";

export const Wrapper = styled(BoxMUI)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.form``;

export const Container = styled(ContainerMUI)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormControl = styled(FormControlMUI)``;

export const InputLabel = styled(InputLabelMUI)``;

export const Input = styled(InputMUI)``;

export const Title = styled(TypographyMUI)`
  text-align: center;
  cursor: default;
`;

export const Grid = styled(GridMUI)``;

export const Navigation = styled(BoxMUI)`
  padding: ${({ theme }) => `${theme.spacing(2, 0, 2, 0)}`};
`;

export const Button = styled(ButtonMUI)``;

export const Progress = styled(CircularProgressMUI)``;
