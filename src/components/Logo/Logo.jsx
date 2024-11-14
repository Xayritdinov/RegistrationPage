import './Logo.css'
import reactLogo from './react.svg'
export const Logo = () => {
    return (
        <>
            <div>        
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo" alt="React logo" />
                </a>
            </div>
        </>
    )
}