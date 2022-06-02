import React from "react";
import { Link } from "react-router-dom";
import { Flex, Heading } from "@chakra-ui/react";

const BigLogo = () => {
  return (
    <Link to="/">
      <Flex gap={2} alignItems="center">
        <Heading
          fontWeight="600"
          as="cite"
          fontSize={["24px", "24px", "34px", "34px"]}
          color={"white"}
          textShadow="5px 2px #000000"
          border={"1px solid red"}
          rounded={"2xl"}
        >
          ARCHITEX
        </Heading>
      </Flex>
    </Link>
  );
};

export default BigLogo;
