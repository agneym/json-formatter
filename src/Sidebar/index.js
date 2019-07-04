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
  enableSchemaRequest: true,
  validate: true,
}

function Sidebar({ editorConfig }) {
  const changeFormat = (values) => {
    editorConfig.updateFormatOptions(values);
  }
  return (
    <Formik
      initialValues={initialConfig}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <FormattingOptions
            values={values}
            handleChange={handleChange}
            handleBlur={() => changeFormat(values)}
          />
          <JsonOptions
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </Form>
      )}
    </Formik>
  );
}

Sidebar.propTypes = {
  editorConfig: PropTypes.shape({
    updateFormatOptions: PropTypes.func.isRequired,
  }),
}

export default Sidebar;