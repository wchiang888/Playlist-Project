// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");
let remove = document.querySelector (".delete");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let displayImg = document.querySelector (".display-image");
let displayName = document.querySelector (".display-song");
let displayArtist = document.querySelector (".display-artist");
let displayLink = document.querySelector (".display-link");


// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let imageL = ["https://images.genius.com/5f8ccc078c2902f637eafd2e0ece7cfb.1000x1000x1.jpg","https://i.ytimg.com/vi/x2J_0tN0luQ/maxresdefault.jpg","https://y.qq.com/music/photo_new/T002R300x300M000003R2xOT4ZKC8I_1.jpg?max_age=2592000","https://y.qq.com/music/photo_new/T002R300x300M000001fqR3749jFpE_1.jpg?max_age=2592000","https://i.ytimg.com/vi/97axrS3Npxk/maxresdefault.jpg","https://i.ytimg.com/vi/Kec43PcGg7I/hqdefault.jpg"];
let nameL = ["The One And Only","达尔文 (Darwin)","洛希极限 (Roche limit)","寂寞烟火","步步 (Step By Step)","挚友 (Best Friend)"];
let artistL = ["Accusefive","JJ Lin","任然","蓝心羽","五月天 (Mayday)","Eric Chou"];
let linkL = ["https://www.youtube.com/watch?v=vxucCfcMFCk","https://www.youtube.com/watch?v=ouBgF12JgTA","https://www.youtube.com/watch?v=ASWRcLxT9Sk","https://www.youtube.com/watch?v=cuVUv5qw5-c","https://www.youtube.com/watch?v=97axrS3Npxk","https://www.youtube.com/watch?v=Kec43PcGg7I"];


//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
let imgInput = image.value;
let nameInput = songName.value;
let artistInput = artist.value;
let linkInput = songLink.value;

// task 10: use `.push()` to add each input value to the correct array.
imageL.push (imgInput);
nameL.push (nameInput);
artistL.push (artistInput);
linkL.push (linkInput);
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImg.innerHTML = "";
  displayName.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
imageL.forEach (function (image){
  displayImg.insertAdjacentHTML ('beforeend',`<img src = ${image}>`)})
nameL.forEach (function (name){
  displayName.insertAdjacentHTML ('beforeend',`<p> ${name} </p>`)})
artistL.forEach (function (artist){
  displayArtist.insertAdjacentHTML ('beforeend',`<p> ${artist} </p>`)})
linkL.forEach (function (link) {
  displayLink.insertAdjacentHTML ('beforeend', `<a href = ${link} > See Music Video </a>`)
})
};






// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  emptyDisplay();
  displaySongInfo();
  image.value = "";
  songName.value = "";
  artist.value="";
  songLink.value="";
};

// function call to display stored songs
displaySongInfo();
