import styled from "styled-components";

const SideBtn = styled.button`
  -webkit-appearance: none;
  background-color: ${props => props.theme.colors.teritiary};
  color: #ffffff;
  box-shadow: none;
  border: none;
  padding: 1rem;
  text-align: center;
  font-size: 1.6rem;
  margin: 0 1rem;
`;

export default SideBtn;