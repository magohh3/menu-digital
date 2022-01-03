
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

$(document).ready(function () {
    $('a.food').on('click', function () {
        var image = $(this).attr('src');
        $('#myModal').on('show.bs.modal', function () {
            $("#uno").attr("src", image);
        });
        var text = $(this).attr('data-content');
        	$("#dos").text(text);
        var text = $(this).attr('data-name');
        	$("#tres").text(text);

    	});
});

  function closet() {
  var y = document.getElementById("myLinks");
  if (y.style.display === "block") {
    y.style.display = "none";
  }  
} 



$(document).ready(function () {
    $('a.food').on('click', function () {
        var image = $(this).attr('src');
        $('#myModal1').on('show.bs.modal', function () {
            $("#uno").attr("src", image);
        });
        var text = $(this).attr('data-content');
          $("#dos").text(text);
    });
});

