import { useState } from "react";
import {
    Form,
    Stack,
    TextInput,
    Button
} from '@carbon/react';
import { ArrowRight, Login } from '@carbon/icons-react';
import { Link } from "react-router-dom";
import { loginWithEmailPassword, loginWithGoogle } from "../../../auth";
import { useContext } from "react";
import { CurrentUserContext } from "../../../App";
const LoginForm = () => {
    const {
        user,
        setUser
    } = useContext(CurrentUserContext);

    const [formData, setFormData] = useState({
        email: '', password: '',
    });

    function handleInputChange(e) {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value,
        }));
    }

    async function handleFormSubmit(e) {
        e.preventDefault();

        try {
            const userCredential = await loginWithEmailPassword(formData);
            setUser(userCredential.user);
        } catch (error) {
            console.error('Authentication failed: ', error);
        }
    }



    return (
        <Form className="form" onSubmit={handleFormSubmit}>
            <div className="form--title-container">
                <h1 className='form__title cds--type-heading-04'>Log in to AlgoSculpt</h1>
            </div>
            <Stack gap={7}>
                <TextInput
                    name="email"
                    id="form--email"
                    invalidText="Invalid error message."
                    labelText="E-mail"
                    size="md"
                    required
                    onChange={handleInputChange}
                />
                <TextInput.PasswordInput
                    name="password"
                    id="form--password"
                    invalidText="Invalid error message."
                    labelText="Password"
                    size="md"
                    required
                    onChange={handleInputChange}
                />
                <Button
                    className='form--submit'
                    kind="primary"
                    tabIndex={0}
                    type="submit"
                    renderIcon={ArrowRight}
                >
                    Log in
                </Button>
                <div className="form--alt-login-container">
                    <p className="form--alt-login__label">Or log in with</p>
                    <Button
                        className='form--submit'
                        kind="secondary"
                        tabIndex={0}
                        renderIcon={Login}
                        onClick={loginWithGoogle}
                    >Google Sign-in</Button>
                </div>
                <div className="form--signup-container">
                    <p className="form--signup__label">Don't have an account?</p>
                    <Button as={Link} to={'/sign-up'}
                            className='form--submit'
                            kind="tertiary"
                            tabIndex={0}
                            renderIcon={ArrowRight}
                    >Create an account</Button>
                </div>
            </Stack>
        </Form>

    );
};

export default LoginForm;