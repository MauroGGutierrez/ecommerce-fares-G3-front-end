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


const ContentProduct = ({id,title,imgCards,description,price}) => {
  return (
    <Center py={12}>
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
        _hover={{ transform: "scale(1.04)", transition: "all 1000ms ease", border:"1px solid red" }}
      >
        <Box
          rounded={"lg"}
          height={"260px"}
          boxShadow={"2xl"}
        >
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
            lineHeight={"26px"}
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
        </Flex>
      </Box>
    </Center>
  );
};

export default ContentProduct;
