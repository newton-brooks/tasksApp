var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


var tasks = []

function createTask(title, completed){
    var task = {
        title: title,
        completed: completed
    }
    return tasks.push(task)
}

function forEachElement(arr, callback){
    for(var i = 0; i < arr.length; i++){
            callback(arr[i], i )
    }
}

function toggle(index){
    if(!tasks.length){
        console.log('There are no tasks to toggle.')
    } else if(tasks[index - 1].completed){
        tasks[index - 1].completed = false
    } else if (!tasks[index - 1].completed){
        tasks[index - 1].completed = true
    } 
    return tasks
}


function LogTasks(task, index){
    console.log((index + 1) + '. ' + 'task: ' + task.title + '. Completed: ' + task.completed)
}

function showActive(tasks){
    for(var i = 0; i < tasks.length; i++){
        if(!tasks[i].completed){
            console.log((i+ 1) + '. ' + 'task: ' + tasks[i].title + '. Completed: ' + tasks[i].completed)
        } 
    }
}

function showCompeled(tasks){
    for(var i = 0; i < tasks.length; i++){
        if(tasks[i].completed){
            console.log((i+ 1) + '. ' + 'task: ' + tasks[i].title + '. Completed: ' + tasks[i].completed)
        } 
    }
}



rl.on('line', function(input){
    var inputArr = input.trim().split(' ')
    if(inputArr[0].toLowerCase() === 'add'){
       createTask(inputArr.slice(1).join(' '), false)
       forEachElement(tasks, LogTasks)
    } else if (inputArr[0] === 'toggle'){
        var index = Number(inputArr[1])
        if(inputArr.length === 1){
            console.log('Please enter a number')
        } else {
            toggle(inputArr[1])
            forEachElement(tasks, LogTasks)
        }   
    } else if (inputArr.slice(0,2).join(' ').toLowerCase() === 'show all'){
        forEachElement(tasks, LogTasks)
    } else if(inputArr.slice(0,2).join(' ').toLowerCase() === 'show active'){
        showActive(tasks)
    } else if(inputArr.slice(0,2).join(' ').toLowerCase() === 'show completed'){
        showCompeled(tasks)
    } else {
        console.log("Please enter one of the valid commands: add (task), 'show all', 'show active', 'show completed', toggle (tasks Number) ")
    }
})
