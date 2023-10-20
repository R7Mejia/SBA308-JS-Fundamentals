// You will create a script that gathers data, processes it, and then outputs a consistent result as described by a specification. This is a very typical situation in industry, and this particular scenario has been modified from a real application. The data you will use will be provided to you below.
// You will be provided with four different types of data:
//A CourseInfo object, which looks like this:

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
  assignments: [
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
const LearnerSubmissions = [
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
/* *******THIS IS NOT SUPPOSSED TO BE USED. THIS IS JUST FOR REFERENCE AND UNDERSTANDING*****

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);*/


//************SOLUTION 1 ****************
//console.warn("I have not Idea where to start. SOS")  
    //"id": number,

const getLearnerData = function (courseInfo, assignmentGroup, learnerSubmissions) {
  
    // Finding the average score of all data...
    const scores = [];
    let total = 0;
    for (let i = 0; i < learnerSubmissions.length; i++) {
        total += learnerSubmissions[i].submission.score;
        scores.push(learnerSubmissions[i].submission.score);
    }
    console.log(total / scores.length);

    //learner's assignments dates
    const assignmentsDueDate = [];

    for (let i = 0; i < assignmentGroup.assignments.length; i++) {
        const assignment = assignmentGroup.assignments[i];
        const assignmentDueDate = new Date(assignment.due_at);
        const today = new Date();
//throwing an error deliveradamente
        if (today > assignmentDueDate) {
            throw new Error(
              "Ups, hurry my friend, train is about to depart, and Perscola's Instructors CANNOT wait!😔🤫🤫🤫"
            );
        } else {
            console.log("You're just fine!");
        }
    }
}
getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
















//     learnerSubmissions.forEach(learnerSubmission){


//     }
// }
//array of objects. each of these objets will have properties...these properties will come from the data above
//
//const =[//random data should go here. maybe an object/objects. ]
//maybe a loop will be here. I'll also need to check for the requirement instructions. Then,
//maybe another function? idk
    // 
        
    
        // the learner’s total, weighted average, in which assignments
        // with more points_possible should be counted for more
        // e.g. a learner with 50/100 on one assignment and 190/200 on another
        // would have a weighted average score of 240/300 = 80%.
        //   "avg": number,
        // each assignment should have a key with its ID,
        // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    //   <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores






//******************SOLUTION 2 ********************

