"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//#region imports
const xml_1 = require("./xml");
const elementsLib = require("./elements");
//#endregion
const $main = () => {
    // console.log('aight');
    const table = elementsLib.sTable({
        elementSettings: {
            name: 'testTable',
            transform: {
                top: 0,
                left: 0,
                height: 0,
                width: 0
            },
            dataSetName: 'DataSet'
        }
    })({ contents: [['a', 'b'], ['c', 'd']] });
    // console.log(table);
    console.log((0, xml_1.indentXml)(table));
};
//#region tests
const tests = [
    //test: tag
    (0, xml_1.tag)('TagType') == '<TagType/>',
    (0, xml_1.tag)('TagType', 'Content') == '<TagType>Content</TagType>',
    (0, xml_1.tag)('TagType', 'Content', 'Name') == '<TagType Name="Name">Content</TagType>',
    (0, xml_1.tag)('TagType', 'Multiline\nContent') == '<TagType>Multiline Content</TagType>',
];
const testFailure = tests.findIndex(x => !x);
//#endregion
if (testFailure == -1)
    $main();
else
    console.log(`test #${testFailure} failed`);
