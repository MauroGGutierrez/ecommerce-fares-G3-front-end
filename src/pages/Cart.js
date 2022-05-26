import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoTrashOutline } from "react-icons/io5";
import { contentCards } from "../data/contentCards";
import { Link } from "react-router-dom";
const Cart = () => {
  const [price, setPrice] = useState(0);

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
              //
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

    // <Container maxW="90%" m="0 auto" p="0px">
    //   <Heading>Mi carrito</Heading>
    //   <Flex flexDirection="column" gap={5}>
    //     {contentCards.map((content) => (
    //       <Flex gap={6} alignItems="center">
    //         <Box d="flex">
    //           <Box h="100%" maxW="100px">
    //             <Img h="100%" w="100%" src={content.IMG} alt={content.title} />
    //           </Box>
    //           <Text mt="10px" w="300px">
    //             {content.title}
    //           </Text>
    //         </Box>
    //         <Box d={["block", "block", "block", "flex"]}>
    //           <Flex align={"center"}>
    //             <Box
    //               // onClick={subtractClick}
    //               bgColor={"#9d0208"}
    //               p="6px 10px"
    //               fontSize={"16px"}
    //               color={"white"}
    //               borderTopLeftRadius={"9px"}
    //               borderBottomLeftRadius={"9px"}
    //               cursor={"pointer"}
    //               _hover={{
    //                 bg: "#c32f27",
    //                 transition: "all 500ms ease",
    //               }}
    //             >
    //               -
    //             </Box>
    //             <Text
    //               color={"white"}
    //               fontWeight={600}
    //               fontFamily={("sans-serif", "Rajdhani")}
    //               fontSize={"1.3rem"}
    //               bg={"#252627"}
    //               px={3}
    //               py={"2px"}
    //             >
    //               {/* {count} */}1
    //             </Text>
    //             <Box
    //               // onClick={handleClick}
    //               p="6px 10px"
    //               bgColor={"#9d0208"}
    //               fontSize={"16px"}
    //               color={"white"}
    //               borderTopRightRadius={"9px"}
    //               borderBottomRightRadius={"9px"}
    //               cursor={"pointer"}
    //               _hover={{
    //                 bg: "#c32f27",
    //                 transition: "all 500ms ease",
    //               }}
    //             >
    //               +
    //             </Box>
    //           </Flex>
    //           <Text>${content.price}</Text>
    //           <Box>
    //             <IoTrashOutline />
    //           </Box>
    //         </Box>

    //         {/* <Button>Delete</Button> */}
    //       </Flex>
    //     ))}
    //   </Flex>
    // </Container>
  );
};

export default Cart;
