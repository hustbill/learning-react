// Function with object arguments
var lordify = regularPerson => {
	  console.log(`${regularPerson.firstname} of Canterbury`)
}

var regularPerson = {
	  firstname: "Bill",
	  lastname: "Wilson"
}

lordify(regularPerson)
