var postContainer = document.getElementsByClassName("posts-container")[0];



$.ajax({
    url: "https://api-practice-wdi.herokuapp.com/posts",
    method: "GET",
    data: {
    },
    success: function(response){
        console.log(response);
        listPosts(response);
    }

})

function listPosts(response){
	i = 0;
	response.posts.forEach(function(post){
		categories = "";
		post.categories.forEach(function(category){
			categories += category;
			console.log(categories);
		}) 
		postContainer.innerHTML += "<div class='post post" + i + "'><div class='img img" + i + "'></div><div class='text'><div class='date'>" + post.date + "</div><h2 class='postTitle'>" + post.title + "</h2><hr><div class='category'>" + categories + "</div>";
		addImg(post.img,i);
		// setTimeout(addImg(post.img, i), 1);
		i += 1;
	})
}

function addImg(img, num){
	var imgDiv = document.getElementsByClassName("img")[num];
	console.log(imgDiv);
	imgDiv.style.backgroundImage = "url('" + img + "')";
	console.log("addImg");
};















    // var movieSubtitles = [["Tully", "Family, Duty, Honor"], ["Stark", "Winter is Coming"], ["Lannister", "Hear me Roar!"], ["Martell", "Unbowed, Unbent, Unbroken"]];
// var returningObj = {};
// function arrayToObj(){
// 	movieSubtitles.forEach(function(movie){
// 		var title = movie[0];
// 		var subtitle = movie[1];
// 		returningObj[title] = subtitle;
// 	})

// 	return returningObj;
// };