import { Button, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { useStateValue } from "../context/StateProvider";

const Home = () => {
  return (
    <>
      <Flex alignItems={"center"} height={"90vh"}>
        <Image
          ml={4}
          mr={4}
          src="https://www.pinclipart.com/picdir/big/401-4014445_building-medical-cartoon-office-royalty-free-free-download.png"
          alt="hero image"
          boxSize="600px"
          objectFit="contain"
        />
        <Wrapper>
          <Heading as="h3" size="lg" p={1} mb={4} mt={-200}>
            The right way to manage buildings
          </Heading>
          <Text p={1} fontSize="lg" letterSpacing="wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit at
            tempora officiis quos magni voluptas ab quam a optio enim, dolor
            nesciunt cumque laudantium consequatur veritatis dolores corporis
            quidem consequuntur distinctio nobis nostrum maiores laboriosam!
            Dolorum aspernatur nobis ratione eius? At iure repudiandae soluta
            quibusdam nesciunt rem aperiam nisi quis!
          </Text>
          <Flex>
            <Link to={"/login"}>
              <Button mt={4}>Sign up today !</Button>
            </Link>
          </Flex>
        </Wrapper>
      </Flex>
    </>
  );
};

export default Home;
