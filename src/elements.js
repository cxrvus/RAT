"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sTable = void 0;
const tag_1 = require("./tag");
const TOTAL_WIDTH = 16.8;
const UNIT = 'cm';
const sTable = (settings) => {
    return (data) => {
        //BODY
        const rowCount = data.contents.length;
        const colCount = data.contents[0].length;
        const colWidth = settings.elementSettings.transform.width / colCount;
        const widthTag = (0, tag_1.tag)('TablixColumn', (0, tag_1.tag)('width', colWidth.toString() + UNIT));
        const columns = (0, tag_1.tag)('TablixCoulumns', widthTag.repeat(colCount));
        const body = (0, tag_1.tag)('TablixBody', columns);
        return (0, tag_1.tag)('tablix', body);
    };
};
exports.sTable = sTable;
