const BEGIN_GRADER = 2020;
// TODO: 需要根据实际年份计算出截至年份
const END_GRADER = 2024;

export const getGradeOptions = (hasAll: boolean = false) => {
    const gradeOptions = [];

    if (hasAll) {
        gradeOptions.push({
            label: "所有",
            value: 0,
        });
    }

    return getGrades(BEGIN_GRADER, END_GRADER).map((grade) => {
        return {
            label: grade.toString(),
            value: grade,
        };
    });
};

export const getGrades = (begin: number, end: number) => {
    var grades = [];
    for (let i = begin; i <= end; i++) {
        grades.push(i);
    }
    return grades;
};
