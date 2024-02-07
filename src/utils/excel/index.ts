import * as ExcelJS from "exceljs";

const getValues = (info: any) => {
    return Array.from(Object.values(info));
};

export const parseCellString = (row: ExcelJS.Row, index: number) => {
    const cell = row.getCell(index);

    return cell.value != undefined ? cell.value.toString() : undefined;
};

export const parseCellNumber = (row: ExcelJS.Row, index: number) => {
    const cell = row.getCell(index);

    return cell.value != undefined
        ? Number.parseInt(cell.value.toString())
        : undefined;
};

export const createBookFromBlob = async (blob: Blob) => {
    const book = new ExcelJS.Workbook();
    await book.xlsx.load(await blob.arrayBuffer());
    return book;
};

export class SimpleTable {
    book: ExcelJS.Workbook;

    constructor() {
        this.book = new ExcelJS.Workbook();
    }

    static async fromBlob(blob: Blob): Promise<SimpleTable> {
        const table = new SimpleTable();
        await table.book.xlsx.load(await blob.arrayBuffer());
        console.log(table);
        console.log(table.book.worksheets);

        const sheet = table.book.getWorksheet(1);
        if (sheet != undefined) {
            for (let i = 0; i < sheet.rowCount; i++) {
                console.log(sheet.getRow(i));
            }
        }

        return table;
    }

    addInfo(info: any) {
        // const values = getValues(info);
        // console.log("values: ", values);
        // this.book.getWorksheet(0).addRow(getValues(info));
    }

    async toURL() {
        const buffer = await this.book.xlsx.writeBuffer();

        const url = window.URL.createObjectURL(
            new Blob([buffer], {
                type: "application/vnd.ms-excel",
            })
        );
        return url;
    }

    // debug() {
    //     console.log(this.sheet.rowCount);
    //     const count = this.sheet.rowCount;
    //     for (let i = 0; i < count; i++) {
    //         console.log(this.sheet.getRow(i + 1));
    //     }
    // }
}
