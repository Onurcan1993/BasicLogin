import { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import { Container } from "./Login.styled";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const initialForm = {
  email: "",
  password: "",
  check: false,
};

export default function Login() {
  const [formData, setFormData] = useState(initialForm);

  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [valid, setValid] = useState(false);
  const [check, setCheck] = useState(false);

  const history = useHistory();

  const isValidEmail = (email) => {
    return email.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim);
  };

  const isValidPhone = (value) => {
    return value.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$%/()=¿?*+-])(?=(?:([\w\d])\1?(?!\1\1)))(?!(?=.*(palabra1|palabra2|palabraN))).{8,20}/gm
    );
  };

  const changeHandler = (e) => {
    const { name, value, id, checked } = e.target;

    setFormData(
      name === "check"
        ? { ...formData, [name]: checked }
        : { ...formData, [name]: value }
    );

    if (id === "email") {
      isValidEmail(value) ? setValidEmail(true) : setValidEmail(false);
    }

    if (id === "password") {
      isValidPhone(value) ? setValidPassword(true) : setValidPassword(false);
    }

    if (id === "check") {
      checked ? setCheck(true) : setCheck(false);
    }
  };

  const clickHandler = () => {
    if (valid && formData.email.length > 0 && formData.password.length > 0) {
      history.push("/success");
    }
  };

  useEffect(() => {
    check && validEmail && validPassword ? setValid(true) : setValid(false);
  }, [validEmail, validPassword, check]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setValid(false);
  }, []);

  return (
    <Container>
      <Form className="d-flex flex-column  w-75" onSubmit={submitHandler}>
        <FormGroup className="align-self-center">
          <Label style={{ fontSize: "30px" }} className="mb-5 text-info">
            Login
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            className="mb-4 place"
            bsSize="sm"
            id="email"
            name="email"
            placeholder="Please enter valid email"
            type="text"
            onChange={changeHandler}
            value={formData.email}
            invalid={!validEmail}
          />
          <FormFeedback>
            {!validEmail && <p>Please enter valid email.</p>}
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            className="mb-3 place"
            bsSize="sm"
            id="password"
            name="password"
            placeholder="Please enter strong password"
            type="password"
            onChange={changeHandler}
            value={formData.password}
            invalid={!validPassword}
          />
          <FormFeedback>
            {!validPassword && (
              <p>
                Password require: lowercase, uppercase, symbol, not consecutive
                same letter/number, and not some specific words, the length
                bigger than 8.
              </p>
            )}
          </FormFeedback>
        </FormGroup>
        <FormGroup
          className="d-flex flex-row align-items-center justify-content-between gap-2"
          check
          inline
        >
          <Input
            type="checkbox"
            id="check"
            name="check"
            invalid={!check}
            onChange={changeHandler}
          />
          <Label size="sm" className="mr-3 lh-sm" check>
            I agree to the terms and conditions and the privacy policy
          </Label>
        </FormGroup>
        <Button
          onClick={clickHandler}
          className="w-25 align-self-center btn btn-info"
          type="submit"
          disabled={!valid}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
}
