

const users=[{
	first_name:"Mike",
	last_name:"Sheridan",
	age:30
},
{
	first_name:"Tim",
	last_name:"Lee",
	age:45
},{
	first_name:"Jhon",
	last_name:"Carte",
	age:25
}];




username=users.map (function (f){

	return f.last_name;
	
});

console.log(username);
