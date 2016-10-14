var apiKey = require('./../.env').apiKey;
var accessToken = '';
if (apiKey) {
  accessToken = '&access_token=' + apiKey;
}

GitHub = function(){
}

GitHub.prototype.getRepos = function(userName, displayFunction) {
  $.get('https://api.github.com/users/' + userName + '/repos?sort=created&per_page=200' + accessToken).then(function(response) {
    displayFunction(response);
  }).fail(function(error) {
    $('#displayRepos').text(error.responseJSON.message);
  });
}

exports.githubModule = GitHub;
