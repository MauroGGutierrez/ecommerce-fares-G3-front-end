import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactDimmer } from "react-dimmer";
import { linksNavbar } from "../data/links";
import BigLogo from "../components/BigLogo";
import SlideBar from "../components/SlideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import LoginButton from "../components/LoginButton";
import { navbarstyles } from "../components/_styles";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import "../styleRgb.css";
import SearchBar from "../components/SearchBar";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [results, setResults] = useState([]);

  return (
    <Box bgGradient="linear(to-r, #343a40,#1d1f20)" color="black" m="0">
      <Container maxWidth="90%" p="1rem 0">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection={["row-reverse", "row-reverse", "row", "row"]}
        >
          <Box d={["unset", "unset", "none", "none"]}>
            <LoginButton />
          </Box>
          <BigLogo />
          <SearchBar />
          <Flex
            d={["none", "none", "flex", "flex"]}
            alignItems="center"
            gap={5}
          >
            {linksNavbar.map((item) => (
              <Link to={item.link} key={item.id}>
                <Text
                  color={"#adb5bd"}
                  style={navbarstyles.navbarLink}
                  gap="4px"
                  as="i"
                  _hover={{
                    transition: "all 400ms ease",
                    transform: "scale(1.1)",
                    color: "#fff",
                  }}
                >
                  {item.icon}
                  {item.name}
                </Text>
              </Link>
            ))}
            <LoginButton />
          </Flex>
          <Box display={["unset", "unset", "none", "none"]}>
            <GiHamburgerMenu onClick={() => setMenuOpen(!menuOpen)} />
            <SlideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <ReactDimmer
              isOpen={menuOpen}
              exitDimmer={setMenuOpen}
              zIndex={100}
              blur={1}
            />
          </Box>
        </Flex>
      </Container>
      <Box padding={"2px"} className="rgb" />
    </Box>
  );
};

export default NavBar;
