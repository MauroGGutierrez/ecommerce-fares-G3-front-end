import { Container, Grid } from "@chakra-ui/react";
import React from "react";
import ContentProduct from "../components/contentProduct";
import { contentCards } from "../data/contentCards";

const ProductCards = () => {
  return (
    <Container maxW={"90%"}>
      <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(300px,1fr))"
        gap="1.9rem"
      >
        {contentCards.map((cards) => (
          <ContentProduct
            key={cards.id}
            title={cards.title}
            description={cards.description}
            price={cards.price}
            imgCards={cards.IMG}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductCards;
