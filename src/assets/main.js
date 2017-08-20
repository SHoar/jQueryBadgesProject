$(function() {

  // your code will go here
  var URL = 'https://www.codeschool.com/users/SHoar.json';
  $.ajax({
    url: URL,
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      $.each(response, function(index, badge) {
        var badge = $('#badges');
        badge.find('p').html( courses.completed.title );
        badge.find('img')
             .attr('src', courses.completed.badge);
        badge.find('a').attr('href', courses.completed.url);
      });
    }
  });
});
