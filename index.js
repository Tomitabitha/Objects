//ASSIGNMENT ONE
function instagramPost(handleOfAuthor, content, imageLink,numberOfViews, numberOfLikes) {
    this.instagramHandle = handleOfAuthor,
    this.instagramContent = content,
    this.instagramImageLink = imageLink,
    this.numberOfViews = numberOfViews,
    this.numberOfLikes = numberOfLikes
}

//ASSIGNMENT TWO
let instagramPost1 = new instagramPost("@falzthebadguy", "Go out and vote on the 25/2/23! See you all on saturday!!", "https://dailypost.ng/wp-content/uploads/2021/11/Falz.jpg", 67867, 34765);
let instagramPost2 = new instagramPost("@cci_global", "It's still our solid year at CCI GLOBAL, The Lord be with you", "https://www.wishesmsg.com/wp-content/uploads/happy-sunday.jpg", 1758, 567);

//ASSIGNMENT THREE
//3(a)
function createPerson(name, age, location) {
    return {
        studentName: name,
        studentAge: age,
        studentLocation: location
    }
};

const Musa = createPerson("Musa", 19, "Lekki, Lagos");

// 3(b)
function JambScores(ENG, GOVT, LIT, CRK) {
    return {
        ENG: ENG,
        GOVT: GOVT,
        LIT: LIT,
        CRK: CRK
    }
};

const MusaJambScores = JambScores(70, 85, 82, 94);

Musa.JambScores = MusaJambScores;

// console.log(Musa);

//ASSIGNMENT FOUR
let inputOne = {fName: "Tomisin", lName: "Adefunso", age: 27}

let inputTwo = Object.assign({}, inputOne); //(a) - Object.assign() method

let inputThree = {...inputOne}; //(b) - Spread Syntax method

let inputFour = JSON.parse(JSON.stringify(inputOne)); //(c) - JSON.parse() method

inputOne.height = "5ft";

// console.log(inputFour);

//ASSIGNMENT FIVE
const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

for (const property in presidentialCandidates) {
  //for..in enumeration
  let party = property;
  let candidate = presidentialCandidates[property];

  console.log(candidate + " is the presidential candidate of " + party);
}

for (const candidate of Object.keys(presidentialCandidates)) {
    //for..of enumeration
    console.log(presidentialCandidates[candidate] + " is the presidential candidate of " + candidate);
}