import { getPostsIds, getPostData } from '../../../lib/posts';
import MarkdownContent from '@/app/components/MarkdownContent';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GetStaticPaths } from 'next';

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



export const getStaticPaths: GetStaticPaths = async () => {
    const postsIds = getPostsIds();
    return {
        paths: postsIds.map((postId) => ({
            params: { id: encodeURI(postId) }
        })),
        fallback: false
    };
        
};