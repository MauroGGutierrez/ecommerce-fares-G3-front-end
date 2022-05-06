import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";


const ContentProduct = (props) => {
  return (
    <Center py={12}>
      <Box
        key={props.id}
        role={"group"}
        p={7}
        maxW={"330px"}
        w={"full"}
        h={"42.25rem"}
        overflow={"hidden"}
        bgGradient="linear(to-t, #adb5bd,#e9ecef)"
        boxShadow={"dark-lg"}
        transition="all 500ms ease"
      >
        <Box
          rounded={"lg"}
          height={"230px"}
          boxShadow={"2xl"}
          _hover={{ transform: "scale(1.10)", transition: "all 1000ms ease" }}
        >
          <Image
            rounded={"lg"}
            height={250}
            width={282}
            objectFit={"cover"}
            src={props.imgCards}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text
            fontSize={"2xl"}
            fontWeight={600}
            as="bold"
            color={"#black"}
            lineHeight={"26px"}
            mt={2}
            fontFamily={("sans-serif", "Rajdhani")}
            mb={"2rem"}
          >
            {props.title}
          </Text>
          <Heading
            fontSize={"sm"}
            fontFamily={("sans-serif", "Poppins")}
            fontWeight={300}
            color={"black"}
            mb={"3rem"}

          >
            {props.description}
          </Heading>
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
                ${props.price}
              </Text>
            </Flex>
          </Flex>
          <Stack
            align={"center"}
            bg={"#791b1d"}
            px={3}
            py={2}
            cursor="pointer"
            rounded={"lg"}
            fontSize={"1x1"}
            _hover={{
              bg: "#9e2a2b",
              transition: "all 500ms ease",
              fontSize: "18px",
            }}
          >
            <Text
              color={"white"}
              fontWeight={600}
              fontFamily={("sans-serif", "Poppins")}
            >
              BUY NOW
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default ContentProduct;
