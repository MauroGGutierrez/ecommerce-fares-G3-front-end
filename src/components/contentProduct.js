import React, { useState } from "react";
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

const ContentProduct = ({ title, imgCards, description, price }) => {
  const [state, setState] = useState({ like: false, cart: false });

  const textstyle = {
    padding: "3px 10px",
    fontWeight: 600,
    fontFamily: "Rajdhani",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
  };

  return (
    <Box m="0 auto">
      <Box
        role="group"
        maxW={["220px", "280px", "330px", "330px"]}
        transition="all 500ms ease"
        border="1px solid gray"
        _hover={{
          transform: "scale(1.04)",
          transition: "all 500ms ease",
          boxShadow: "2px 2px 7px 1px gray",
        }}
      >
        <Flex gap={1}>
          <Text bg="#d90429" color="white" style={textstyle}>
            Stock Disponible
          </Text>
          <Text bg="#0096c7" color="white" style={textstyle}>
            Oferta
          </Text>
        </Flex>
        <Box p="1rem" rounded={"lg"} height={"240px"}>
          <Image height={"100%"} m="0 auto" src={imgCards} />
        </Box>
        <Flex p="1.4rem" bgColor="#eaeaea" flexDirection={"column"}>
          <Heading
            fontSize={"2xl"}
            fontWeight={700}
            color={"black"}
            lineHeight={"25px"}
            mb="12px"
            h="3rem"
            fontFamily="Rajdhani"
            overflow="hidden"
          >
            {title}
          </Heading>
          <Text
            mb="1.2rem"
            fontSize={"sm"}
            fontFamily={("sans-serif", "Poppins")}
            fontWeight={300}
            color={"black"}
            h="40px"
            // w="260px"
            overflow="hidden"
          >
            {description}
          </Text>
          <Text
            mb="1rem"
            fontWeight={600}
            fontSize={"2xl"}
            color={"black"}
            fontFamily={("sans-serif", "Poppins")}
          >
            ${price}
          </Text>
          <Flex
            flexDirection="row-reverse"
            justifyContent="space-between"
            align="center"
          >
            <Box
              onClick={() => setState({ ...state, like: !state.like })}
              cursor="pointer"
              fontSize="1.7rem"
            >
              <Box>
                <MdFavorite
                  filter={state.like ? "drop-shadow(4px 3px 7px red)" : null}
                  color={state.like ? "red" : "gray"}
                />
              </Box>
            </Box>
            <Flex
              w="fit-content"
              align={"center"}
              bg={state.cart ? "#10cf10" : "white"}
              gap={2}
              px={4}
              py={1}
              color={state.cart ? "white" : "black"}
              cursor="pointer"
              border="1px solid #10cf10"
              onClick={() => setState({ ...state, cart: !state.cart })}
            >
              <Text
                fontWeight={textstyle.fontWeight}
                fontFamily={textstyle.fontFamily}
                fontSize="1.2rem"
              >
                {state.cart ? "ADDED" : "ADD TO"}
              </Text>
              {state.cart ? (
                <BsFillCartCheckFill fontSize={"1.4rem"} />
              ) : (
                <BsFillCartPlusFill fontSize={"1.4rem"} />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default ContentProduct;
