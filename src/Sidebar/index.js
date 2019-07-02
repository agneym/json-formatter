import React from "react";
import styled from "styled-components";
import { Formik } from "formik";

import FormattingOptions from "./FormattingOptions";
import JsonOptions from "./JsonOptions";

const Container = styled.form`
  height: calc(100vh - ${props => props.theme.layout.navHeight});
  width: 15%;
`;

const initialConfig = {
  tabSize: 4,
  intentSize: 4,
  insertSpaces: false,
  trimAutoWhitespace: true,
  allowComments: true,
  enableSchemaRequest: true,
  validate: true,
}

function Sidebar() {
  return (
    <Formik
      initialValues={initialConfig}
    >
      {({ values, errors, handleChange, handleBlur, }) => (
        <Container>
          <FormattingOptions values={values} handleChange={handleChange} handleBlur={handleBlur} />
          <JsonOptions values={values} handleChange={handleChange} handleBlur={handleBlur} />
        </Container>
      )}
    </Formik>
  );
}

export default Sidebar;