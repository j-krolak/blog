import { getPost, getPostsIds } from '@/lib/posts';
import MarkdownContent from '@/app/components/MarkdownContent';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header';
import Date from '@/app/components/Date';

export default function PostPage(props: any) {

    const post = getPost(props.params.id);
    if(!post)
        return notFound();

    return (
    <>
        <Header/>
        <main>
            <title>{post.title}</title>
            <h1 className="font-bold text-3xl mt-6">{post.title}</h1>
            <Date dateString={post.date}/>
            <div className="mb-6"/>
            <MarkdownContent matterContent={post.content} />
            <Link className="text-xl block my-6 hover:text-green-500" href="/">← Back to home</Link>
        </main>
    </>
    );
};



export const generateStaticParams = async () => {
    const postsIds = getPostsIds();
    return postsIds.map((postId) => ({
        id: postId
    }));
        
};