import Link from "next/link";
import Image from "next/image";

export default function Header({ home }: { home?: boolean }) {
    return (
        <div  className="text-center p-8 my-8 bg-gray-800 rounded-md">
            <Link href="/" className="text-3xl text-green-500 font-bold">Jakub's Tech Blog</Link>
           
            {home && (
                <p className="text-lg my-6 text-white">
                    Hi. I'm Jakub Królak. <br/>
                    I've created this blog wit Next.js 13, Tailwind CSS and TypeScript! <br/>
                    <a href="https://github.com/j-krolak/blog" className="text-blue-300 underline hover:decoration-2" target="blank" >Source code</a>
                </p>
            )}
          

        </div>
    );
}