//#region imports
import { tag, indentXml} from './xml';

import elementsLib = require('./elements');
//#endregion



const $main = (): void => {
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
    })( { contents: [['a', 'b'], ['c', 'd']] });

    // console.log(table);
    console.log(indentXml(table));
}



//#region tests
const tests: boolean[] = [
    //test: tag
    tag('TagType') == '<TagType/>',
    tag('TagType', 'Content') == '<TagType>Content</TagType>',
    tag('TagType', 'Content', 'Name') == '<TagType Name="Name">Content</TagType>',
    tag('TagType', 'Multiline\nContent') == '<TagType>Multiline Content</TagType>',
];
const testFailure = tests.findIndex(x => !x);

//#endregion



if(testFailure == -1) $main();
else console.log(`test #${testFailure} failed`)