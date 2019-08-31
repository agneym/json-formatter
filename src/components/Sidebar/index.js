import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import PropTypes from "prop-types";

import FormattingOptions from "./FormattingOptions";
import JsonOptions from "./JsonOptions";
import EditorOptions, { themes } from "./EditorOptions";
import storage from "../../lib/storage";
import { SCHEMA_URL } from "../../config/api";

const Form = styled.form`
  height: calc(100vh - ${props => props.theme.layout.navHeight});
  width: 20%;
  overflow-y: auto;
`;

const key = "json.config";
const initialConfig = {
  tabSize: 4,
  intentSize: 4,
  insertSpaces: false,
  trimAutoWhitespace: true,
  allowComments: true,
  validate: true,
  schemaInput: null,
  theme: themes[0],
};

const createSchema = schemaConfig => {
  const url = schemaConfig.url;
  // Convert to azure proxy for HTTPS
  const urlSegments = url.split("/");
  const reqdUrl = url.includes("http://json.schemastore.org/")
    ? `${SCHEMA_URL}${urlSegments[urlSegments.length - 1]}.json`
    : url;
  return [
    {
      uri: reqdUrl,
      fileMatch: ["*"],
    },
  ];
};

function Sidebar({ editorConfig }) {
  const [config, setConfig] = useState(initialConfig);

  const changeFormat = useCallback(
    values => {
      storage.set(key, values);
      editorConfig.updateFormatOptions(values);
    },
    [editorConfig]
  );
  const changeJsonOptions = useCallback(
    (values, changed) => {
      storage.set(key, { ...values, ...changed });
      editorConfig.updateJsonOptions({
        validate: values.validate,
        allowComments: values.allowComments,
        enableSchemaRequest: true,
        schemas: values.schemaInput ? createSchema(values.schemaInput) : [],
        ...changed,
      });
    },
    [editorConfig]
  );
  const changeSchema = useCallback(
    (values, newSchema) => {
      if (!newSchema) {
        return;
      }
      editorConfig.updateJsonOptions({
        validate: values.validate,
        allowComments: values.allowComments,
        enableSchemaRequest: true,
        schemas: createSchema(newSchema),
      });
    },
    [editorConfig]
  );
  const changeTheme = useCallback(
    values => {
      const theme = values.theme.value;
      storage.set(key, values);
      editorConfig.changeTheme(theme);
    },
    [editorConfig]
  );

  useEffect(() => {
    const getConfig = () => {
      const data = storage.get(key);
      if (!data) {
        storage.set(key, initialConfig);
        return initialConfig;
      } else {
        setTimeout(() => {
          changeFormat(data);
          changeJsonOptions(data, {});
          changeTheme(data);
        }, 0);
        return data;
      }
    };
    setConfig(getConfig());
  }, [changeFormat, changeJsonOptions, changeTheme]);

  return (
    <Formik initialValues={config} enableReinitialize={true}>
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
            changeSchema={newSchema => changeSchema(values, newSchema)}
          />
          <EditorOptions
            values={values}
            handleChange={handleChange}
            handleBlur={() => changeTheme(values)}
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
    changeTheme: PropTypes.func.isRequired,
  }),
};

export default Sidebar;
