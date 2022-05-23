import { Box, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const FilterCategory = () => {
  return (
    <Box ml={5} mt={10} borderRight="3px solid gray" maxH={"40rem"}>
      <Text fontSize={"2xl"} fontWeight={"semibold"} as="i">
        Categorias
      </Text>
      <List spacing={2} mt={"0.7rem"} mb={"0.9rem"}>
        <ListItem cursor="pointer" _hover={{ color: "red" }}>
          Placas
        </ListItem>
        <ListItem cursor="pointer" _hover={{ color: "red" }}>
          Procesadores
        </ListItem>
        <ListItem cursor="pointer" _hover={{ color: "red" }}>
          Memoria RAM
        </ListItem>
        <ListItem cursor="pointer" _hover={{ color: "red" }}>
          Coolers y Ventiladores
        </ListItem>
        <ListItem cursor="pointer" _hover={{ color: "red" }}>
          Gabinetes
        </ListItem>
      </List>
      <Text fontSize={"2xl"} fontWeight={"semibold"} as="i">
        Condicion
      </Text>
      <List spacing={2} mt={"0.7rem"} mb={"0.9rem"}>
        <ListItem cursor="pointer" _hover={{ color: "red" }}>
          Nuevo
        </ListItem>
        <ListItem cursor="pointer" _hover={{ color: "red" }}>
          Usado
        </ListItem>
        <ListItem cursor="pointer" _hover={{ color: "red" }}>
          Reparado
        </ListItem>
      </List>
      <Text fontSize={"2xl"} fontWeight={"semibold"} as="i">
        Marcas
      </Text>
      <List spacing={2} mt={"0.7rem"}>
        <ListItem cursor="pointer" _hover={{ color: "red" }}>
          AMD
        </ListItem>
        <ListItem cursor="pointer" _hover={{ color: "red" }}>
          Intel
        </ListItem>
        <ListItem cursor="pointer" _hover={{ color: "red" }}>
          Redragon
        </ListItem>
        <ListItem cursor="pointer" _hover={{ color: "red" }}>
          Rezer
        </ListItem>
        <ListItem cursor="pointer" _hover={{ color: "red" }}>
          Gigabyte
        </ListItem>
        <ListItem cursor="pointer" _hover={{ color: "red" }}>
          Corsair
        </ListItem>
      </List>
    </Box>
  );
};

export default FilterCategory;
