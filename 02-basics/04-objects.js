const course = {
    courseName : "Js",
    coursePrice : 999,
    courseInstructor : "xyz",
}
// course.courseInstructor

const {courseName, courseInstructor : instructor} = course;
// console.log(courseInstructor);
console.log(instructor);
