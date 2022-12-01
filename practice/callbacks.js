const posts = [
	{ title: 'post one', body: 'This is post one' },
	{ title: 'post two', body: 'This is post two' },
	
];

function getPost() {
	// setTimeout(() => {
		let output = '';
		posts.forEach((post, index)=> {
			output += `${post.title} \n`;
		});
		console.log(output);

	// }, 2000)
}


function createPost(post, callback) { 
	// setTimeout(() => {
		posts.push(post)
		callback();
	// }, 1000);
}


createPost({ title: 'post THREE', body: 'This is post THREE' }, getPost);
createPost({ title: 'post FOUR', body: 'This is post FOUR' }, getPost);
