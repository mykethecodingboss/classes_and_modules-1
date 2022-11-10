import Person from "./person.mjs";

// class Teacher {
//   constructor(degree) {
//     this.degree = degree;
//   }
//   degree = "";

//   teach() {}
// }

class Teacher extends Person {
  constructor(firstname, lastname, gender, degree) {
    super(firstname, lastname, gender, degree);
    this.degree = degree;
  }
  degree = "";
  teach() {}
}
// const any = new Teacher("Taiwo", "Paul", "Male");
// console.log(any.firstname);
// console.log(any.lastname);
export default Teacher;
