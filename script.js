fetch("https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLiQi0w86VNxqZWVhAuU0P45asJvUVvmHAreJpTD5amSRJLOmLXRt4RDJSp2yEE2m6yZXte4tq5PqrwfmDHgO_FuTRlmAXvtMk146Tx9-3yTnslfubhBbDQJE3-GoLMMJWERy5E5WA5Hc0dJP1xNo3YWT81uErXnT__MQxip3r7ItE-rYxD-GOVAWg0UuBxZM7kLLU9TTmDqdbLxLr7MxYKdXlEYW0E7bCi9RgnXT03WXV59oMl-BUItInv4GlDHydiu7rY1Xak-z0OqvVz0EJjnkoqCnA&lib=MJ5QFX8KgkjnPzwXPS3DwKkn2RJ7T_L8O")
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
