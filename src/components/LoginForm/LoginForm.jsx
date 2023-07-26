import {
    Form,
    Stack,
    TextInput,
    Button
} from '@carbon/react';
import { ArrowRight, Login } from '@carbon/icons-react';

const LoginForm = () => {

    return (
        <Form className="form">
            <div className="form--title-container">
                <h1 className='form__title cds--type-heading-04'>Log in to AlgoSculpt</h1>
            </div>
            <Stack gap={7}>
                <TextInput
                    id="form--email"
                    invalidText="Invalid error message."
                    labelText="E-mail"
                    size="md"
                    required
                    onChange={handleInputChange}
                />
                <TextInput.PasswordInput
                    id="form--password"
                    invalidText="Invalid error message."
                    labelText="Password"
                    size="md"
                    required
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
                        type="submit"
                        renderIcon={Login}
                    >Google Sign-in</Button>
                </div>
                <div className="form--signup-container">
                    <p className="form--signup__label">Don't have an account?</p>
                    <Button
                        className='form--submit'
                        kind="tertiary"
                        tabIndex={0}
                        type="submit"
                        renderIcon={ArrowRight}
                    >Create an account</Button>
                </div>
            </Stack>
        </Form>

    );
};

export default LoginForm;