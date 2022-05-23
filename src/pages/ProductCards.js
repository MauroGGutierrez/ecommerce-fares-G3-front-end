import { Container, Flex, Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import ContentProduct from "../components/contentProduct";
import SearchBar from "../components/SearchBar";
import { contentCards } from "../data/contentCards";
import FilterCategory from "../data/FilterCategory";

const ProductCards = () => {
  const [searchaTerm, setSearchaTerm] = useState("");

  const handleSearch = (e) => {
    setSearchaTerm(e.target.value);
  };

  return (
    <Flex>
      <FilterCategory />
      <Container p="0" m="0 auto" maxW={"90%"} mr={2} ml={4}>
        <SearchBar search={handleSearch} />
        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(250px,1fr))"
          gap="1.4rem"
        >
          {contentCards
            .filter((val) => {
              if (searchaTerm === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchaTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((cards) => (
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
    </Flex>
  );
};

export default ProductCards;
