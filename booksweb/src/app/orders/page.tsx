import Navbar from "@/components/shared/Navbar";
import Link from "next/link";

async function getApiData() {
    let token = "22e7b0d95be26f1f399661aa6305d944fe2e173273c82defac5fef80b5adb4ca";
    let response = await fetch('https://simple-books-api.glitch.me/orders',
        {
            cache: 'no-store',
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    if (!response.ok) {
        throw new Error("Failed to Fetch Orders");
    }
    return response.json();
};



export default async function Orders() {
    let data = await getApiData();

    if (!data) return <div>Loading...</div>
    return (
        <div>
            <Navbar />
            <div className="mt-20">
                <h3 className="text-center font-semibold font-serif text-2xl sm:text-4xl text-gray-800">Orders Detail</h3>
                {data.map((item: any, index: number) =>
                    <div key={index} className="w-full flex justify-between px-28 py-3 border-2 shadow-lg my-8">
                        <h3>
                            {item.id}
                        </h3>
                        <div className="flex gap-9">
                            <p>{item.quantity}</p>
                            <Link href={`/confirmDel/${item.id}`}><button>Del</button></Link>
                        </div>
                    </div>
                )}
                <p className="px-28 py-3">Total orders : <strong className="text-purple-900">{data.length}</strong></p>
            </div>
            <p className="text-sm text-gray-700 font-serif text-center">Changes may not reflect suddenly.you have to refresh the page if necessory.</p>
        </div>
    )
}