import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import React from "react";

const FormProducts = () => {
  return (
    <Center w="100%" h="100vh">
      <FormControl w="65%" p="2rem" boxShadow="md">
        <Text fontSize="2xl" fontWeight="medium" mb="1rem">
          Product Form
        </Text>
        <FormLabel htmlFor="name" fontWeight="semibold">
          Name
        </FormLabel>
        <Input id="name" type="email" placeholder="Product Name" />
        <FormLabel htmlFor="description" fontWeight="semibold" mt=".4rem">
          Description
        </FormLabel>
        <Input id="description" type="email" placeholder="Description" />
        <FormLabel htmlFor="price" fontWeight="semibold" mt=".4rem">
          Precio
        </FormLabel>
        <NumberInput min={10}>
          <NumberInputField id="price" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormLabel htmlFor="stock" fontWeight="semibold" mt=".4rem">
          Stock
        </FormLabel>
        <NumberInput min={10}>
          <NumberInputField id="stock" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormLabel htmlFor="category" fontWeight="semibold" mt=".4rem">
          Category
        </FormLabel>
        <Input id="category" type="email" placeholder="Product Category" />
        <Button mt={4} colorScheme="teal" type="submit" w="5rem">
          Subir
        </Button>
      </FormControl>
    </Center>
  );
};

export default FormProducts;
