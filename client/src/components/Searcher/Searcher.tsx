import React, { useState } from "react";

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
  const [searcherValues, setSearcherValues] = useState<SearcherValuesType>({
    address: "",
    slug: "",
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { address, slug } = searcherValues;
    onSubmit({ address, slug });
    setSearcherValues({ address: "", slug: "" });
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
              <Grid item xs={12} sm={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="search-address">Address</InputLabel>
                  <Input
                    id="search-address"
                    name="address"
                    value={searcherValues.address}
                    onChange={(event) => handleInputChange(event)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="search-slug">Slug</InputLabel>
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
              <Button type="submit">SHORT IT</Button>
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
