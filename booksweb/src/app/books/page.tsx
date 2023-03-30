import Navbar from "@/components/shared/Navbar";
import DisplayBooksCards from "@/components/views/DisplayBooksCards";

async function getBooksData() {
    const res = await fetch('https://simple-books-api.glitch.me/books');
    return res.json();
}
export default async function Books() {
    let booksData = await getBooksData();
    return (
        <div>
            <Navbar />
            <div className="mt-10">
                <DisplayBooksCards data={booksData} />
            </div>
        </div>
    )
}