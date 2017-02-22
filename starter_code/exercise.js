var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = salary;
};


// select salaries over 250,000
exercise.generatePoints = function(){

    // filter for bigger salaries
    // ----------------------------
    //      YOUR CODE
    // ----------------------------

    var points = [];
    // -------------------------------------
    //      YOUR CODE
    //
    //  Create array of salary objects.
    //  Sample objects follow - dummy data.
    // -------------------------------------

    // add gardner - note that salary value is a number
    var item = {'job' : 'gardener', 'salary' : 60000};
    points.push(item);

    // add teacher
    item = {'job' : 'teacher', 'salary' : 80000};
    points.push(item);

    // return data
    return points;
};

// filter function
exercise.rich =  function(item){
    // ----------------------------
    //      YOUR CODE
    // ----------------------------
};