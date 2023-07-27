import {
    Form,
    Stack,
    TextInput,
    Button
} from '@carbon/react';
import { ArrowRight, Login } from '@carbon/icons-react';
import { Link } from "react-router-dom";

const SignUpForm = () => {
    return (
        <Form className="form">
            <Stack gap={4} className="signup-form--title-container">
                <p className="form__label">Already have an account?&nbsp;
                    <Link to={'/log-in'}>Log in</Link>
                </p>
                <h1 className='form__title cds--type-heading-04'>Sign up for an account</h1>
            </Stack>
            <Stack gap={7}>
                <TextInput
                    id="form--email"
                    invalidText="Invalid error message."
                    labelText="E-mail"
                    size="md"
                />
                <Stack gap={4}><TextInput.PasswordInput
                    id="form--password"
                    invalidText="Invalid error message."
                    labelText="Password"
                    size="md"
                />
                    <TextInput.PasswordInput
                        id="form--password"
                        invalidText="Invalid error message."
                        labelText="Confirm password"
                        size="md"
                    /></Stack>
                <Button
                    kind="primary"
                    tabIndex={0}
                    type="submit"
                    renderIcon={ArrowRight}
                >Sign up</Button>
                <Stack gap={4} className="form--alt-login-container">
                    <p className="form--alt-login__label">Or use </p>
                    <Button
                        kind="tertiary"
                        tabIndex={0}
                        type="submit"
                        renderIcon={Login}
                    >Sign up with Google</Button>
                </Stack>
            </Stack>
        </Form>

    );
};

export default SignUpForm;