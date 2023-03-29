import Button from "@/components/shared/Button";
import Link from "next/link";

export default async function Confirm({ params }: { params: { data: string } }) {
  let orderData = (params.data).split("-");
  let bookId = orderData[0];
  let customerName = orderData[1];

  let response = await fetch('https://simple-books-api.glitch.me/orders', {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      'Authorization': "22e7b0d95be26f1f399661aa6305d944fe2e173273c82defac5fef80b5adb4ca",
    },
    body: JSON.stringify({
      bookId: bookId,
      customerName: customerName,
    })
  });
  if (!response.ok) {
    throw new Error("Failed to Fetch Orders");
  }
  if (!response) return <div>Loading...</div>
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800">
        Your Order is Confirmed
      </h1>
      <Link href="/"><Button text="Return to Home" /></Link>
      <Link href="/orders"><Button text="Check Orders" /></Link>
    </div>
  )
}