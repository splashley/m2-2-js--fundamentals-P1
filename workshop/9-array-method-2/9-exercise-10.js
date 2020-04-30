// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

function calculateAverage(grades) {
    let sum = 0;
    grades.forEach(function (grade) {
    sum += grade;
    });

    return Math.round(sum / grades.length);
}

function reportCard(grade) {
    letterGrade = 'A';
    if (grade < 100) letterGrade = 'A';
    if (grade < 90) letterGrade = 'B';
    if (grade < 80) letterGrade = 'C';
    if (grade < 70) letterGrade = 'D';
    if (grade < 60) letterGrade = 'F';

    return letterGrade;
}

console.log(reportCard((calculateAverage([48, 95, 65, 48, 59, 78, 72, 65]))));


// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well


