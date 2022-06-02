import { Box, Flex, Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import { connect } from "react-redux";
import debounce from "lodash.debounce";
import ContentProduct from "../components/contentProduct";
import SearchBar from "../components/SearchBar";
import { contentCards } from "../data/contentCards";
import SliderCategories from "../components/SliderCategories";
// import FilterCategory from "../data/FilterCategory";

const ProductCards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const updateSearch = (e) => setSearchTerm(e?.target?.value);
  const debouncedSearch = debounce(updateSearch, 1000);

  return (
    <Flex
    // maxW="90%"
    // m={["0 auto", "0 auto", "unset", "unset"]}
    // p="0"
    // gap="3rem"
    >
      <Box w="200px" flexShrink={0} d={["none", "none", "unset", "unset"]}>
        <SliderCategories />
      </Box>
      <Box
        maxW={["90%", "90%", "unset", "unset"]}
        m={["2rem auto 0", "2rem auto 0", "0px", "0px"]}
        p={["0px 16px", "0px 16px", "2.9rem", "2.9rem"]}
      >
        <Box mb="2rem">
          <SearchBar search={debouncedSearch} />
        </Box>
        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(195px,1fr))"
          gap={["2rem", "2rem", "2rem", "4rem"]}
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
        {/* </Container> */}
      </Box>
    </Flex>
  );
};

export default ProductCards;
