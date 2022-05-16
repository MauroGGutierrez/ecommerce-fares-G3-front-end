import { FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const FormCategpry = () => {
  return (
    <div>
      <FormLabel htmlFor="category" fontWeight="semibold" mt=".4rem">
        Category
      </FormLabel>
      <Input id="category" type="email" placeholder="Product Category" />
    </div>
  );
};

export default FormCategpry;
