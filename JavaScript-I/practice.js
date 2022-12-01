const posts = [
	{ title: 'POST ONE', body: 'THIS IS POST ONE' },
	{ title: 'POST TWO', body: 'THIS IS POST TWO' }
];

function getPost() { 
	setTimeout(() => {
		let output = '';
		posts.forEach(post => {
			output += `${post.title}.      -- `;
		});
		console.log(output);
	}, 1000);
}

createPost(post){ 
	
}

getPost();