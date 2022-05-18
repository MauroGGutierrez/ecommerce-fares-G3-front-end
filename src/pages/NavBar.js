import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactDimmer } from "react-dimmer";
import { linksNavbar } from "../data/links";
import BigLogo from "../components/BigLogo";
import SlideBar from "../components/SlideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import LoginButton from "../components/LoginButton";
import { navbarstyles } from "../components/_styles";
import {
  Box,
  Container,
  Flex,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "../styleRgb.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [input, setInput] = useState("");
  // const [results, setResults] = useState([]);

  console.log(input);
  const handleInput = (e) => {
    setInput(e.target.value);
  };

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
          <FormControl
            w={"27rem"}
            rounded={"lg"}
            fontFamily={("sans-serif", "Rajdhani")}
            fontWeight={"2x1"}
          >
            <Flex align={"center"} gap={2}>
              <Input
                id="search"
                value={input}
                onChange={handleInput}
                type="search"
                placeholder="Buscar"
                bg="#252627"
                py={2}
                color="white"
              />
              <Box
                cursor={"pointer"}
                bg={"#212529"}
                p={"6px 10px 6px 10px"}
                rounded={"3xl"}
                border={"3px solid #6c757d"}
                _hover={{
                  transition: "all 200ms ease",
                  transform: "scale(1.07)",
                  bg: "#6c757d",
                }}
              >
                <SearchIcon
                  color={"white"}
                  fontSize="20px"
                  fontWeight={"bold"}
                />
              </Box>
            </Flex>
          </FormControl>
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
      <Box padding={"5px"} className="rgb" />
    </Box>
  );
};

export default NavBar;
