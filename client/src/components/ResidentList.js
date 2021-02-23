import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const ResidentList = ({ apartments, residents, choice }) => {
  return (
    <Box
      width="100%"
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      {apartments?.length > 1 &&
        apartments.map((a, i) => {
          return (
            <div key={i}>
              {residents.map((res, idx) => {
                return (
                  <>
                    <div key={res.rid}>
                      {idx === 0 && choice === "all" && (
                        <Heading
                          as="h1"
                          fontSize="2xl"
                          borderTop="1px solid #fff"
                          borderBottom="1px solid #fff"
                          m={1}
                          mt={3}
                          mb={3}
                          p={4}
                        >
                          Apartment - {a}
                        </Heading>
                      )}
                      {idx === 0 && choice !== "all" && a[0] === choice && (
                        <Heading
                          as="h1"
                          fontSize="2xl"
                          borderTop="1px solid #fff"
                          borderBottom="1px solid #fff"
                          m={1}
                          mt={3}
                          mb={3}
                          p={4}
                        >
                          Apartment - {a}
                        </Heading>
                      )}

                      {res.apartment.toLowerCase() === a.toLowerCase() && (
                        <HStack
                          p={5}
                          borderTop="1px solid #2C313D"
                          pb={4}
                          mb={5}
                        >
                          <Flex alignItems="center">
                            <Image
                              borderRadius="full"
                              boxSize="120px"
                              src={res.imgURL}
                              alt="person"
                            />
                            <Heading fontSize="2xl" ml={4} mr={2} width="25%">
                              {`${res.firstName} ${res.lastName}`}
                            </Heading>
                            <HStack
                              width="100%"
                              borderLeft="1px solid #fff"
                              height="45px"
                              ml={3}
                              pl={4}
                              spacing="20px"
                            >
                              <Icon
                                as={BiPhone}
                                w={8}
                                h={8}
                                color="whiteAlpha.600"
                              />
                              <VStack mr={5}>
                                <Text fontWeight="600">Phone number</Text>
                                <Text>{res.phoneNumber}</Text>
                              </VStack>
                              <Icon
                                as={AiOutlineMail}
                                color="whiteAlpha.600"
                                w={8}
                                h={8}
                              />
                              <VStack>
                                <Text fontWeight="600">Email</Text>
                                <Text>
                                  {res.firstName.toLowerCase()}@gmail.com
                                </Text>
                              </VStack>
                            </HStack>
                          </Flex>
                        </HStack>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
          );
        })}
    </Box>
  );
};

export default ResidentList;
