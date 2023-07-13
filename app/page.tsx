import { getSortedPosts } from "@/lib/posts"
import PostPreview from "./components/PostPreview";
import Header from "./components/Header";

export default function Home() {
  const posts = getSortedPosts();
  return (
    <>
      <header>
        <Header home/>
      </header>
      <main>
        <div className="grid grid-cols-2 gap-5">
          {posts.map((post) => (
            <PostPreview post={post} key={post.id}/>
          ))}
        </div>
    </main>
    </>
  )
}
