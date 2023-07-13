import { getPostsIds, getPostData } from '@/lib/posts';
import MarkdownContent from '@/app/components/MarkdownContent';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function PostPage(props: any) {

    const post = getPostData(props.params.id);
    if(!post)
        return notFound();

    return (
    <>
        <h1>{post?.data?.title}</h1>
        <MarkdownContent matterContent={post?.content} />
        <Link href="/">Back to home</Link>
    </>
    );
};



export const generateStaticParams = async () => {
    const postsIds = getPostsIds();
    return postsIds.map((postId) => ({
        id: postId
    }));
        
};