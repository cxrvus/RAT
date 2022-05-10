// todo: handle indentation
export const genericTag = (tagType: string) => {
    return (content: string = '', name: string = '') => {
        const maybeLineBreak = content.indexOf('\n') != -1 ? '\n' : '';
        return `  <${tagType}${name ? ` Name="${name}"` : ''}`
            + (
                content
                ? `>${maybeLineBreak}${content}${maybeLineBreak}</${tagType}>`
                : `/>`
            );
    }
}

export const tag = (tagType: string, content: string = '', name: string = '') => {
    return genericTag(tagType)(content, name);
}