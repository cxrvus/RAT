// source: https://stackoverflow.com/a/49458964 (modified)
export const indentXml = (xmlstr: string): string => {
    const _indentingStr = '  ';
    let [formatted, indent] = ['', ''];
    xmlstr
        .split(/>\s*</)
        .forEach(x => {
            if (x.match( /^\/\w/ )) indent = indent.substring(_indentingStr.length);
            formatted += `${indent}<${x}>\n`;
            if (x.match( /^<?\w[^>]*[^\/]$/ )) indent += _indentingStr;
        });
    return formatted.substring(1, formatted.length - 2);
}

export const genericTag = (tagType: string) => {
    return (content: string = '', name: string = '') => {
        return `<${tagType}${name ? ` Name="${name}"` : ''}`
            + (content ? `>${content.replace(/\r?\n/g, ' ')}</${tagType}>` : `/>`);
    }
}

export const tag = (tagType: string, content: string = '', name: string = '') => {
    return genericTag(tagType)(content, name);
}