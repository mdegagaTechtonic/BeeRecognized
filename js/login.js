//will use web storage to store for a session - until tab is closed
if (typeof(Storage) !== "undefined") {
  //testsample slack databse --- these indviduals have a slack account and are in our company but have yet to use the BeeRecognized app
  var sampleSlackUsers = [{username:"Merry D", avatar:"images/demoUser1.png"}, {username:"Shambre SW", avatar:"images/demoUser2.png"}, {username:"Kyle B", avatar:"images/demoUser3.png"}, {username:"Brett G", avatar:"images/demoUser1.png"}, {username:"Jason D", avatar:"images/demoUser1.png"},{username:"Ashley E", avatar:"images/demoUser2.png"},{username:"Erik H", avatar:"images/demoUser3.png"},{username:"Yahor N", avatar:"images/demoUser3.png"}];

  //test data until we can connect to our own db
  //contains Recognition objects
  //each Recognition object has sender, current number of bees to give, their avatar properties, reciever, date, message
  var sampleUsers = [{sender:"Jason D", beesToGive: 10, avatar:"images/demoUser1.png", reciever:"", date:"", message:""},{sender:"Ashley E", beesToGive: 10, avatar:"images/demoUser2.png", reciever:"", date:"", message:""},{sender:"Erik H", beesToGive: 10, avatar:"images/demoUser3.png", reciever:"", date:"", message:""}, {sender:"Yahor N", beesToGive: 10, avatar:"images/demoUser3.png", reciever:"", date:"", message:""}];

  $("img#slack").on("click", login);

  function login() {
    //Click works
    //alert("clicked");

    //authenticate username using slack API - phase 3. for check if they are in the mock slack db
    //test with name that is in the sampleUsers
    //var samplePerson = "Jason D";
    //test with name not in the sampleUsers but has a slack account
    var samplePerson = "Merry D"
    //test someone with no slack account
    //var samplePerson = "Pierre L";
    //console.log(sampleUsers);
    //console.log(sampleSlackUsers);
    var index = isAuthentic(samplePerson, sampleSlackUsers, "username");
    //console.log(index);
    if(index[0]) {
      //if authentic name, then see if the person is in our db
      checkDB(samplePerson);
    }
    //else if not authentic(they have no slack account), then message create a slack account
    else {
      alert("Please create a slack account before proceeding");
      //put the link for the slack webpage here?
    }
  };

  //used to go through both the slack db and bee recognized db
  function isAuthentic(person, arr, property) {
    //will loop only until found, won't go through whole slack db
    for(var i = 0; i < arr.length ;i++) {
      if(arr[i][property].trim().toLowerCase() === person.trim().toLowerCase()) {
        console.log(person + 'has a slack')
        return [true, i];
      }
    }
    //console.log(person + 'doesn't have a slack')
    return [false, -1];
  }

  function checkDB(person) {
    //the name has been authenticaed so now see if the person is in our db
    //check if this is the first time the user is accessing the app - will check if person is in our db but for now will check if in sampleUsers array
    //if not in our db then create a person object and add them in
    var index = isAuthentic(person, sampleUsers, "sender");
    console.log(index);
    if(!index[0]) {
      console.log("added " + person);
      var oPerson = createPersonObj(person);
      sampleUsers.push(oPerson);
      index[1] = sampleUsers.length-1;
    }
    //once added in successfully or was already in db, store in session so that person's info can be displayed in user profile page and go to the userProfile page
    console.log(sampleUsers);
    localStore(sampleUsers[index[1]]);
    goToUserProfilePage();
  };

  function createPersonObj(person){
    return {
      sender: person,
      //initilizes the number of bees to give
      beesToGive: 10,
      avatar:"images/demoUser3.png",
      reciever: "",
      date: "",
      message: "",
    }
  }

  function localStore(person) {
    var strPerson = JSON.stringify(person);
    console.log(person);
    console.log(strPerson);
    localStorage.setItem("currUser",strPerson);
  };

  function goToUserProfilePage() {
    window.location.href = "userProfile.html";
  };
}
else {
  alert("Web storage is not supported on this browser, please use a different browser");
};
