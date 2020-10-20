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
} from "./Creator.styled";

type CreatorProps = {
  loading: boolean;
  title: string;
  onSubmit: (props: CreatorValuesType) => void;
};

type CreatorValuesType = { address?: string; slug?: string };

const Creator = ({ loading = false, title, onSubmit }: CreatorProps) => {
  const [creatorValues, setCreatorValues] = useState<CreatorValuesType>({
    address: "",
    slug: "",
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { address, slug } = creatorValues;
    onSubmit({ address, slug });
    setCreatorValues({ address: "", slug: "" });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    event.preventDefault();
    setCreatorValues({
      ...creatorValues,
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
                  <InputLabel htmlFor="create-address">Address</InputLabel>
                  <Input
                    id="create-address"
                    name="address"
                    value={creatorValues.address}
                    onChange={(event) => handleInputChange(event)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="create-slug">Slug</InputLabel>
                  <Input
                    id="create-slug"
                    name="slug"
                    value={creatorValues.slug}
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

export default Creator;
