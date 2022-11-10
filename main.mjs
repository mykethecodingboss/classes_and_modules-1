import StudentCourseReg from "./studentcourseReg.mjs";
import Course from "./course.mjs";

let course1 = new Course("101", "Intro to   Insurance", "INS 101", "3", "Prof Samuel", 1);

let course2 = new Course("102", "Insurance Marketing", "INS 102", "2", "Prof Tunde", 0);

let course3 = new Course("103", "Accounting Insurance", "INS 103", "2", "Dr. Jide", 0);

let array = [course1, course2, course3];

let studentCourse1 = new StudentCourseReg('first', '2020', 'INS/2020/001', 'Faculty of Social Science', 'Insurance', array);

// let studentCourse2 = new StudentCourseReg('first', '2021', 'INS/2020/002', 'Faculty of Law', 'Law', [course1, course2, course3]);

// let studentCourse3 = new StudentCourseReg('second', '2020', 'INS/2020/003', 'Faculty of Art', 'History', [course1, course2, course3]);

console.log(studentCourse1.totalCourse());
console.log(studentCourse1.totalCompulsory());
console.log(studentCourse1.totalElective());