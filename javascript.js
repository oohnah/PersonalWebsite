function toggle(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else{
       	e.style.display = 'block';
       }
     
    }
//write a function that searches an array for a favorite thing
function favorite () {

	var input=document.getElementById('textbox').value;

	var aa="";

	switch (input){
		case "book":
			aa="The Bartimaeus Trilogy";
			break;
		case "color":
			aa="Purple";
			break;
		case "food":
			aa="Ice cream, or macaroni and cheese";
			break;
		case "song":
			aa="Arabesque No. 1, by Debussy"
			break;
		case "artist":
			aa="Salvador Dali"
			break;
		case "tv show":
			aa="Doctor Who, or Sherlock, or Supernatural, or Community"
			break;
		case "dessert":
			aa="Ice cream";
			break;
		case "website":
			aa="Tumblr, or CreativeBloq, or SitePoint, or MDN";
			break;
		case "font":
			aa="Righ now, I like and can afford Mission Gothic and Cylburn.";
			break;
		case "place":
			aa="Bangkok, Thailand, or maybe Boston!"
			break;
		case "movie":
			aa="Harry Potter (all of them), and The Sound of Music";
			break;
		case "disney movie":
			aa="Mulan, and Frozen";
			break;
		case "disney princess":
			aa="Mulan";
			break;
		case "ice cream flavor":
			aa="Edy's French Silk"
			break;
		case "activity":
			aa="Singing, or designing, or dancing, or watching a movie"
			break;
		case "chain restaurant":
			aa="The Cheesecake Factory";
			break;
		case "famous person":
			aa="Randy Pausch, and David Tennant";
			break;
		case "Hogwarts house":
			aa="Gryffindor!";
			break;
		case "store":
			aa="Best Buy";
			break;
		case "clothing store":
			aa="H&M";
			break;
		case "animal":
			aa="All kinds of cats and birds";
			break;
		default:
			aa="I guess I don't have a favorite one of those."



	}

	document.getElementById('answer').innerHTML=aa;
}