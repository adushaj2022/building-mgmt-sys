import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import { Formik, Form } from "formik";
import { InputField } from "../components/InputField";
import { PostUser } from "../api/PostUser";
import { toErrorMap } from "../util/ErrorMap";
import { LoginUser } from "../api/LoginUser";
import { useStateValue } from "../context/StateProvider";

const Login = (props) => {
  const [{}, dispatch] = useStateValue();
  const [view, setView] = useState(false);
  const handleClick = () => {
    setView(!view);
  };

  useEffect(() => {
    props.setNav(false);
    return () => {
      props.setNav(true);
    };
  });

  return (
    <div className="login">
      <div className="login__img">
        <img
          src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80"
          alt="real estate"
        />
      </div>

      <div className="login__form">
        <Box mt={"-20"} p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Flex justifyContent={"center"}>
            <Heading as="h3" size="lg" p={5} mb={3}>
              {view ? "Sign up" : "Sign in"}
            </Heading>
          </Flex>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={async (values, { setErrors, resetForm }) => {
              const result = await LoginUser(values);
              dispatch({
                type: "SET_USER",
                payload: result.data.user,
              });
              if (result.data?.errors) {
                setErrors(toErrorMap(result.data.errors));
              }
              console.log(result.data);
              if (result.data?.status) {
                resetForm({});
                console.log(props.history);
                props.history.push("/building");
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Box mt={5}>
                  <InputField
                    name="username"
                    placeholder="Please enter your username"
                    label="Username"
                    type="text"
                    mb={2}
                  />
                  <InputField
                    name="password"
                    placeholder="Please enter your password"
                    label="Password"
                    type="password"
                    mb={2}
                  />
                </Box>

                <Button
                  type="submit"
                  mt={3}
                  colorScheme="twitter"
                  isLoading={isSubmitting}
                >
                  Submit
                </Button>
                <Text
                  as="u"
                  mt={4}
                  fontSize="xs"
                  _hover={{ cursor: "pointer" }}
                  onClick={handleClick}
                >
                  {!view ? "Don't " : "Already "} have an account ? Click here
                </Text>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
    </div>
  );
};

export default Login;
