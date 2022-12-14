//added a var for hours in military time to make easier.
var hours = [
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];

  const saveBtns = document.getElementsByClassName("saveBtn");

  var containerElement = document.getElementsByClassName("container");

  //function to create the table for the tasks
  function populateTable() {
    if(localStorage.getItem("tasks")){
        var storage = JSON.parse(localStorage.getItem("tasks"))
        for (let i = 0; i < hours.length; i++) {
          containerElement[0].innerHTML += `<div class="row">
                  <h3 class="col-2 time-block hour">
                    ${hours[i]}:00
                  </h3>
                  <textarea class="col-8 ${checkClass(hours[i])}" id="${i}">
                 ${storage[i]}
                  </textarea>
                  <button class="col-2 saveBtn"> Save Task</button>
                </div>`;
        }    
    } else{
        var storage = []
        for (let i = 0; i < hours.length; i++) {
            containerElement[0].innerHTML += `<div class="row">
                    <h3 class="col-2 time-block hour">
                      ${hours[i]}:00
                    </h3>
                    <textarea class="col-8 ${checkClass(hours[i])}" id="${i}">
                   ${storage.push("")}
                    </textarea>
                    <button class="col-2 saveBtn"> Save Task</button>
                  </div>`;
          }   
          localStorage.setItem("tasks",JSON.stringify(storage))
    }
    
}

// function that will check to see if each hour is past, present, or in the future and designates the class for it.
  function checkClass(time) {
    var now = moment().hours();

    if (time < now) {
        return "past";
    }

    if (time == now) {
        return "present";
    }

    return "future";
  }

  //when the table is loaded, the table will populate
  window.onload = populateTable();
  for (let i = 0; i < saveBtns.length; i++) {
    //added an event listener to the saveBtns that will store the saved tasks
    saveBtns[i].addEventListener("click", function (e){
        console.log(e.target)
        let textArea = document.getElementById(String(i))
        storage = JSON.parse(localStorage.getItem("tasks"))
        storage[i]= textArea.value
        localStorage.setItem("tasks", JSON.stringify(storage))
    });
  }
 