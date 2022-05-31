import React, { useState } from "react";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { MdFavorite } from "react-icons/md";
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import Counter from "../components/Counter";

const ProductDetails = () => {
  const [state, setState] = useState({ like: false, cart: false });
  // const [like, setLike] = useState(false);
  const textstyle = {
    padding: "3px 10px",
    fontWeight: 600,
    fontFamily: "Rajdhani",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
  };

  return (
    <Container
      paddingInline={["0", "1.4rem", "3rem", "5rem"]}
      maxW="90%"
      m="2rem auto 0"
    >
      <Box
        w="fit-content"
        m="0 auto"
        outline="1px solid gray"
        borderRadius="20px"
        p={["1rem", "1.5rem 2rem", "1.5rem 2rem", "2rem 3rem"]}
      >
        <Flex
          direction={[
            "column-reverse",
            "column-reverse",
            "row-reverse",
            "row-reverse",
          ]}
          gap="3rem"
        >
          <Flex
            justifyContent="space-between"
            flexDirection="column"
            gap={["1rem", "1rem", "0px", "0px"]}
            w="fit-content"
          >
            <Heading>Gabinete</Heading>
            <Flex
              alignItems="center"
              alignSelf="self-start"
              gap="1.5rem"
              flexDirection={[
                "column",
                "row-reverse",
                "row-reverse",
                "row-reverse",
              ]}
            >
              <Text>$100.000</Text>
              <Box maxW="75px">
                <Counter />
              </Box>
            </Flex>
            <Flex
              flexDirection={["column", "unset", "unset", "unset"]}
              gap="1rem"
              align={["flex-start", "center", "center", "center"]}
            >
              <Flex
                w={["100%", "unset", "unset", "unset"]}
                justifyContent={["center", "unset", "unset", "unset"]}
                cursor={"pointer"}
                onClick={() => setState({ ...state, like: !state.like })}
                p="6px 1rem"
                borderRadius="5px"
                gap="0.4rem"
                border="1px solid red"
                h="fit-content"
                align="center"
              >
                <Box fontSize={"1.1rem"}>
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
                <Text fontWeight={600}>Favorito</Text>
              </Flex>
              <Flex
                w={["100%", "fit-content", "fit-content", "fit-content"]}
                justifyContent={["center", "unset", "unset", "unset"]}
                align={"center"}
                bg={state.cart ? "#10cf10" : "white"}
                gap={2}
                p="4px 1rem"
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
            <Box>
              <Text fontWeight={600} mb="10px">
                Product Details
              </Text>
              <Text maxH="125px" overflow="auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, odio molestias error perferendis in cum deserunt!
                Ratione laborum qui ex consequuntur blanditiis mollitia, non
                eius fuga rem exercitationem repudiandae impedit distinctio
                necessitatibus quo aut consectetur corporis nihil iusto eveniet
                quibusdam quaerat delectus obcaecati inventore hic. Eaque,
                architecto veritatis. Natus, distinctio!
              </Text>
            </Box>
          </Flex>
          <Box m="0 auto" maxW="360px">
            <Image
              w="100%"
              h="100%"
              // src="https://www.armytech.com.ar/Image/0/500_500-VP249QGR_1.png"
              src="https:imagenes.compufull.com/thumb/im_0_0_0_700x700_11548_1/GABINETE_GAMER_IC3_S175_RED_VIDRIO_LATERAL_6_COOLERS_LED20210218101958.jpg"
              alt="gabinete"
            />
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};
export default ProductDetails;
