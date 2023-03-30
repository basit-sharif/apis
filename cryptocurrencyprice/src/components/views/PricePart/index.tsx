import Image from "next/image";
import { useEffect, useState } from "react";

// Data fetching from coincap api of cryptocrruncy
async function fetchDataFromApi() {
  let response = await fetch("https://api.coincap.io/v2/assets/");
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export default function PricePart() {
  const [fetcheDataReturn, setFetcheDataReturn] = useState<any>();

  async function startFetching() {
    setFetcheDataReturn(await fetchDataFromApi());
  }
  useEffect(() => {
    startFetching();
  }, [])


  return (
    <div>

      {/* Heading */}
      <div className="flex flex-col justify-center items-center py-8 gap-4 ">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">Cryptocurrency Prices</h1>
        <h4 className="font-serif text-xs sm:text-sm font-extralight text-gray-600">Here you will get some kind of data about cryptocurrency</h4>
      </div>

      {/* Time stamp area */}
      <div className="text-gray-500 flex gap-4 justify-center py-2">
        <h3>
          Timestamp:
        </h3>
        <p>
          {
            fetcheDataReturn !== undefined ? `${fetcheDataReturn?.timestamp}` : "Loading..."
          }
        </p>
      </div>

      {/* Prices */}
      <div className=" max-w-[90rem] mx-auto mt-6">
        <div className="w-52 py-8 mx-auto cursor-pointer">
          <a href="/">
            <h3 className="text-4xl text-cyan-900 font-semibold text-center    relative after:bg-black after:content-[' '] after:h-[2px] after:w-[0%] after:left-0 after:-bottom-1 after:absolute after:rounded-3xl after:duration-300 hover:after:w-full ">Latest Prices</h3>
          </a>
        </div>
        {
          fetcheDataReturn ?
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 gap-4">{
              (fetcheDataReturn && fetcheDataReturn.data.map((item: any, index: number) =>
                <div key={index + 345} className="shadow-md w-full py-10 px-6 rounded-md border-t-4 text-purple-900">
                  <div>
                    <h2>{item.name} ({item.symbol})</h2>
                    <p>${item.priceUsd}</p>
                    <a target="_blank" href={item.explorer} className=" group font-serif font-extralight text-sm">
                      Explore
                      <span className="text-gray-700 opacity-0 ml-2 group-hover:opacity-100 duration-300  text-lg">
                        -
                        <span className="-ml-[0.18rem]">
                          -
                        </span>
                        <span className="-ml-[0.30rem]">
                          &gt;
                        </span>
                      </span>
                    </a>
                  </div>
                  <a href={item.id}><button className="text-center bg-gray-100 py-2 px-4 mt-4 rounded-sm w-full hover:bg-gray-200 duration-300">View More</button></a>
                </div>
              ))}
            </div>
            : <div className="flex justify-center py-20"><Image width={200} height={200} src="/Preloader.gif" alt="Preloader" /></div>
        }
      </div>
    </div>
  )
}
