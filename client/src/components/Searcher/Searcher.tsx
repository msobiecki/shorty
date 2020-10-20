import React, { useState } from "react";
import { useIntl } from "react-intl";

import {
  Wrapper,
  Container,
  Title,
  Form,
  FormControl,
  InputLabel,
  Input,
  Button,
  Grid,
  Navigation,
  Progress,
} from "./Searcher.styled";

type SearcherProps = {
  loading: boolean;
  title: string;
  onSubmit: (props: SearcherValuesType) => void;
};

type SearcherValuesType = { address?: string; slug?: string };

const Searcher = ({ loading = false, title, onSubmit }: SearcherProps) => {
  const intl = useIntl();
  const [searcherValues, setSearcherValues] = useState<SearcherValuesType>({
    slug: "",
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { slug } = searcherValues;
    onSubmit({ slug });
    setSearcherValues({ slug: "" });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    event.preventDefault();
    setSearcherValues({
      ...searcherValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Wrapper>
      {!loading ? (
        <Form onSubmit={(event) => handleFormSubmit(event)}>
          <Container>
            <Title variant="h1">{title}</Title>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="search-slug">
                    {intl.formatMessage({ id: "INPUT_SLUG" })}
                  </InputLabel>
                  <Input
                    id="search-slug"
                    name="slug"
                    value={searcherValues.slug}
                    onChange={(event) => handleInputChange(event)}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Navigation>
              <Button type="submit">
                {intl.formatMessage({ id: "BUTTON_SEARCH" })}
              </Button>
            </Navigation>
          </Container>
        </Form>
      ) : (
        <Progress />
      )}
    </Wrapper>
  );
};

export default Searcher;
