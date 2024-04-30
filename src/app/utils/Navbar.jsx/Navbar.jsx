import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Flex, Box, Divider, Image, Text } from "@chakra-ui/react";

import SearchBarr from "../searchInput/SearchBar";

export default function Navbar() {
  const city = "تهران";

  return (
    <Flex
      alignItems={"center"}
      backgroundColor={"white"}
      justifyContent={"space-between"}
      position={"sticky"}
      fontSize={"15px"}
    >
      <Flex alignItems={"center"} mx={"20px"}>
        <Box
          cursor={"pointer"}
          transition={".5s"}
          borderRadius={"5px"}
          _hover={{
            opacity: ".7",
            transition: ".5s",
          }}
          backgroundColor={"red"}
          p={"12px 25px"}
          fontFamily={"iransans"}
          color={"white"}
          mx={4}
        >
          {" "}
          ثبت اگهی{" "}
        </Box>
        <Box
          cursor={"pointer"}
          opacity={0.7}
          mx={4}
          transition={".5s"}
          borderRadius={"5px"}
          _hover={{
            opacity: "1",
            transition: ".5s",
            backgroundColor: "rgba(230,230,230,1)",
          }}
          p={"12px 25px"}
          alignItems={"center"}
          display="flex"
          width={"fit-content"}
        >
          <Text as={"p"}> دیوار من </Text>{" "}
          <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faUser} />
        </Box>
      </Flex>
      <Flex
        _groupHover={{ backgroundColor: "red" }}
        pr={2}
        flexBasis={"60%"}
        justifyContent={"end"}
        alignItems={"center"}
        mx={"20px"}
      >
        <SearchBarr city={city} />
        <Box> {city} </Box>

        <Box> دسته ها </Box>
        <Divider
          height={"60px"}
          color={"blue"}
          backgroundColor={"blue"}
          width={"1px"}
          orientation="vertical"
          m={2}
        />
        <Image
          borderRadius="0"
          boxSize="60px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Flex>
    </Flex>
  );
}
