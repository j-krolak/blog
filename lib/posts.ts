import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
type Post = GrayMatterFile<string>;

export const getPostsIds = () :  string[] => {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => (
        path.parse(fileName).name
    ));
};


export const getPostData = (id: string) : Post | undefined => {
    try {
        const fileName = path.join(postsDirectory, `${id}.md`);
        const fileContent = fs.readFileSync(fileName, 'utf-8');
        const matterContent: Post = matter(fileContent);
    
        return matterContent;
    } catch(err) {
        return undefined;
    }

};