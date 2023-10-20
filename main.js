
// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [//Array 1
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [//Array 2
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];


//************SOLUTION 1 ****************
//console.warn("I have not Idea where to start. SOS")  
const getLearnerData = function (courseInfo, assignmentGroup, learnerSubmissions) {
  
  //Accessing each name of the assignment group

  for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
    let assignment = AssignmentGroup.assignments[i];
    console.log(assignment.name);
  }
  //accessing each ID
  for (let h = 0; h < LearnerSubmissions.length; h++) {
    let assigned = LearnerSubmissions[h];
    console.log(assigned.learner_id);
  }
  //accessing/obtaining group_weight ***(forgive my spelling, it's midnight and my brain is tired)***
  // for (let peso of assignmentGroup.length) {
  //   console.log(peso.group_weight);
  // }
  // Finding the average score of all data...
  const scores = [];
  let total = 0;
  for (let i = 0; i < learnerSubmissions.length; i++) {
    total += learnerSubmissions[i].submission.score;
    scores.push(learnerSubmissions[i].submission.score);
  }
  console.log(total / scores.length);
  //

  //learner's assignments dates
  const assignmentsDueDate = [];

  for (let j = 0; j < assignmentGroup.assignments.length; j++) {
    const assignment = assignmentGroup.assignments[j];
    const assignmentDueDate = new Date(assignment.due_at);
    const today = new Date();

    //throwing an error deliveradamente
    if (today > assignmentDueDate) {
      throw new Error(
        "Ups, hurry my friend, train is about to depart, and Perscola's Instructors CANNOT wait that long!😔🤫🤫🤫 (jk!, btw)"
      );
    } else if(today ===assignmentDueDate) {
      console.log("You're just fine!");
    } else {
      console.log("ciao")
       }
  }

}

getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);



