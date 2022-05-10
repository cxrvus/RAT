"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tag = exports.genericTag = void 0;
// todo: handle indentation
const genericTag = (tagType) => {
    return (content = '', name = '') => {
        const maybeLineBreak = content.indexOf('\n') != -1 ? '\n' : '';
        return `  <${tagType}${name ? ` Name="${name}"` : ''}`
            + (content
                ? `>${maybeLineBreak}${content}${maybeLineBreak}</${tagType}>`
                : `/>`);
    };
};
exports.genericTag = genericTag;
const tag = (tagType, content = '', name = '') => {
    return (0, exports.genericTag)(tagType)(content, name);
};
exports.tag = tag;
