const tag = (tagType: string, content: string = '', name: string = '') => {
    const maybeLineBreak = content.indexOf('\n') != -1 ? '\n' : '';
    return `  <${tagType}${name ? ` Name="${name}"` : ''}`
        + (content
            ? `>${maybeLineBreak}${content}${maybeLineBreak}</${tagType}>`
            : `/>`
        );
}

const tests = [

]
const [a,b,c] = process.argv.slice(2);
console.log(tag(a,b,c));
console.log([a,b,c]);