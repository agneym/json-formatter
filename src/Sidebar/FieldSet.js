import styled from "styled-components";

const FieldSet = styled.fieldset`
  border: none;
`;

export const Field = styled.div`
  margin: 2rem 0;
`;

export const HorizontalLabel = styled.label`
  font-weight: 600;
  font-size: 1.3rem;
  color: #333740;
  width: auto;
`;

export const HorizontalField = styled(Field)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default FieldSet;