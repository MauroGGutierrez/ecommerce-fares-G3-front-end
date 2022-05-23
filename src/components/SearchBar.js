import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, FormControl, Input } from "@chakra-ui/react";
import React from "react";

const SearchBar = ({ search }) => {
  return (
    <FormControl
      w={"27rem"}
      rounded={"lg"}
      fontFamily={("sans-serif", "Rajdhani")}
      fontWeight={"2x1"}
    >
      <Flex align={"center"} gap={2}>
        <Input
          id="search"
          type="text"
          placeholder="Buscar"
          bg="#252627"
          py={2}
          color="white"
          onChange={search}
        />
        <Box
          cursor={"pointer"}
          bg={"#212529"}
          p={"6px 10px 6px 10px"}
          rounded={"3xl"}
          border={"3px solid #6c757d"}
          _hover={{
            transition: "all 200ms ease",
            transform: "scale(1.07)",
            bg: "#6c757d",
          }}
        >
          <SearchIcon color={"white"} fontSize="20px" fontWeight={"bold"} />
        </Box>
      </Flex>
    </FormControl>
  );
};

export default SearchBar;
