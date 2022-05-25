import { Container, Flex, Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import debounce from "lodash.debounce";
import ContentProduct from "../components/contentProduct";
import SearchBar from "../components/SearchBar";
import { contentCards } from "../data/contentCards";
import FilterCategory from "../data/FilterCategory";

const ProductCards = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearch = (e) => setSearchTerm(e?.target?.value);

  const debouncedSearch = debounce(updateSearch, 1000);

  return (
    <Flex>
      <FilterCategory />
      <Container p="0" m="0 auto" maxW={"90%"} mr={2} ml={4}>
        <SearchBar search={debouncedSearch} />
        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(250px,1fr))"
          gap="1.4rem"
        >
          {contentCards
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.title
                  .toLowerCase()
                  .includes(searchTerm.toString().toLowerCase())
              ) {
                return val;
              }
              return false;
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
