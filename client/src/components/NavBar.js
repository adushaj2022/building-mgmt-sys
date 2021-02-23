import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsBuilding } from "react-icons/bs";
import { Link } from "react-router-dom";
import { LogoutUser } from "../api/LogoutUser";
import { useStateValue } from "../context/StateProvider";

const NavBar = () => {
  const pathname = window.location.pathname;
  const [{ user }, dispatch] = useStateValue();

  const path = pathname === "/" ? "" : pathname.substr(1);

  const [active, setActive] = useState(path);

  const handleClick = (status) => {
    setActive(status);
  };

  const handleSignOut = async () => {
    dispatch({
      type: "SET_USER",
      payload: null,
    });
    await LogoutUser();
  };
  return (
    <Box bg="twitter.600" w="100%" p={6} color="white">
      <Flex alignItems="center" justifyContent="space-between">
        <HStack ml={6}>
          <Icon as={BsBuilding} w={6} h={6} />
          <Link to={"/"} onClick={() => handleClick("")}>
            <Heading as="h3" size="md" ml={3}>
              Prime Solutions {user?.username}
            </Heading>
          </Link>
        </HStack>
        {user?.username && (
          <HStack spacing="75px" mr={20}>
            <Link to="/employees" onClick={() => handleClick("employees")}>
              <Text fontSize="lg" as={active === "employees" && "ins"}>
                Employees
              </Text>
            </Link>
            <Link to="/residents" onClick={() => handleClick("residents")}>
              <Text fontSize="lg" as={active === "residents" && "ins"}>
                Residents
              </Text>
            </Link>
            <Link to="/building" onClick={() => handleClick("building")}>
              <Text fontSize="lg" as={active === "building" && "ins"}>
                Building
              </Text>
            </Link>
          </HStack>
        )}

        <Link to={"/"}>
          <Button onClick={handleSignOut}>
            {user?.username ? "Sign out" : "Sign in"}
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default NavBar;
