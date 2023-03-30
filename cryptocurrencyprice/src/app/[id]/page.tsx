"use client"
import { Apidata } from "@/components/shared/context/ApiData";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react"


export default function Home({ params }: { params: { id: string } }) {
    let fetcheDataReturn: any = useContext(Apidata);
    let dataToUse = fetcheDataReturn?.data.find((item: any) => item.id === params.id);

    return (
        <div>{
            dataToUse ?
                <div>
                    <div className="p-7 bg-gray-100">
                        <h1 className="text-center font-bold text-4xl text-gray-800">{dataToUse.name}<span className="ml-1 text-xs font-thin">analytics</span></h1>
                    </div>
                    <div className="pt-10">
                        <h4 className="text-center text-purple-900 text-xl font-semibold">Details</h4>
                    </div>
                    <div className="pb-16 pt-6 px-20 leading-10">
                        <p>{dataToUse.name} Rank in our list : {dataToUse.rank}</p>
                        <p>{dataToUse.name} Ssymbol : {dataToUse.symbol}</p>
                        <p>{dataToUse.name} supply in market : {dataToUse.supply}</p>
                        <p>{dataToUse.name} Maximum supply in market : {dataToUse.maxSupply}</p>
                        <p>{dataToUse.name} Price in marketCapUsd : {dataToUse.marketCapUsd}</p>
                        <p>{dataToUse.name} Volume of Usd in 24Hr: {dataToUse.volumeUsd24Hr}</p>
                        <p>{dataToUse.name} Price change ratio in 24 hours : {dataToUse.changePercent24Hr}</p>
                    </div>
                    <div className="w-full space-y-4 flex flex-col items-center justify-center">
                        <h3 className="text-center">Current Price of {dataToUse.name} : {dataToUse.priceUsd}</h3>
                        <button className="py-2 px-10 bg-gray-200 hover:bg-gray-300 rounded-md"><Link target="_blank" href={dataToUse.explorer}>Want to Explore More</Link></button>
                    </div>
                </div>
                : <div className="flex justify-center items-center h-screen py-20"><Image width={200} height={200} src="/Preloader.gif" alt="Preloader" /></div>
        }</div>
    )
};