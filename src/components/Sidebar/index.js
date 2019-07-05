import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import PropTypes from "prop-types";

import FormattingOptions from "./FormattingOptions";
import JsonOptions from "./JsonOptions";

const Form = styled.form`
  height: calc(100vh - ${props => props.theme.layout.navHeight});
  width: 15%;
`;

const initialConfig = {
  tabSize: 4,
  intentSize: 4,
  insertSpaces: false,
  trimAutoWhitespace: true,
  allowComments: true,
  validate: true,
};

function Sidebar({ editorConfig }) {
  const changeFormat = values => {
    editorConfig.updateFormatOptions(values);
  };
  const changeJsonOptions = (values, changed) => {
    editorConfig.updateJsonOptions({
      validate: values.validate,
      allowComments: values.allowComments,
      enableSchemaRequest: true,
      schemas: [{
        uri: "http://json.schemastore.org/package",
        fileMatch: ["*"]
      }],
      ...changed,
    });
  };
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
