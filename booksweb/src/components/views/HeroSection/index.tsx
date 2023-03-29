"use client"
import { DownArrow, HeroSectionImage } from "@/components/assets";
import Image from "next/image";
import Typed from "typed.js"
import { useEffect, useRef } from "react";
import Button from "@/components/shared/Button";

export default function HeroSection() {
    const el = useRef<HTMLSpanElement>(null);
    useEffect(() => {

        const typed = new Typed(el.current ? el.current : "", {
            strings: ["There is no Friends as loyal as Books.",
                "A book is a Gift you can open again and again.",
                "Books let you travel without moving your feets.",
                "A room without books is like body without soul.",
                "Take a good book to bed with you - books dn't snore.",
                "Books are a uniquely portable magic.",
                "Fiction reveals truths that reality obscures.",
                "Books are the traning weight of mind.",
                "A reader lives a thousand lives before he die."
            ],
            // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <div className="-z-50 fixed inset-0 h-[34rem] ">
                <Image className="h-full w-full object-cover 2xl:object-center object-left-top" src={HeroSectionImage} alt="Book Reading" />
            </div>
            <div className="w-full text-center sm:text-left h-full pl-0 sm:pl-20 py-[10.3rem] sm:px-3 px-0">
                <h1 className="h-28 max-w-2xl text-2xl sm:text-3xl md:text-5xl text-gray-800 font-semibold">
                    <span ref={el}></span>
                </h1>
                <div className="sm:block">
                    <Button text="Browes All Books" />
                </div>
            </div>
            <div className="flex justify-center py-3">
                <div className="bg-white cursor-pointer animate-bounce p-2 rounded-full border-2 border-pink-300 shadow-2xl">
                    <a href="#latest">
                        <Image width={35} height={30} src={DownArrow} alt="Down Arrow" />
                    </a>
                </div>
            </div>
        </div>
    )
};