import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { DeleteEmployee } from "../api/DeleteEmployee";
import { GetEmployees } from "../api/GetEmployees";
import MiniMenu from "./MiniMenu";

const EmployeeTable = ({ setEmployees, employees }) => {
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetEmployees();
      setEmployees(data);
    };
    fetchData();
  }, [setEmployees]);

  const handleRemove = async (eid) => {
    const response = await DeleteEmployee(eid);
    if (response) {
      // * if true, we know the employee was deleted
      toast({
        title: "Successful",
        description: "You removed the employee.",
        status: "warning",
        duration: 7000,
        isClosable: true,
      });
    }

    setEmployees(employees.filter((emp) => emp.eid !== eid)); //update state
  };

  return (
    <Table variant="simple">
      <TableCaption>
        All employee salarys are confidential and only viewable by admins
      </TableCaption>
      <Thead>
        <Tr>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Position</Th>
          <Th>Salary</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {employees?.length > 1 &&
          employees?.map((emp, index) => {
            return (
              <Tr key={index} bg={index % 2 === 0 && "#202836"}>
                <Td>{emp.firstName}</Td>
                <Td>{emp.lastName}</Td>
                <Td>{emp.position}</Td>
                <Td>${emp.salary.toLocaleString()}</Td>
                <Td>
                  <MiniMenu
                    initValues={emp}
                    handleRemove={handleRemove}
                    eid={emp.eid}
                    employees={employees}
                    setEmployees={setEmployees}
                  />
                </Td>
              </Tr>
            );
          })}
      </Tbody>
    </Table>
  );
};

export default EmployeeTable;
