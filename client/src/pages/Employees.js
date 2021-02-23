import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import Wrapper from "../components/Wrapper";
import { AddIcon } from "@chakra-ui/icons";
import { BsFillPersonLinesFill } from "react-icons/bs";
import EmployeeTable from "../components/EmployeeTable";
const Employees = () => {
  const [status, setStatus] = useState("view");
  const [employees, setEmployees] = useState([]);

  const handleClick = (active) => {
    setStatus(active);
  };

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
              {status === "add" ? "Add Employee" : "View Employees"}
            </Heading>
            <HStack>
              <ButtonGroup
                size="sm"
                isAttached
                variant="outline"
                onClick={() => handleClick("add")}
              >
                <Button mr="-px" isActive={status === "add" ? true : false}>
                  Add Employee
                </Button>
                <IconButton
                  isActive={status === "add" ? true : false}
                  aria-label=""
                  icon={<AddIcon />}
                />
              </ButtonGroup>
              <ButtonGroup
                size="sm"
                isAttached
                variant="outline"
                onClick={() => handleClick("view")}
              >
                <Button mr="-px" isActive={status === "view" ? true : false}>
                  View Employees
                </Button>
                <IconButton
                  isActive={status === "view" ? true : false}
                  aria-label=""
                  icon={<BsFillPersonLinesFill />}
                />
              </ButtonGroup>
            </HStack>
          </Flex>

          {/* If View button is currently active, we will render a table of employees, if Add button is active we will render a form  */}
          {status === "add" ? (
            <EmployeeForm
              setEmployees={setEmployees}
              employees={employees}
              isCreate={true}
              initValues={{
                position: "",
                salary: "",
                firstName: "",
                lastName: "",
              }}
            />
          ) : (
            <EmployeeTable setEmployees={setEmployees} employees={employees} />
          )}
        </VStack>
      </Box>
    </Wrapper>
  );
};

export default Employees;
