import Link from "next/link";
import { Post } from "@/lib/posts";
import Date from "./Date";

const PostPreview = ({post} : {post: Post}) => {

    return (
    <Link  href={`/post/${post.id}`} className="p-4 bg-gray-800 rounded-xl hover:bg-green-900 hover:rounded-md transition-all duration-300">
        <h1>{post.title}</h1>
        <Date dateString={post.date}/>
    </Link>
    );
};

export default PostPreview;