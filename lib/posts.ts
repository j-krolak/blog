import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');



export const getPostsIds = () :  string[] => {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => (
        path.parse(fileName).name
    ));
};


export const getPostData = (id: string) : any => {
    const fileName = path.join(postsDirectory, `${id}.md`);
    const fileContent = fs.readFileSync(fileName, 'utf-8');
    const matterContent = matter(fileContent);

    return matterContent;
};