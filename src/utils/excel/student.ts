import { Student } from "@/api/student";
import { SimpleTable } from ".";

const chinese: Map<String, String> = new Map<String, String>();
chinese.set("id", "学号");
chinese.set("name", "姓名");
chinese.set("gender", "性别");
chinese.set("grade", "年级");
chinese.set("password", "密码");

export class StudentSimpleTable extends SimpleTable {
    static header = {};

    constructor() {
        super();

        this.addHeader();
    }

    // addInfo(info: Student) {
    //     this.sheet.addRow(info);
    // }

    private addHeader() {
        const columnNames = Array.from(
            Object.keys(new Student()).map((key) => {
                chinese.get(key);
            })
        );
        this.sheet.addRow(columnNames);
    }
}
