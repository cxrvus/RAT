import { tag } from './xml';

const TOTAL_WIDTH = 16.8;
const UNIT = 'cm';

type Transform = {
    top: number;
    left: number;
    height: number;
    width: number;
}


type Style = {
    
}

type ElementSettings = {
    name: string;
    transform: Transform
    dataSetName?: string;
}

// todo: add choice of style presets
type STableSettings = {
    elementSettings: ElementSettings;
}

type STableData = {
    contents: string[][];
}



export const sTable = (settings: STableSettings) => {
    return (data: STableData) => {
        //BODY
        const rowCount = data.contents.length;
        const colCount = data.contents[0].length;
        const colWidth = settings.elementSettings.transform.width / colCount;
        const widthTag = tag('TablixColumn', tag('width', colWidth.toString()+UNIT));
        const columns = tag('TablixCoulumns', widthTag.repeat(colCount));

        const body = tag('TablixBody',
            columns
        );

        return tag('Tablix', body);
    }
}