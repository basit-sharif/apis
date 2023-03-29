import Navbar from "@/components/shared/Navbar";
import DisplayBooksCards from "@/components/views/DisplayBooksCards";
import HeroSection from "@/components/views/HeroSection";

async function getBooksData() {
  const res = await fetch('https://simple-books-api.glitch.me/books');
  return res.json();
}

export default async function Home() {
  let booksData = await getBooksData();

  return (
    <div>
      <Navbar />
      <HeroSection />
      <DisplayBooksCards data={booksData} />
    </div>
  )
}