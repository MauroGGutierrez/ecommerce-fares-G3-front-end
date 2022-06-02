import React from "react";
import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";
const SliderCategories = () => {
  const links = {
    padding: "5px 0px 5px 16px",
    cursor: "pointer",
    margin: "0px",
    height: "34px",
    overflow: "hidden",
  };
  const clicked = {
    backgroundColor: "#cbcbcb",
    borderRight: "3px solid orange",
  };
  return (
    <Flex
      flexDirection="column"
      borderRight="1px solid gray"
      w="auto"
      position="sticky"
      overflowY="auto"
      maxHeight="100vh"
      top={0}
      p="13px 0"
    >
      <Text textAlign="center" fontSize={"2xl"} fontWeight={"semibold"} as="i">
        Categorias
      </Text>
      <List spacing={2}>
        <ListItem style={links} _hover={clicked}>
          Placas
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Procesadores
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Memoria RAM
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Coolers
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Gabinetes
        </ListItem>
      </List>
      <Text textAlign="center" fontSize={"2xl"} fontWeight={"semibold"} as="i">
        Condicion
      </Text>
      <List spacing={2}>
        <ListItem style={links} _hover={clicked}>
          Nuevo
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Usado
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Reparado
        </ListItem>
      </List>
      <Text textAlign="center" fontSize={"2xl"} fontWeight={"semibold"} as="i">
        Marcas
      </Text>
      <List spacing={2}>
        <ListItem style={links} _hover={clicked}>
          AMD
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Intel
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Redragon
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Rezer
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Gigabyte
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Corsair
        </ListItem>
      </List>
      {/* <List spacing={2}>
        <ListItem style={links} _hover={clicked}>
          AMD
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Intel
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Redragon
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Rezer
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Gigabyte
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Corsair
        </ListItem>
      </List>
      <List spacing={2}>
        <ListItem style={links} _hover={clicked}>
          AMD
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Intel
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Redragon
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Rezer
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Gigabyte
        </ListItem>
        <ListItem style={links} _hover={clicked}>
          Corsair
        </ListItem>
      </List> */}
    </Flex>
  );
};
export default SliderCategories;
