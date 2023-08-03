import { AuthErrorCodes } from 'firebase/auth';
export let isLoginError = false;

export function ErrorNotice(description) {
    return (
        <div>
            <p>
                Error: {description}
            </p>
        </div>
    );
}

export function handleLoginError(error, setError) {
    console.log(error.code);
    if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
        isLoginError = true;
        setError("Invalid Password")
    }

}
