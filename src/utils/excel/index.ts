import * as ExcelJS from "exceljs";

const getValues = (info: any) => {
    return Array.from(Object.values(info));
};

export class SimpleTable {
    book: ExcelJS.Workbook;
    sheet: ExcelJS.Worksheet;

    constructor() {
        this.book = new ExcelJS.Workbook();
        this.book.addWorksheet();
        this.sheet = this.book.worksheets[0];

        // sheet.addRow([1, 2, 3, 4, 5]);
    }

    addInfo(info: any) {
        // const values = getValues(info);
        // console.log("values: ", values);
        this.sheet.addRow(getValues(info));
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

    debug() {
        console.log(this.sheet.rowCount);
        const count = this.sheet.rowCount;
        for (let i = 0; i < count; i++) {
            console.log(this.sheet.getRow(i + 1));
        }
    }
}
