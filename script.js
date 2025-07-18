fetch("filmlist.json")
.then(function(response){
	return response.json();
})
.then(function(items){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let results of items.data){
		// console.log(results.Title);
		// console.log(results.Title);
		out += `
			<a target="_blank" rel="noopener noreferrer" href="${results.Link}">
				<div class="box">
					<img src="${results.Image}" onerror="this.onerror=null;this.src='image.jpg';">
					<h4>${results.Title}</h4>
					<p>${results.Year}</p>
					<p>${results.Genre}</p>
				</div>
			</a>
		`;
	};
	placeholder.innerHTML = out;
});
