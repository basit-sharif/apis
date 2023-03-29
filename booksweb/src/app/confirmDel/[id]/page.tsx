import Button from "@/components/shared/Button";
import Navbar from "@/components/shared/Navbar";
import Link from "next/link";

async function deleteData(id: any) {
    let token = "22e7b0d95be26f1f399661aa6305d944fe2e173273c82defac5fef80b5adb4ca";
    let response = await fetch(`https://simple-books-api.glitch.me/orders/${id}`, {
        method: "DELETE",
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
export default function ConfirmDel({ params }: { params: { id: string } }) {
    deleteData(params.id);
    return (
        <div>
            <Navbar />
            <div className="mx-auto text-center py-20">
                <div className="px-40 py-20 bg-gray-100">
                    <p>Your Order is Deleted</p>
                    <Link href="/">
                        <Button text="Return to Home" />
                    </Link>
                </div>
            </div>
        </div>
    )
}