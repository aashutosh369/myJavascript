// Student Grade Management System

// Problem Statement

// You're building a student grade management system for a university. You have an array of student objects with properties: name, rollNumber, marks, attendance, and department.

// Write a function analyzeStudents(students, criteria) that:

//     Filters students based on:
//         Minimum marks
//         Minimum attendance percentage
//         Department (or all departments if null)

//     Calculates grade for each student:
//         A: 90+
//         B: 80–89
//         C: 70–79
//         D: 60–69
//         F: <60

//     Sorts the selected students by marks in descending order.

//     Groups students by grade and returns a count for each grade.

//     Returns the top 3 students along with their calculated GPA (marks / 10).

// Input Example

// const students = [
//   { name: "Alice", rollNumber: 101, marks: 92, attendance: 95, department: "CS" },
//   { name: "Bob", rollNumber: 102, marks: 78, attendance: 85, department: "CS" },
//   { name: "Charlie", rollNumber: 103, marks: 65, attendance: 70, department: "ECE" },
//   { name: "David", rollNumber: 104, marks: 88, attendance: 92, department: "CS" },
//   { name: "Eva", rollNumber: 105, marks: 55, attendance: 60, department: "ME" },
//   { name: "Frank", rollNumber: 106, marks: 91, attendance: 88, department: "ECE" },
//   { name: "Grace", rollNumber: 107, marks: 82, attendance: 94, department: "CS" }
// ];

// const criteria = {
//   minMarks: 60,
//   minAttendance: 75,
//   department: "CS"    // null for all departments
// };

// Expected Output Shape

// {
//   top3Students: [
//     { name, rollNumber, marks, grade, gpa },
//     // ...
//   ],
//   gradeDistribution: {
//     A: number,
//     B: number,
//     C: number,
//     D: number,
//     F: number
//   }
// }

function analyzeStudents(students, criteria) {
    // console.log(students)
    // console.log(criteria)
    let Acount = 0;
    let Bcount = 0;
    let Ccount = 0;
    let Dcount = 0;
    let Ecount = 0;
    let Fcount = 0;
    let top3Students = [];
    let list = []
    for (let student of students) {
        if (
            student.marks >= criteria.minMarks &&
            student.attendance >= criteria.minAttendance
        ) {
            if (
                student.department === criteria.department ||
                criteria.department === null
            ) {
                let grade;

                if (student.marks >= 90) {
                    grade = "A";
                    Acount++;
                } else if (student.marks >= 80) {
                    grade = "B";
                    Bcount++;
                } else if (student.marks >= 70) {
                    grade = "C";
                    Ccount++;
                } else if (student.marks >= 60) {
                    grade = "D";
                    Dcount++;
                } else if (student.marks >= 50) {
                    grade = "E";
                    Ecount++;
                } else {
                    grade = "F";
                    Fcount++;
                }
                top3Students.push({
                    name: student.name,
                    rollNumber: student.rollNumber,
                    marks: student.marks,
                    grade: grade,
                    gpa: parseFloat((student.marks / 10).toFixed(2)),
                });
                top3Students.sort((a, b) => { return b.marks - a.marks });
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        list.push(top3Students[i])
    }

    return {
        // list : list,
        top3Students: list,
        gradeDistribution: {
            A: Acount,
            B: Bcount,
            C: Ccount,
            D: Dcount,
            E: Ecount,
            F: Fcount,
        },
    };
}

// console.log(analyzeStudents(students, criteria));

const students = [
    {
        name: "Alice",
        rollNumber: 101,
        marks: 92,
        attendance: 95,
        department: "CS",
    },
    { name: "Bob", rollNumber: 102, marks: 78, attendance: 85, department: "CS" },
    {
        name: "Charlie",
        rollNumber: 103,
        marks: 65,
        attendance: 70,
        department: "ECE",
    },
    {
        name: "David",
        rollNumber: 104,
        marks: 88,
        attendance: 92,
        department: "CS",
    },
    { name: "Eva", rollNumber: 105, marks: 55, attendance: 60, department: "ME" },
    {
        name: "Frank",
        rollNumber: 106,
        marks: 91,
        attendance: 88,
        department: "ECE",
    },
    {
        name: "Grace",
        rollNumber: 107,
        marks: 82,
        attendance: 94,
        department: "CS",
    },
];

const criteria = {
    minMarks: 60,
    minAttendance: 75,
    department: "CS", // null for all departments
};

console.log(analyzeStudents(students, criteria));
