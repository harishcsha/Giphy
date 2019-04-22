/**
 * @author [Harish C Jingade]
 * @email [justdoitnowharish@gmail.com]
 * @create date 2019-04-21 17:26:24
 * @modify date 2019-04-21 17:26:24
 * @desc [Giphy Search]
 */

let getData = function() {
  let giphyUrl = 'http://api.giphy.com/v1/gifs/search';
  let apiKey = 'dc6zaTOxFJmzC';
  let limit = '5';
  let searchKey = $('#giphy_Search').val();
  let url = giphyUrl + '?q=' + searchKey + '&api_key=' + apiKey + '&limit=' + limit;

  $.ajax({
    type: 'GET',
    url: url,
    contentType: 'application/json; charset=utf-8',
    success: function(res) {
      console.log(res);
      innerHtml(res);
    },
    error: function(err) {
      console.log(err);
    }
  });
};

let innerHtml = function(res) {
  let result = res.data.map(url => url.images.original.url);
  for (var i = 0; i < result.length; i++) {
    document.getElementById('result_giphy').innerHTML = `<img src="${result[i]}" class="imgDisplay">`;
  }
};
