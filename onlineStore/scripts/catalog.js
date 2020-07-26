var catalog = [];


function fetchData(){
    $.ajax({
        url: "http://restclass.azurewebsites.net/api/points",
        type: "GET", 
        success: function(allItems) {
            // travel allItems
            // check if item belongs to me
            // if so push to catalog array
            console.log("allItems");
            for (let i=0; i< allItems.length; i++){
                var item = allItems[i];
                if(item.user ==="Kenny"){
                    catalog.push(item);
                }
            }


            displayCatalog();
        },
        error: function(details){
            console.error("Error getting data", details);
            }
        });
        //will do any instructions from here
     }


function displayCatalog(){
    //travel the array of items
    //get each tiem
    //display the item on html

    for(let i=0; i < catalog.length; i++){
        var item = catalog[i];


        //display on html
        var syntax = 
        `<div class="item">
            <img src="${item.image}">
            <div class="info">
                <label class="code">${item.code}</label>
                <label class="title">${item.title}</label>
                <label class="price">$${item.price}</label>

                <button class="btn btn-info btn-sm">Add</button>
            </div>
        </div>`;

        $("#catalog-container").append(syntax);

    }
}
function init() {
    console.log("Catalog working!");

    fetchData();

}



window.onload = init;

/*
    code
    title
    price
    imageUrl
    quantity
    category
*/