import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { contentCards } from "../data/contentCards";
const Cart = () => {
  return (
    <Container maxW="90%" m="0 auto" p="0px">
      <Heading>Mi carrito</Heading>
      <Flex flexDirection="column" gap={5}>
        {contentCards.map((content) => (
          <Flex gap={6} alignItems="center">
            {/* <Flex> */}
            <Box h="100%" maxW="100px">
              <Img h="100%" w="100%" src={content.IMG} alt={content.title} />
            </Box>
            <Text mt="10px" w="300px">
              {content.title}
            </Text>
            {/* </Flex> */}
            <Flex align={"center"}>
              <Box
                // onClick={subtractClick}
                bgColor={"#9d0208"}
                px={"14px"}
                py={"6px"}
                fontSize={"16px"}
                color={"white"}
                borderTopLeftRadius={"9px"}
                borderBottomLeftRadius={"9px"}
                cursor={"pointer"}
                _hover={{
                  bg: "#c32f27",
                  transition: "all 500ms ease",
                }}
              >
                -
              </Box>
              <Text
                color={"white"}
                fontWeight={600}
                fontFamily={("sans-serif", "Rajdhani")}
                fontSize={"1.3rem"}
                bg={"#252627"}
                px={3}
                py={"2px"}
              >
                {/* {count} */}1
              </Text>
              <Box
                // onClick={handleClick}
                bgColor={"#9d0208"}
                px={"12px"}
                py={"6px"}
                fontSize={"16px"}
                color={"white"}
                borderTopRightRadius={"9px"}
                borderBottomRightRadius={"9px"}
                cursor={"pointer"}
                _hover={{
                  bg: "#c32f27",
                  transition: "all 500ms ease",
                }}
              >
                +
              </Box>
            </Flex>
            <Text>${content.price}</Text>
            <Button>Delete</Button>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};

export default Cart;
