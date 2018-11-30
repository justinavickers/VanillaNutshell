// import taskAPIFunctions from "./taskFetching"

// function newTaskCreation() {
//     let taskName = document.querySelector("#taskName")
//     let taskDate = document.querySelector("#taskDate")
// // builds task and posts to database
//     let obj = {
//         userId: sessionStorage.getItem("user_id"),
//         taskName: taskName.value,
//         taskDate: taskDate.valueAsDate,
//         taskCompleted: false
//     }
//     taskAPIFunctions.postTask(obj)
//     .then(() => {
//         return newTaskCreation(obj)
//     })
// }
// export default newTaskCreation