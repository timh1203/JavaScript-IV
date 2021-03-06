// CODE here for your Lambda Classes
class Person {
  constructor(personAttr){
    this.name = personAttr.name
    this.age = personAttr.age
    this.location = personAttr.location
    this.gender = personAttr.gender
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor(instructorAttr){
    super(instructorAttr)
    this.specialty = instructorAttr.specialty
    this.favLanguage = instructorAttr.favLanguage
    this.catchPhrase = instructorAttr.catchPhrase
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}.`
  }
  grading(student){
		let sign = (Math.random() * 2) == 1 ? 1 : -1
    student.grade += Math.floor(Math.random()*30) * sign;
		return student.grade
  }
}

class Student extends Person {
  constructor(studentAttr){
    super(studentAttr)
    this.previousBackground = studentAttr.previousBackground
    this.className = studentAttr.className
    this.favSubjects = studentAttr.favSubjects
    this.grade = 94;
  }
  listSubjects() {
    return this.favSubjects.forEach(subject => console.log(subject));
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`
  }
  graduate() {
    if (this.grade >= 70) {
      return `${this.name} can graduate with a ${this.grade}.`
    } else {
			return `${this.name} still needs to be graded with a ${this.grade}.`
		}
  }
}

class ProjectManagers extends Instructor {
  constructor(pmAttr) {
    super(pmAttr)
    this.gradClassName = pmAttr.gradClassName
    this.favInstructor = pmAttr.favInstructor
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @${channel} standy times!`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student}'s code on ${subject}.`
  }
}

//////////////////
// New Instructors
//////////////////
const salvador = new Instructor ({
  'name':'Salvador',
  'location': 'Cuenca',
  'age': 38,
  'gender': 'Male',
  'specialty': 'Back-End',
  'catchPhrase': 'Want more?',
})

const amalia = new Instructor ({
  'name':'Amalia',
  'location': 'Cuenca',
  'age': 34,
  'gender': 'Female',
  'specialty': 'Front-End',
  'catchPhrase': 'The bells chimes for you',
})
// salvador.speak();
// amalia.speak();
// salvador.demo('React');
// salvador.grade('Alan', 'NodeJS');

///////////////
// New Students
///////////////
const olga = new Student ({
  'name': 'Olga',
  'location': 'London',
  'age': 28,
  'gender': 'Female',
	'previousBackground': 'Designer',
	'className': 'CS14',
	'favSubjects': ['HTML', 'CSS', 'Javascript']
})

const ken = new Student ({
  'name': 'Ken',
  'location': 'Whistler',
  'age': 27,
  'gender': 'Male',
	'previousBackground': 'Guide',
	'className': 'CS14',
	'favSubjects': ['HTML', 'CSS', 'Python']
})
// olga.speak();
// ken.speak();
// olga.listSubjects();
// olga.PRAssignment('prototype inheritance');
// ken.sprintChallenge('javascript IV');

///////////////
// New Project Managers
///////////////
const juan = new ProjectManagers ({
  'name': 'Juan',
  'location': 'Leesburg',
  'age': 23,
  'gender': 'Male',
	'gradClassName': 'CS3',
	'favInstructor': 'Amalia',
})

const alex = new ProjectManagers ({
  'name': 'Alex',
  'location': 'Austin',
  'age': 22,
  'gender': 'Female',
	'gradClassName': 'CS5',
	'favInstructor': 'Salvador',
})
// juan.speak();
// alex.speak();
// juan.demo('React');
// juan.grade('Brian', 'PassportJS');
// juan.standUp('CS11');
// alex.debugsCode('Brian', 'Mongoose');
// juan.grading(olga);
// ken.graduate();