$( function() {

    //inline datepicker
    $( "#datepicker-inline" ).datepicker();

    //  implement displaying a button for selecting Today’s
    // date and a Done button for closing the calendar 

    $("#datepicker").datepicker({
        showButtonPanel: true,
        showAnim: "fold"
    });

    //implement showing month and year dropdowns in place of the static month/year header
    $("#datepicker2").datepicker({
        changeMonth: true,
        changeYear: true,
        showAnim: "slideDown"
    });

    //implement showing multiple months in a single Datepicker  
    $("#datepicker3").datepicker({
        numberOfMonths: 3,
        showButtonPanel: true,
        showAnim: "fadeIn"
    });


    //implement selecting the date range  
    var dateFormat = "mm/dd/yy",
    from = $( "#from" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        showAnim: "clip"
    })
    .on("change", function () { 
        to.datepicker("option", "minDate", getDate( this) );
    }),
    to = $("#to").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        showAnim: "clip"
    }) 
    .on("change", function(){
        from.datepicker("option", "maxDate", getDate(this));
    });

    function getDate( element ){
        var date;
        try{
            date = $.datapicker.parseDate(dateFormat, element.value);
            console.log(element.value);
        }catch(error){
            date = null;
        }
        return date;
    }
    
    //set the Datepicker to open on focus (default behavior), on icon click, or both
    $("#datepicker4").datepicker({
        showOn: "button",
        buttonImage : "img/calendar.gif",
        showButtonPanel: true,
        buttonImageOnly: true,
        showAnim: "slide",
        buttonText: "Select date"
    })
    .focus(function() {
        $("#datepicker4").datepicker("show");
    });


    //autocomplete 
    let availableBrands = [
        "Romet",
        "BTWIN",
        "Rockrider",
        "Elops",
        "Triban",
        "Van Rysel",
        "Riverside",
        "Smoby",
        "Slash",
        "Fuel",
        "Supercaliber",
        "Mafiabikes"
    ];
    $("#tags").autocomplete({
        source: availableBrands
    });

    // $('.sign-up').click(function(event) {
    //     event.preventDefault();
      
    //     $.ajax({
    //         url: this.href,
    //         success: function(html) {
    //             $(".site-main").empty().append(html)
    //         }
    //     })
    // })

    // $('.order-form').click(function (event) { 
    //     event.preventDefault();

    //     $.ajax({
    //         url: this.href,
    //         success: function(html) {
    //             $('.site-main').empty().append(html);
    //         }
    //     })
    //  })


});
