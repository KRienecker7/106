
function createTodo(){
    var txt = $("#txtTodo").val();//get the text of the input field
    
    //create an li to display the todo
    var li = `<li>` + txt + `</li>`;

    $(".list").append(li);
    $("#txtTodo").val("");
    $("txtTodo").focus();
}


function init(){
    console.log("Page is ready!");
    
    //set up events
    //var btn= document.getElementById("btnAdd");
    //btn.onclick = createTodo; ***is equal tot he below command of jquery $

    $("#btnAdd").click(createTodo);
    $("#txtTodo").keypress(function(args){
        if(args .key == "Enter"){
            createTodo();
        }
    });



    //fetch initial data
}

// onload get called when the browser finished rednering HTML
// pass a function name to it
window.onload = init;

