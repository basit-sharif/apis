"use client"
import { Book, Close } from "@/components/assets";
import Button from "@/components/shared/Button";
import Image from "next/image";
import { useState } from "react";

export default function OnScreen({ id, available }: { id: number, available: string }) {
    const [onScreen, setOnScreen] = useState(false);
    const [userInformation, setUserInformation] = useState(false);
    const [errorScreen, setErrorScreen] = useState(false);
    // form Data
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [quantity, setQuantity] = useState<number>(1);


    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    function changeValue(e: any) {
        switch (e.target.id) {
            case "firstName":
                setFirstName(e.target.value);
                break;
            case "secondName":
                setSecondName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "quantity":
                setQuantity(e.target.value);
                break;
        };
    };
    function ValidateData(firstName: string, secondName: string, email: string, quantity: number) {
        if (email) {
            let emailValidatoin = validateEmail(email);
            if (!emailValidatoin) {
                alert("Error : Please Provide Valid Email Address");
            }
        }
        if (!firstName) {
            alert("Error: Please fill out your firstName")
        } else if (!secondName) {
            alert("Error: Please fill out your secondName")
        }
        else if (!email) {
            alert("Error: Please fill your Email address")
        } else if (!quantity) {
            alert("Error:Quantity is required Please tell us how many books you need?")
        } else {
            window.location.href = `/confirm/${id}-${firstName + secondName}`;
        }
    }

    return (
        <div>
            <div onClick={() => {
                setOnScreen(true);
                if (available) {
                    setUserInformation(true);
                } else {
                    setErrorScreen(true);
                };
            }}>
                <Button text="Buy Now" />
            </div>
            <div onClick={() => { setOnScreen(false); setErrorScreen(false); setUserInformation(false); }} className={` ${onScreen ? "block" : "hidden"} z-10 fixed inset-0 bg-gray-800 opacity-70`}></div>
            <div className={`py-4 px-16 flex flex-col justify-around items-center ${userInformation ? "visible duration-500 " : "invisible duration-[105ms] scale-50"} fixed inset-8 sm:inset-14 md:inset-16 lg:inset-28 xl:inset-32 bg-cyan-100 z-50 border-2 shadow-2xl`}>
                <div className="w-full flex justify-end">
                    <Image className="cursor-pointer" onClick={() => { setOnScreen(false); setUserInformation(false); }} width={27} height={27} src={Close} alt="Close" />
                </div>
                <div className="w-full hidden sm:flex justify-between items-center">
                    {/* Form */}
                    <div className="flex flex-col lg:flex-row justify-around items-center">
                        <div className="text-subHeading grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg  ">
                            <div className="flex flex-col items-start">
                                <label htmlFor="firstName" >First Name:</label>
                                <input value={firstName} onChange={changeValue} placeholder="John" className="inputField w-full" tabIndex={0} id="firstName" type="text" />
                            </div>
                            <div className="flex flex-col items-start  ">
                                <label htmlFor="secondName" >Second Name:</label>
                                <input value={secondName} onChange={changeValue} placeholder="Doe" className="inputField w-full" tabIndex={0} id="secondName" type="text" />
                            </div>
                            <div className="flex flex-col items-start ">
                                <label htmlFor="email" >Your E-Mail Address:</label>
                                <input value={email} onChange={changeValue} placeholder="i.e, Jondoe@gmail.com" className="inputField w-full" tabIndex={0} id="email" type="text" />
                            </div>
                            <div className="flex flex-col items-start ">
                                <label htmlFor="quantity" >Quantity:</label>
                                <input value={quantity} onChange={changeValue} placeholder="1" className="inputField w-full" tabIndex={0} id="quantity" type="number" />
                            </div>
                            <div className="flex flex-col items-start  sm:col-span-2">
                                <label htmlFor="country">Choose Your Country:</label>
                                <select className="inputField w-full" tabIndex={0} name="country" id="country">
                                    <option selected value="Pakistan">Pakistan</option>
                                    <option value="India">India</option>
                                    <option value="Canada">Canada</option>
                                    <option value="UAE">UAE(United Arab Emarat)</option>
                                    <option value="USA">USA(United State of America)</option>
                                    <option value="Russia">Russia</option>
                                    <option value="SoudiaArabia">Soudia Arabia</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Turkey">Turkey</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <Image width={250} height={250} src={Book} alt="Book" />
                </div>
                <div onClick={() => { ValidateData(firstName, secondName, email, quantity) }}>
                    <Button text="Place Order" />
                </div>
                {/* Error Screen */}
                <div className={`${errorScreen ? "visible scale-100 duration-300" : "invisible hidden scale-50 duration-150"} bg-gray-100 p-10 sm:p-20 sm:text-4xl text-gray-800 font-semibold `}>
                    Sorry : Stock is not available.
                </div>
            </div>
        </div>
    )
}