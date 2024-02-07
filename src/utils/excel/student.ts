import * as ExcelJS from "exceljs";

import { Student } from "@/api/student";
import {
    SimpleTable,
    parseCellString,
    parseCellNumber,
    createBookFromBlob,
} from ".";

const chinese: Map<String, String> = new Map<String, String>();
chinese.set("id", "学号");
chinese.set("name", "姓名");
chinese.set("gender", "性别");
chinese.set("grade", "年级");
chinese.set("password", "密码");

const mapRowToStudent = (row: ExcelJS.Row) => {
    return new Student(
        parseCellNumber(row, 1),
        parseCellString(row, 2),
        parseCellNumber(row, 3),
        parseCellNumber(row, 4),
        parseCellString(row, 5)
    );
};

export class StudentSimpleTable extends SimpleTable {
    list: Student[] = [];

    static header = {};

    constructor() {
        super();
    }

    static async fromBlob(blob: Blob): Promise<StudentSimpleTable> {
        let list = [] as Student[];

        const book = await createBookFromBlob(blob);

        console.log(book.worksheets);

        const sheet = book.worksheets[0];

        if (sheet == undefined) {
        } else {
            console.log("count: ", sheet.rowCount);
            const rows = sheet.getRows(2, sheet.rowCount - 1);
            if (rows != undefined) {
                list = rows.map(mapRowToStudent);
            }
        }

        const table = new StudentSimpleTable();
        table.list = list;
        table.book = book;

        console.log(list);

        return table;
    }

    // addInfo(info: Student) {
    //     this.sheet.addRow(info);
    // }

    // private addHeader() {
    //     const columnNames = Array.from(
    //         Object.keys(new Student()).map((key) => {
    //             chinese.get(key);
    //         })
    //     );
    //     this.sheet.addRow(columnNames);
    // }
}
