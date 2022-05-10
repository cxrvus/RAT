"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sTable = void 0;
const xml_1 = require("./xml");
const TOTAL_WIDTH = 16.8;
const UNIT = 'cm';
const sTable = (settings) => {
    return (data) => {
        //BODY
        const rowCount = data.contents.length;
        const colCount = data.contents[0].length;
        const colWidth = settings.elementSettings.transform.width / colCount;
        const widthTag = (0, xml_1.tag)('TablixColumn', (0, xml_1.tag)('width', colWidth.toString() + UNIT));
        const columns = (0, xml_1.tag)('TablixCoulumns', widthTag.repeat(colCount));
        const body = (0, xml_1.tag)('TablixBody', columns);
        return (0, xml_1.tag)('Tablix', body);
    };
};
exports.sTable = sTable;
