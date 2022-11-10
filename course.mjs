class Course {
  courseId = "";
  courseTitle = "";
  courseName = "";
  courseName = "";
  unit = "";
  advisor = "";
  type = "";
  constructor(courseid, coursetitle, coursename, unit, advisor, type) {
    this.courseId = courseid;
    this.courseTitle = coursetitle;
    this.courseName = coursename;
    this.unit = unit;
    this.advisor = advisor;
    this.type = type;
  }
}

export default Course;