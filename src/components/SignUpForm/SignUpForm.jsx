import {
    Form,
    Stack,
    TextInput,
    Button
} from '@carbon/react';
import { ArrowRight, Login } from '@carbon/icons-react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginWithGoogle, signupWithEmailPassword } from "../../auth";

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        email: '', password: ''
    });


    function handleInputChange(e) {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value,
        }));
    }

    function handleFormSubmit(e) {
        e.preventDefault();
    }


    return (
        <Form className="form" onSubmit={handleFormSubmit} >
            <Stack gap={4} className="signup-form--title-container">
                <p className="form__label">Already have an account?&nbsp;
                    <Link to={'/log-in'}>Log in</Link>
                </p>
                <h1 className='form__title cds--type-heading-04'>Sign up for an account</h1>
            </Stack>
            <Stack gap={7}>
                <TextInput
                    name="email"
                    id="form--email"
                    invalidText="Invalid error message."
                    labelText="E-mail"
                    size="md"
                    onChange={handleInputChange}
                />
                {/*<Stack gap={4}>*/}
                <TextInput.PasswordInput
                    name="password"
                    id="form--password"
                    invalidText="Invalid error message."
                    labelText="Password"
                    size="md"
                    onChange={handleInputChange}
                />
                {/*<TextInput.PasswordInput*/}
                {/*    name="confirmPassword"*/}
                {/*    id="form--confirm-password"*/}
                {/*    invalidText="password does not match"*/}
                {/*    labelText="Confirm password"*/}
                {/*    size="md"*/}
                {/*/>*/}
                {/*</Stack>*/}
                <Button
                    kind="primary"
                    tabIndex={0}
                    type="submit"
                    renderIcon={ArrowRight}
                    onClick={() => {
                        signupWithEmailPassword(formData)
                    }}
                >Sign up</Button>
                <Stack gap={4} className="form--alt-login-container">
                    <p className="form--alt-login__label">Or use </p>
                    <Button
                        kind="tertiary"
                        tabIndex={0}
                        renderIcon={Login}
                        onClick={loginWithGoogle}
                    >Sign up with Google</Button>
                </Stack>
            </Stack>
        </Form>

    );
};

export default SignUpForm;