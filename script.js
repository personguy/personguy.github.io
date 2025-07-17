fetch("films.json")
	//just do it
	//pleeeeeeeeease just refresh!
.then(function(response){
	return response.json();
})
.then(function(items){
	let placeholder = document.querySelector("#data-output");
	
	let out = "";
	for(let results of items.data){
		// console.log(results.Title);
		out += `
			<tr>
				<td> <img src='${results.Image}'> </td>
				<td>${results.Title}</td>
				<td>${results.Year}</td>
				<td>${results.Genre}</td>
			</tr>
		`;
	};

	placeholder.innerHTML = out;
});
