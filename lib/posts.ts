import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
export type Post = {
    id: string,
    title: string,
    date: string
    content: string
};

export const getPostsIds = () :  string[] => {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => (
        path.parse(fileName).name
    ));
};

export const getPost = (id: string) : Post | undefined => {
    try {
        const fileName = path.join(postsDirectory, `${id}.md`);
        const fileContent = fs.readFileSync(fileName, 'utf-8');
        const matterContent = matter(fileContent);
    
        return {
            id: id,
            title: matterContent.data.title,
            date: matterContent.data.date,
            content: matterContent.content
        };
    } catch(err) {
        return undefined;
    }

};

export const getSortedPosts = () : Post[] => {
    const ids = getPostsIds();
    const posts: Post[] = [];

    ids.forEach((id: string) => {
        const post = getPost(id);
        if(post)
            posts.push(post);
    });

    return posts.sort((a, b) => {
        if(a.date < b.date) {
            return 1
        } else {
            return -1;
        }
    });
};