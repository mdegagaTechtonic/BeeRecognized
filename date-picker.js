  $( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
	      autoSize: true,
		  showOn: "button",
		  buttonImage: "images/calendar.gif",
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1	//number of months to display for date selection
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
		autoSize: true,
		showOn: "button",
		buttonImage: "images/calendar.gif",
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1  //number of months to display for date selection
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );
