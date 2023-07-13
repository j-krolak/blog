import { remark } from 'remark';
import remarkHtml from 'remark-html';

const MarkdownContent = ({matterContent, ...props}: {matterContent: string}) => {
    const processedContent = remark().use(remarkHtml).processSync(matterContent).toString();
    return (
        <div className="text-lg markdown" dangerouslySetInnerHTML={{__html:processedContent}} {...props}></div>
    );
}


export default MarkdownContent;