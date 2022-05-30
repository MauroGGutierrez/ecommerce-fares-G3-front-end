// import React, { useState } from "react";
// import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
// import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
// import { MdFavorite } from "react-icons/md";
// import Counter from "./Counter";

// const ContentProduct = ({ title, imgCards, description, price }) => {
//   const [state, setState] = useState({ like: false, cart: false });
//   const textstyle = {
//     padding: "3px 10px",
//     fontWeight: 600,
//     fontFamily: "Rajdhani",
//     borderBottomLeftRadius: "5px",
//     borderBottomRightRadius: "5px",
//   };

//   return (
//     <Box>
//       <Box
//         role={"group"}
//         p={7}
//         m="0 auto"
//         // overflow={"hidden"}
//         bgGradient="linear(to-t, #adb5bd,#e9ecef)"
//         boxShadow={"dark-lg"}
//         transition="all 500ms ease"
//         _hover={{
//           transform: "scale(1.03)",
//           transition: "all 1000ms ease",
//           border: "1px solid red",
//         }}
//       >
//         <Flex mt={"-1.8rem"} mb={"1rem"} ml={"-1rem"}>
//           <Box>
//             <Text
//               bg="#d90429"
//               p={"3px 10px"}
//               color={"white"}
//               fontWeight={600}
//               fontFamily={("sans-serif", "Rajdhani")}
//               borderBottomLeftRadius={"5px"}
//             >
//               Stock Disponible
//             </Text>
//           </Box>
//           <Box>
//             <Text
//               bg="#0096c7"
//               p={"3px 10px"}
//               color={"white"}
//               fontWeight={600}
//               fontFamily={("sans-serif", "Rajdhani")}
//               borderBottomRightRadius={"5px"}
//             >
//               Oferta
//             </Text>
//           </Box>
//         </Flex>
//         <Flex>
//           <Box
//             ml="auto"
//             mt="-40px"
//             onClick={() => setState({ ...state, like: !state.like })}
//             cursor={"pointer"}
//             fontSize={"1.7rem"}
//           >
//             {state.like ? (
//               <Box transition="all 1000ms ease">
//                 <MdFavorite color={"red"} />
//               </Box>
//             ) : (
//               <Box
//                 _hover={{
//                   transition: "all 1000ms ease",
//                 }}
//               >
//                 <MdFavorite color={"gray"} />
//               </Box>
//             )}
//           </Box>
//         </Flex>
//         <Box
//           h="160px"
//           //  rounded={"lg"}
//           // height={"260px"}
//           // boxShadow={"2xl"}
//         >
//           <Image
//             // rounded={"lg"}
//             height={"100%"}
//             width={"100%"}
//             // objectFit={"cover"}
//             objectFit={"contain"}
//             src={imgCards}
//           />
//         </Box>
//         <Flex
//           mt={8}
//           align={"center"}
//           // w="220px"
//           flexDirection={"column"}
//           gap={"1rem"}
//         >
//           <Heading
//             // fontSize={"2xl"}
//             fontSize="1.6rem"
//             fontWeight={600}
//             color={"black"}
//             lineHeight={"25px"}
//             h="50px"
//             fontFamily={("sans-serif", "Rajdhani")}
//             overflow="hidden"
//           >
//             {title}
//           </Heading>
//           <Text
//             // fontSize={"sm"}
//             fontFamily={("sans-serif", "Poppins")}
//             fontWeight={100}
//             fontSize="0.9rem"
//             color={"black"}
//             // lineHeight={"18px"}
//             width="100%"
//             overflow="hidden"
//             textOverflow="ellipsis"
//             whiteSpace="nowrap"
//           >
//             {description}
//           </Text>
//           <Flex direction={"row"} align={"center"}>
//             <Flex gap={3} align={"center"}>
//               <Text
//                 fontWeight={600}
//                 fontSize="17px"
//                 // fontSize={"2x1"}
//                 color={"black"}
//                 // pr={2}
//                 fontFamily={("sans-serif", "Rajdhani")}
//               >
//                 Price:
//               </Text>
//               <Text
//                 fontSize="19px"
//                 fontWeight={600}
//                 // fontSize={"2xl"}
//                 color={"black"}
//                 fontFamily={("sans-serif", "Poppins")}
//               >
//                 ${price}
//               </Text>
//             </Flex>
//           </Flex>
//           <Flex w="100%" justifyContent="space-between">
//             <Flex
//               w="fit-content"
//               align={"center"}
//               bg={state.cart ? "#10cf10" : "white"}
//               gap={2}
//               px={4}
//               py={1}
//               color={state.cart ? "white" : "black"}
//               cursor="pointer"
//               border="1px solid #10cf10"
//               onClick={() => setState({ ...state, cart: !state.cart })}
//             >
//               <Text
//                 fontWeight={textstyle.fontWeight}
//                 fontFamily={textstyle.fontFamily}
//                 fontSize="1.2rem"
//               >
//                 {state.cart ? "ADDED" : "ADD TO"}
//               </Text>
//               {state.cart ? (
//                 <BsFillCartCheckFill fontSize={"1.4rem"} />
//               ) : (
//                 <BsFillCartPlusFill fontSize={"1.4rem"} />
//               )}
//             </Flex>
//             <Box maxW="74px">
//               <Counter />
//             </Box>
//           </Flex>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };
// export default ContentProduct;
import React, { useState } from "react";
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

