import Image from "next/image";

export default function Navbar() {
    return (
        <a href="/">
            <div className="hidden sm:flex items-center space-x-3 absolute top-9 left-6">
                <Image width={40} height={40} src="/home.png" alt="Home" />
                <h5>Return to Home</h5>
            </div>
        </a>
    )
}