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

  function populateTable() {
    if(localStorage.getItem("tasks")){
        var storage = JSON.parse(localStorage.getItem("tasks"))
        for (let i = 0; i < hours.length; i++) {
            containerElement[0].innerHTML += `<div class="row>
            <h3 class="col-2 time-block hour">
            ${hours[i]}:00
            </h3>
            <textarea class="col-8 ${checkClass(hours[i])}" id="${i}">
                 ${storage[i]}
                 </textarea>
                 <button class="col-2 saveBtn"> Save Task</button>
               </div>;`
        }
    }
  }