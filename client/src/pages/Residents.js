import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GetResidents } from "../api/GetResidents";
import ResidentList from "../components/ResidentList";
import Wrapper from "../components/Wrapper";
import { useStateValue } from "../context/StateProvider";
import { ApartmentLetters } from "../util/ApartmentLetters";
import { getApartments } from "../util/Dictionary";
import { sortByAppartment } from "../util/SortByApartment";

const Residents = (props) => {
  const [{ user }, dispatch] = useStateValue();

  const [residents, setResidents] = useState([{}]);
  const [activeResidents, setActiveResidents] = useState([]);
  const [apartments, setApartments] = useState([{}]);
  const [choice, setChoice] = useState("all");
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetResidents();
      sortByAppartment(data);
      setResidents(data);
      setActiveResidents(data);
      setApartments(getApartments(data));
    };
    fetchData();
  }, [setResidents, setApartments]);

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
              Residents
            </Heading>
            <HStack spacing="20px">
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  width="150px"
                >
                  Filter
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      setChoice("all");
                      setActiveResidents(residents);
                    }}
                  >
                    View All
                  </MenuItem>
                  {ApartmentLetters(apartments).map((a) => {
                    return (
                      <MenuItem
                        key={a}
                        onClick={() => {
                          setChoice(a);
                          setActiveResidents(
                            residents.filter((res) => res?.apartment[0] === a)
                          );
                        }}
                      >
                        Apartment {a}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </HStack>
          </Flex>

          <ResidentList
            residents={activeResidents}
            apartments={apartments}
            choice={choice}
          />
        </VStack>
      </Box>
    </Wrapper>
  );
};

export default Residents;
