import Link from "next/link";
import { getPostData } from "@/lib/posts";

const PostPreview = ({id} : {id: string}) => {
    const post = getPostData(id);

    return (
    <>
        <Link href={`/post/${id}`}>{post?.data?.title}</Link>
    </>
    );
};

export default PostPreview;