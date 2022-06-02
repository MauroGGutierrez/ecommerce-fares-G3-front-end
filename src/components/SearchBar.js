import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, FormControl, Input } from "@chakra-ui/react";

const SearchBar = ({ search }) => {
  return (
    <FormControl
      rounded={"lg"}
      fontFamily={("sans-serif", "Rajdhani")}
      fontWeight={"2x1"}
      w="70%"
    >
      <Flex align={"center"} gap={2}>
        <Input
          id="search"
          type="text"
          placeholder="Buscar"
          bg="#adb5bd"
          py={2}
          color="black"
          fontWeight={"semibold"}
          onChange={search}
        />
        {/* <Box
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
        </Box> */}
      </Flex>
    </FormControl>
  );
};

export default SearchBar;
