import { Container, Grid } from "@chakra-ui/react";
import React from "react";
import ContentProduct from "../components/contentProduct";
import { contentCards } from "../data/contentCards";

const ProductCards = ({ DataSearch }) => {
  return (
    <Container p="0" m="0 auto" maxW={"90%"}>
      <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(250px,1fr))"
        gap="2.9rem"
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
