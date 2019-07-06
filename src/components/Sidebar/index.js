import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import PropTypes from "prop-types";

import FormattingOptions from "./FormattingOptions";
import JsonOptions from "./JsonOptions";

const Form = styled.form`
  height: calc(100vh - ${props => props.theme.layout.navHeight});
  width: 20%;
`;

const initialConfig = {
  tabSize: 4,
  intentSize: 4,
  insertSpaces: false,
  trimAutoWhitespace: true,
  allowComments: true,
  validate: true,
  schemaInput: null,
};

const createSchema = (schemaConfig) => {
  return [{
    uri: schemaConfig.url,
    fileMatch: ["*"]
  }]
}

function Sidebar({ editorConfig }) {
  const changeFormat = values => {
    editorConfig.updateFormatOptions(values);
  };
  const changeJsonOptions = (values, changed) => {
    editorConfig.updateJsonOptions({
      validate: values.validate,
      allowComments: values.allowComments,
      enableSchemaRequest: true,
      schemas: values.schemaInput ? createSchema(values.schemaInput) : [],
      ...changed,
    });
  };
  const changeSchema = (values, newSchema) => {
    if(!newSchema) {
      return;
    }
    editorConfig.updateJsonOptions({
      validate: values.validate,
      allowComments: values.allowComments,
      enableSchemaRequest: true,
      schemas: createSchema(newSchema),
    })
  } 
  return (
    <Formik initialValues={initialConfig}>
      {({ values, handleChange }) => (
        <Form>
          <FormattingOptions
            values={values}
            handleChange={handleChange}
            handleBlur={() => changeFormat(values)}
          />
          <JsonOptions
            values={values}
            handleChange={handleChange}
            handleBlur={changed => changeJsonOptions(values, changed)}
            changeSchema={(newSchema) => changeSchema(values, newSchema)}
          />
        </Form>
      )}
    </Formik>
  );
}

Sidebar.propTypes = {
  editorConfig: PropTypes.shape({
    updateFormatOptions: PropTypes.func.isRequired,
    updateJsonOptions: PropTypes.func.isRequired,
  }),
};

export default Sidebar;