const ContentProduct = ({ title, imgCards, description, price }) => {
  // props: { title, imgCards, description, price }
  const [state, setState] = useState({ like: false, cart: false });

  const textstyle = {
    padding: "3px 10px",
    fontWeight: 600,
    fontFamily: "Rajdhani",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
  };

  return (
    <Box m="0 auto">
      <Box
        role="group"
        // maxW={["220px", "280px", "330px", "330px"]}
        transition="all 500ms ease"
        outline="1px solid gray"
        _hover={{
          transform: "scale(1.04)",
          transition: "all 500ms ease",
          boxShadow: "2px 2px 7px 1px gray",
        }}
      >
        <Flex gap={1}>
          <Text bg="#d90429" color="white" style={textstyle}>
            Stock Disponible
          </Text>
          <Text bg="#0096c7" color="white" style={textstyle}>
            Oferta
          </Text>
        </Flex>
        <Box p="1rem" rounded={"lg"} height={"220px"}>
          <Image height={"100%"} m="0 auto" src={imgCards} />
        </Box>
        <Flex p="1.4rem" bgColor="#eaeaea" flexDirection={"column"}>
          <Heading
            fontSize={"2xl"}
            fontWeight={700}
            color={"black"}
            lineHeight={"25px"}
            mb="12px"
            h="3rem"
            fontFamily="Rajdhani"
            overflow="hidden"
          >
            {title}
          </Heading>
          <Text
            mb="1.2rem"
            fontSize={"sm"}
            fontFamily={("sans-serif", "Poppins")}
            fontWeight={300}
            color={"black"}
            h="40px"
            // w="260px"
            overflow="hidden"
          >
            {description}
          </Text>
          <Text
            mb="1rem"
            fontWeight={600}
            fontSize={"2xl"}
            color={"black"}
            fontFamily={("sans-serif", "Poppins")}
          >
            ${price}
          </Text>
          <Flex
            flexDirection="row-reverse"
            justifyContent="space-between"
            align="center"
          >
            <Box
              onClick={() => setState({ ...state, like: !state.like })}
              cursor="pointer"
              fontSize="1.7rem"
            >
              <Box>
                <MdFavorite
                  filter={state.like ? "drop-shadow(4px 3px 7px red)" : null}
                  color={state.like ? "red" : "gray"}
                />
              </Box>
            </Box>
            <Flex
              w="fit-content"
              align={"center"}
              bg={state.cart ? "#10cf10" : "white"}
              gap={2}
              px={4}
              py={1}
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
        </Flex>
      </Box>
    </Box>
  );
};
export default ContentProduct;
