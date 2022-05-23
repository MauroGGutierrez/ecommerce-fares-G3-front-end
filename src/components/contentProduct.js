import React, { useState } from "react";
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

const ContentProduct = ({ title, imgCards, description, price }) => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState({ like: false, cart: false });

  const handleClick = () => {
    setCount(count + 1);
  };

  const subtractClick = () => {
    setCount(count - 1);
  };

  return (
    <Box py={12}>
      <Box
        role={"group"}
        p={7}
        maxW={"330px"}
        w={"full"}
        h={"36.25rem"}
        overflow={"hidden"}
        bgGradient="linear(to-t, #adb5bd,#e9ecef)"
        boxShadow={"dark-lg"}
        transition="all 500ms ease"
        _hover={{
          transform: "scale(1.03)",
          transition: "all 1000ms ease",
          border: "1px solid red",
        }}
      >
        <Flex mt={"-1.8rem"} mb={"1rem"} ml={"-1rem"}>
          <Box>
            <Text
              bg="#d90429"
              p={"3px 10px"}
              color={"white"}
              fontWeight={600}
              fontFamily={("sans-serif", "Rajdhani")}
              borderBottomLeftRadius={"5px"}
            >
              Stock Disponible
            </Text>
          </Box>
          <Box>
            <Text
              bg="#0096c7"
              p={"3px 10px"}
              color={"white"}
              fontWeight={600}
              fontFamily={("sans-serif", "Rajdhani")}
              borderBottomRightRadius={"5px"}
            >
              Oferta
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Box
            ml="auto"
            mt="-40px"
            onClick={() => setState({ ...state, like: !state.like })}
            cursor={"pointer"}
            fontSize={"1.7rem"}
          >
            {state.like ? (
              <Box transition="all 1000ms ease">
                <MdFavorite color={"red"} />
              </Box>
            ) : (
              <Box
                _hover={{
                  transition: "all 1000ms ease",
                }}
              >
                <MdFavorite color={"gray"} />
              </Box>
            )}
          </Box>
        </Flex>
        <Box rounded={"lg"} height={"260px"} boxShadow={"2xl"}>
          <Image
            rounded={"lg"}
            height={"100%"}
            width={"100%"}
            objectFit={"cover"}
            src={imgCards}
          />
        </Box>
        <Flex mt={8} align={"center"} flexDirection={"column"} gap={"0.6rem"}>
          <Heading
            fontSize={"2xl"}
            fontWeight={600}
            as="bold"
            color={"black"}
            lineHeight={"25px"}
            h="4.7rem"
            fontFamily={("sans-serif", "Rajdhani")}
            overflow="hidden"
          >
            {title}
          </Heading>
          <Text
            fontSize={"sm"}
            fontFamily={("sans-serif", "Poppins")}
            fontWeight={300}
            color={"black"}
            lineHeight={"18px"}
            width="100%"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {description}
          </Text>
          <Flex direction={"row"} align={"center"}>
            <Flex pr={4} align={"center"}>
              <Text
                fontWeight={600}
                fontSize={"2x1"}
                color={"black"}
                pr={2}
                fontFamily={("sans-serif", "Rajdhani")}
              >
                Price:
              </Text>
              <Text
                fontWeight={600}
                fontSize={"2xl"}
                color={"black"}
                fontFamily={("sans-serif", "Poppins")}
              >
                ${price}
              </Text>
            </Flex>
          </Flex>
          <Flex gap={4}>
            <Flex
              align={"center"}
              bg={state.cart ? "#9d0208" : "#252627"}
              gap={2}
              px={4}
              py={1}
              cursor="pointer"
              rounded={"lg"}
              _hover={{
                bg: "#9d0208",
                transition: "all 500ms ease",
                transform: "scale(1.1)",
              }}
              onClick={() => setState({ ...state, cart: !state.cart })}
            >
              <Text
                color={"white"}
                fontWeight={600}
                fontFamily={("sans-serif", "Rajdhani")}
                fontSize="1.2rem"
              >
                {state.cart ? "ADDED" : "ADD TO"}
              </Text>
              {state.cart ? (
                <BsFillCartCheckFill color="white" fontSize={"1.4rem"} />
              ) : (
                <BsFillCartPlusFill color="white" fontSize={"1.4rem"} />
              )}
            </Flex>
            <Flex align={"center"}>
              <Box
                onClick={subtractClick}
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
                {count}
              </Text>
              <Box
                onClick={handleClick}
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
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default ContentProduct;
