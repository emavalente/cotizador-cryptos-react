import styled from "@emotion/styled";

const Texto = styled.p`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;

const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};

export default Error;
