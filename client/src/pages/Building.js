import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import { useStateValue } from "../context/StateProvider";

const Building = (props) => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (!user?.username) {
      props.history.push("/");
    }
  }, []);
  return (
    <Wrapper>
      <Box shadow="md" borderWidth="1px" borderRadius="md" p={5}>
        <VStack>
          <Flex
            mb={4}
            paddingBottom={3}
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            borderBottom="1px solid #2C313D"
          >
            <Heading as="h3" size="md">
              Building Name
            </Heading>
          </Flex>
          <SimpleGrid columns={3} spacing={10} mb={5}>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">Employees</Heading>
              <Text mt={4}>
                We have over 10 employees currently at our building!
              </Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">Residents</Heading>
              <Text mt={4}>
                Our residents are the heart and soul of our building, we have
                over 35.
              </Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">Administrators</Heading>
              <Text mt={4}>
                A small team of 4 admins take care of everything!
              </Text>
            </Box>
          </SimpleGrid>
          <Box
            mt={6}
            p={5}
            shadow="md"
            borderWidth="1px"
            width="100%"
            borderRadius="md"
          >
            <Heading fontSize="xl" mb={4}>
              Who are we ?
            </Heading>
            <Image
              boxSize="100%"
              height="700px"
              src="https://images1.apartments.com/i2/39njupn8aqkNS8YomXPD57Yg7cnlUSGm8bpEZTdPwgg/111/21-west-street-new-york-ny-primary-photo.jpg"
              alt="Building"
            />
          </Box>
        </VStack>
      </Box>
    </Wrapper>
  );
};

export default Building;
