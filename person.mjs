class Person {
  constructor(firstname, lastname, gender) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.gender = gender;
  }
  firstName = "";
  lastname = "";
  gender = "";

  walk() {}
  jump() {
    console.log("I am jumping");
  }
}

export default Person;
