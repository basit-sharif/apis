import { Book } from "@/components/assets";
import Image from "next/image";

export default function Cards({ dataToMap }: any) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {dataToMap.map((item: any, index: number) =>
                <a key={index + 4} href={item.id}>
                    <div className="relative py-10 px-6 shadow-xl border-t-2 border-r-2 border-l-2 ">
                        <h2>Book Name is : {item.name}</h2>
                        <h4>Type : (Book)</h4>
                        <p className="text-center text-sm text-purple-400 mt-4">{item.available ? "Abvailable in our Stock" : "Not Available in our Stock"}</p>
                        <Image className="absolute top-6 right-6" width={100} height={100} src={Book} alt="Book" />
                    </div>
                </a>
            )}
        </div>
    )
}