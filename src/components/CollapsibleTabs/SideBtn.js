import styled from "styled-components";

const SideBtn = styled.button`
  -webkit-appearance: none;
  background-color: ${props =>
    props.uiType ? props.theme.colors[props.uiType] : props.theme.colors.grey};
  color: #ffffff;
  box-shadow: none;
  border: none;
  padding: 0.8rem;
  text-align: center;
  font-size: 1.6rem;
  margin: 0.5rem 1rem;

  & > span {
    writing-mode: vertical-lr;
    white-space: nowrap;
  }
`;

export default SideBtn;
