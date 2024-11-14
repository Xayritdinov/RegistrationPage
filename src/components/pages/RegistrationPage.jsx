import './RegistrationPage.css'
import { Button } from "../Button/Button"
import { Heading } from "../Heading/Heading"
import { Info } from "../Info/Info"
import { Input } from "../Input/Input"
import { ButtonGoogle } from '../Button/ButtonGoogle'


export const RegistrationPage = () => {
    return (
        <>           
            <form action="" className="card">
                <Heading text="Sing Up"/>
                <Input inputPlaceholder={"Name"} inputType={"text"}/>
                <Input inputPlaceholder={"Email"} inputType={"email"}/>
                <Input inputPlaceholder={"Password"} inputType={"password"}/>
                <Button text={"Sing Up"}/>
                <Info inputInfo={
                    <>
                        {"Alredy have an account?  "}
                        <a href="https://accounts.google.com/signin" className='loginLink' target="_blank">Log In</a>
                    </>
                }/>
                <Info inputInfo={"_______________or________________"}/>
                <ButtonGoogle/>                
            </form>
        </>
    )
}