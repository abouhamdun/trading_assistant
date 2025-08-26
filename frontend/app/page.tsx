import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <div className="text-4xl text-center">Home Page</div>
      
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      
      <p className="text-lg text-center">
        Welcome to the Next.js application!
      </p>
    <Link href="/login">Login Page</Link>
      
    </div>
  );
}
