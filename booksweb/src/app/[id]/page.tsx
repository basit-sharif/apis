import { Book } from "@/components/assets";
import Button from "@/components/shared/Button";
import Navbar from "@/components/shared/Navbar";
import OnScreen from "@/components/views/OnScreen";
import Image from "next/image";
import { useState } from "react"

async function getBooksData() {
    const res = await fetch('https://simple-books-api.glitch.me/books');
    return res.json();
}

export default async function BookReview({ params }: { params: { id: string } }) {

    let booksData = await getBooksData();
    let displyedData = booksData.find((item: any) => item.id === Number(params.id));
    if (!displyedData) return <p>Loading...</p>

    return (
        <div>
            <Navbar />
            <h1 className="text-center py-6 text-xl sm:text-4xl text-gray-800 font-semibold ">Book Details</h1>
            <div className="flex flex-col-reverse md:flex-row justify-around items-center">
                <div className="space-y-4">
                    <h4 className="text-xl text-purple-900 font-semibold">
                        {displyedData.name}
                    </h4>
                    <p>Price : Not sure</p>
                    <p className="flex gap-2"><span className="flex w-6 h-6 justify-center items-center bg-purple-900 text-gray-200 rounded-full">i</span>{displyedData.available ? "Available" : "Not available"} in stock</p>
                    <div className="mt-4 flex space-x-4">
                        <OnScreen id={displyedData.id} available={displyedData.available} />
                        <Button text="Add to Cart" />
                    </div>
                </div>
                <div className="w-96 ">
                    <Image src={Book} alt="Book" />
                </div>
            </div>
        </div>
    )
}