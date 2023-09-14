function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let student1 = new Student();
let student2 = new Student();
let student3 = new Student();

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if((this.marks in Student) === true) {
    this.marks = [...marksToAdd];
  }
}

Student.prototype.getAverage = function (...marks) {
  let sum = 0;
    if("this.marks" in Student === false || this.marks.length === 0) {
      return 0;
    } else {
        for(let i = 0; i < this.marks.length; i++) {
          sum += this.marks[i];
        }
      }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
