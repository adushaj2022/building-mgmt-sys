import {
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { RiEdit2Line } from "react-icons/ri";
import EmployeeForm from "./EmployeeForm";

const MiniMenu = ({
  handleRemove,
  eid,
  employees,
  setEmployees,
  initValues,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <Menu>
      <MenuButton
        px={6}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: "gray.400" }}
        _expanded={{ bg: "blue.400" }}
        _focus={{ boxShadow: "outline" }}
      >
        <RiEdit2Line />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleRemove(eid)}>Delete Employee</MenuItem>
        <MenuItem onClick={onOpen}>Update Employee</MenuItem>
      </MenuList>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Employee</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <EmployeeForm
              onClose={onClose}
              eid={eid}
              isCreate={false}
              initValues={initValues}
              employees={employees}
              setEmployees={setEmployees}
            />
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Menu>
  );
};

export default MiniMenu;
