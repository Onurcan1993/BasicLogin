import { Container } from "./Login.styled";
import { IconContext } from "react-icons";

import { CiCircleCheck } from "react-icons/ci";

export default function Success() {
  return (
    <Container>
      {" "}
      {/* <IconContext.Provider
        value={{ color: "blue", className: "global-class-name" }}
      >
        <CiCircleCheck size={70} />
      </IconContext.Provider> */}
      <h4 style={{ color: "blue", marginTop: "20px" }}>Login Successful!</h4>
    </Container>
  );
}
