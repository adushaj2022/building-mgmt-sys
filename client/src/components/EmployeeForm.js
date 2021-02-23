import { Box, Button, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { toErrorMap } from "../util/ErrorMap";
import { FormFields } from "../util/FormFields";
import { PostEmployee } from "../api/PostEmployees";
import { UpdateEmployee } from "../api/UpdateEmployee";
import { InputField } from "./InputField";
import Wrapper from "./Wrapper";

const EmployeeForm = ({
  employees,
  setEmployees,
  initValues,
  isCreate,
  eid,
  onClose,
}) => {
  const toast = useToast();

  return (
    <Wrapper>
      <Formik
        initialValues={initValues}
        onSubmit={async (values, { setErrors, resetForm }) => {
          // * Here we will see if we need to update  or create a new employee
          const result = isCreate
            ? await PostEmployee(values)
            : await UpdateEmployee(values);

          if (result.data?.errors) {
            setErrors(toErrorMap(result.data.errors));
          } else {
            isCreate
              ? setEmployees([...employees, values]) //* Either add new employee, or update one
              : setEmployees(
                  employees.map((emp) => {
                    if (emp.eid === eid) {
                      return { ...values };
                    } else {
                      return emp;
                    }
                  })
                );

            const title = isCreate ? "Employee Created" : "Employee Updated";
            const description = isCreate
              ? "We've successfully created the new employee"
              : "We've successfully updated the new employee";

            resetForm({}); //* Clear Form after submit
            toast({
              title,
              description,
              status: "success",
              duration: 7000,
              isClosable: true,
            });
            !isCreate && onClose(); //!Close the Model
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {FormFields.map((input, index) => {
              return (
                <Box mt={5} key={index}>
                  <InputField
                    name={input.name}
                    placeholder={input.placeholder}
                    label={input.label}
                    type={input.type}
                  />
                </Box>
              );
            })}

            <Button
              type="submit"
              mt={10}
              ml={!isCreate && 40}
              p={3}
              position={!isCreate && "fixed"}
              colorScheme={isCreate ? "gray" : "twitter"}
              isLoading={isSubmitting}
            >
              {!isCreate ? "Update" : "Add"} Employee
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default EmployeeForm;
