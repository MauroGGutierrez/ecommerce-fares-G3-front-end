import React from "react";
import { Box, Container, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { IoTrashOutline } from "react-icons/io5";
import { contentCards } from "../data/contentCards";
const Cart = () => {
  return (
    <Container maxW="90%" m="0 auto" p="0px">
      <Flex
        flexDirection={["column", "column", "unset", "unset"]}
        gap="2rem"
        mt="2rem"
      >
        <Flex flexDirection="column" gap="1rem" w="100%">
          <Heading>Mi Carrito (5 items)</Heading>
          {contentCards.map((content) => (
            <Flex
              alignItems="center"
              flexDirection={["column", "column", "row", "row"]}
              justifyContent="space-between"
              gap="2rem"
              p="13px"
              borderBottom="1px solid gray"
            >
              <Flex alignItems="center" gap={2} w="100%">
                <Box h="100%" maxW="100px">
                  <Img src={content.IMG} />
                </Box>
                <Box>
                  <Text>{content.title}</Text>
                </Box>
              </Flex>
              <Box
                gap="2rem"
                alignItems="center"
                w={["100%", "100%", "unset", "unset"]}
                d="flex"
                justifyContent="space-between"
              >
                <Text>3</Text>
                <Text>${content.price}</Text>
                <Box>
                  <IoTrashOutline />
                </Box>
              </Box>
            </Flex>
          ))}
        </Flex>
        <Box>
          <Flex p="10px" flexDirection="column" gap="1.4rem">
            <Heading>Carrito</Heading>
            <Flex flexDirection="column">
              <Flex
                gap={["0px", "0px", "5rem", "7rem"]}
                justifyContent={[
                  "space-between",
                  "space-between",
                  "unset",
                  "unset",
                ]}
              >
                <Text>Total</Text>
                <Text>$10.000.000</Text>
              </Flex>
            </Flex>
            <Box
              p="10px"
              bgColor="#3182ce"
              color="#fff"
              borderRadius="10px"
              textAlign="center"
            >
              Comprar
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};
export default Cart;
