// variables 
const searchText = document.querySelector('#search'),
      list = document.getElementsByTagName('li');

    
// adding event listener
searchText.addEventListener('keyup', searchValues);


// function 
function searchValues(event){
    if(event.key == "Enter"){
        location.reload();
    }
    let value = searchText.value.toLowerCase();

    for(let i =0 ;i<list.length;i++){

        if(!(list[i].innerHTML.toLowerCase().includes(value))){
            console.log(list[i].innerHTML.toLowerCase());
            list[i].style.display = "none";
        }
    }
}