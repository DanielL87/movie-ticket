
function Ticket(movieName, showtime, age) {
  this.movieName = movieName,
  this.showtime = showtime,
  this.age = age
}

Ticket.prototype.price = function() {
  var basePrice = 10;
  if (this.age < 10){
    basePrice-=2;
    if (this.showtime === "1:30"){
      basePrice-=2;
    }
  } else if (this.age > 65){
    basePrice-=3;
    if (this.showtime === "1:30"){
      basePrice-=2;
    }
  } else if (this.showtime === "1:30"){
    basePrice-=2;
  }
  return basePrice;
}

// Front End


$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();
    var inputtedMovieName = $("#movie-name").val();
    var inputtedShowtime = $("#showtime").val();
    var inputtedAge = $("input#age").val();

    $("#movie-name").val("");
    $("#showtime").val("");
    $("input#age").val("");

    var newTicket = new Ticket(inputtedMovieName, inputtedShowtime, inputtedAge)
    var ticketPrice = newTicket.price();
    $("#output").text("$" + ticketPrice + ".99");



    // addressBook.addContact(newContact);
    // displayContactDetails(addressBook);
  });
})
