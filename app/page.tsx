import Link from "next/link";
import { getPostsIds } from "@/lib/posts"
import PostPreview from "./components/PostPreview";

export default function Home() {
  const postsIds = getPostsIds();
  
  return (
    <main>
      <h1>{"Hi! I'm Jakub Krolak"}</h1>
      <p>
        {"I'm passionat of programic, mathematic and music etc."}
      </p>
      {postsIds.map((id) => (
        <PostPreview id={id} key={id}/>
      ))}
    </main>
  )
}
