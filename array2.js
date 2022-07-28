let dailyActivities = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];

// sorting elements in the alphabetical order
dailyActivities.sort();
console.log(dailyActivities); 

//finding the index position of string
const position = dailyActivities.indexOf('work');
console.log(position); 

// slicing the array elements
const newDailyActivities = dailyActivities.slice(1);
console.log(newDailyActivities); 

// concatenating two arrays
const routine = dailyActivities.concat(newRoutine);
console.log(routine); 
let students = ['John', 'Sara', 'Jack'];

// using forEach
students.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}