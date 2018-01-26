
var infoList = []; //global list variable carrying entries of the form on html page
var startList; //global variable which will be appended in html to show lists


//function to add entered information to infoList and show entries as unordered list in html
function addToList() {
	    //get the user entered information
	    const name = document.getElementById("name").value;
	    const age = document.getElementById("age").value;
        
        //double verification that field is not empty
	    if(name === ""  || age ===null  ) {
	    	alert("Please fill out the form");
	    } else {
	    	//adding to arrayList and printing to page
		    infoList.push([name, age]); 
	        startList = document.createElement("ul");
		    var addNode = document.createTextNode(name + " : " + age + "\n");
		    startList.appendChild(addNode);
		    document.getElementById("list").appendChild(startList);
		    document.getElementById("name").value = "";
	        document.getElementById("age").value = "";
	}
}

//function to clear any lists showing on the page
//iterates through child nodes in div list and removes them
function clearList() {
	var parentNode = document.getElementById("list");
	while(parentNode.hasChildNodes()) {
        parentNode.removeChild(parentNode.lastChild);
    }
}

//creates list on page, 4 list sorting buttons call on this to print
function printList() {
	clearList(); // make sure no other list is showing 

	var count = 0;
	    while (count < infoList.length) {
	    	//get name and age and add to the div "list"- printing out list in html
	    	var name = infoList[count][0];
	    	var age = infoList[count][1];
	    	startList = document.createElement("ul");
	    	var addNode = document.createTextNode(name + " : " + age + "\n");
	    	startList.appendChild(addNode);
	    	document.getElementById("list").appendChild(startList);
	    	count ++;
	    }
}

//Functions to create list on page when respective button is clicked
function descendingAgeOrder() {
	infoList.sort(function(a, b){return b[1]-a[1]});//decending order
    printList();
};

function ascendingAgeOrder() {
	infoList.sort(function(a, b){return a[1]-b[1]}); //decending order
	printList();
};

function ascendingNameOrder() {
	infoList.sort(); 
	printList();
};

function descendingNameOrder() {
    infoList.sort(); 
    infoList.reverse(); 
    printList();
};










