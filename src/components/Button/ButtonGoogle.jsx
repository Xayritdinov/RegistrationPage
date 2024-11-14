import './Button.css';
import googleLogo from './google.svg';

export const ButtonGoogle = () => {
    const handleClick = () => {
        window.open('https://accounts.google.com/signin');
    };

    return (
        <>
        
            <button className="btnGoogle" onClick={handleClick}>
                <img src={googleLogo} className="logoGoogle" alt="Google logo" />
                {" Sing Up with Google"}
            </button>
        </>
        
    );
};
