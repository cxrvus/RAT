"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tag = exports.genericTag = exports.indentXml = void 0;
// source: https://stackoverflow.com/a/49458964 (modified)
const indentXml = (xmlstr) => {
    const _indentingStr = '  ';
    let [formatted, indent] = ['', ''];
    xmlstr
        .split(/>\s*</)
        .forEach(x => {
        if (x.match(/^\/\w/))
            indent = indent.substring(_indentingStr.length);
        formatted += `${indent}<${x}>\n`;
        if (x.match(/^<?\w[^>]*[^\/]$/))
            indent += _indentingStr;
    });
    return formatted.substring(1, formatted.length - 2);
};
exports.indentXml = indentXml;
const genericTag = (tagType) => {
    return (content = '', name = '') => {
        return `<${tagType}${name ? ` Name="${name}"` : ''}`
            + (content ? `>${content.replace(/\r?\n/g, ' ')}</${tagType}>` : `/>`);
    };
};
exports.genericTag = genericTag;
const tag = (tagType, content = '', name = '') => {
    return (0, exports.genericTag)(tagType)(content, name);
};
exports.tag = tag;
