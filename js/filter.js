//$(function(){filter('RS');});

//1. include filter.js in recognitionSent.html & recognitionReceived.html need to go before RR.js and RS.js
//2. add call func filter('RS') to RS.js in init()
//3. add call func filter('RR') to RR.js in init()

function getUserNames () {

///Code here for retrieving usernames from Slack
///assign usernameArr to list of username, that is an array of strings, from Slack
  var usernameArr = [];

  //BEGIN unit test assuming got usernames from Slack
  //DELETE when connected to Slack API
  usernameArr = ['Jason Dang','Bill','Egor','ashley.elder','MerryD','erikhoy'];



  //END unit test

  if(usernameArr.length<=0)
    //No users in Slack
    $('#browsers').prev().attr('placeholder', 'There are no users.');
  else {
    //populate usernames in datalist for search text input
    usernameArr.forEach(function(item) {$('#browsers').append('<option value="'+item+'"></option>');});
  }
};


function getDateRange() {
  var beginDate = $('#from').val();
  var endDate = $('#to').val();
  return [beginDate, endDate];
};


function filterByName ( pageFlag, name, recognitionArr) {
  //console.log('filterByName');
  //console.log(recognitionArr);
  var filteredArr = recognitionArr.filter(function(obj) {
    if(pageFlag == 'RS')
      return obj.receiver.toLowerCase().search(name.toLowerCase())>=0;
    else {
      return obj.sender.toLowerCase().search(name.toLowerCase())>=0;
    }
  });
  return filteredArr;
};


function filterByDateRange ( beginDate, endDate, recognitionArr) {
  //convert beginDate and endDate strings to Date object for logical comparison
  //e.g. 1/2/2018 or 01/02/2018 is same for Date object
  var beginDateObj = new Date(beginDate);
  var endDateObj = new Date(endDate);
  var filteredArr = recognitionArr.filter(function(obj) {
    var dateObj = new Date(obj.date);
    if (dateObj>=beginDateObj && dateObj<=endDateObj) return obj;
  });
  return filteredArr;
};


function filterResults( pageFlag, username, beginDate, endDate, recognitionArr ) {
  var filteredArr = [];

  switch (true) {
    //filter by username only
    case (username.length>0 && beginDate.length<=0):
      filteredArr = filterByName( pageFlag, username, recognitionArr );
      break;
    //filter by date range only
    case (username.length<=0 && beginDate.length>0):
      filteredArr = filterByDateRange( beginDate, endDate, recognitionArr );
      break;
    //filter by both username and date range
    case (username.length>0 && beginDate.length>0):
      //var filteredUserName = filterByName( pageFlag, username, recognitionArr );
      var filteredDateRange = filterByDateRange( beginDate, endDate, recognitionArr );

         if(pageFlag=='RR')
           filteredArr = filteredDateRange.filter(function(obj,index) {return obj.sender.toLowerCase() == username.toLowerCase();});
         else
           filteredArr = filteredDateRange.filter(function(obj,index) {return obj.receiver.toLowerCase() == username.toLowerCase();});
      // if(pageFlag='RS')
      //   filteredArr = filteredDateRange.filter(function(obj,index) {return obj.receiver.toLowerCase() == filteredUserName[index].receiver.toLowerCase()});
      // else
      //   filteredArr = filteredDateRange.filter(function(obj,index) {return obj.sender.toLowerCase() == filteredUserName[index].sender.toLowerCase()});
      break;
    default: return [];
      break;
  };
  return filteredArr;
};


function filter(pageFlag) {
  var recognitionArr = [];  //array of objects
  if(pageFlag=='RS') {
    recognitionArr = getAllRecognitionSent();
  }
  if(pageFlag=='RR') {
    recognitionArr = getAllRecognitionReceived();
  }

  //populate datalist with usernames
  getUserNames();

  //code to retrieve username date range from database
  //maybe unnecessary because date function will fitler whatever range selected

//using generic 'button' selector trigger event when clicking calendar icon
  $('#filter').on('click', function(e) {
    var username = $('#browsers').prev().val();
    var beginDate = getDateRange()[0];
    var endDate = getDateRange()[1];

//console.log('before filter');
//console.log(recognitionArr);

    var filteredArr = filterResults(pageFlag, username, beginDate, endDate, recognitionArr);

    if(filteredArr.length>0) {
      if(pageFlag=='RS')
        displayList(filteredArr, 'RS');
      else
        displayList(filteredArr, 'RR');
    } else {
      var notFoundObj = new Recognition('',' ','',' ',0,' ','0 results found.')
      filteredArr = [notFoundObj];
      if(pageFlag=='RS')
        displayList(filteredArr, 'RS');
      else
        displayList(filteredArr, 'RR');
    }
//console.log('after filter');
//console.log(filteredArr);

  });

};
