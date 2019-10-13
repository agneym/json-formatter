import styled from "styled-components";

const SideBtn = styled.button`
  -webkit-appearance: none;
  background-color: ${props =>
    props.active ? props.theme.colors.teritiary : props.theme.colors.grey};
  color: #ffffff;
  box-shadow: none;
  border: none;
  padding: 0.8rem 1.5rem;
  text-align: center;
  font-size: 1.6rem;
  margin: 0 1rem;

  & > span {
    writing-mode: vertical-lr;
  }
`;

export default SideBtn;
