var apiKey = require('./../.env').apiKey;
var accessToken = '';
if (apiKey) {
  accessToken = '&access_token=' + apiKey;
}

GitHub = function(){
}

GitHub.prototype.getUser = function(userName, displayFunction) {
  $.get('https://api.github.com/users/' + userName + accessToken.replace('&','?')).then(function(response) {
    displayFunction(response);
  }).fail(function(error) {
    displayFunction(error);
  });
}

GitHub.prototype.getRepos = function(userName, displayFunction) {
  $.get('https://api.github.com/users/' + userName + '/repos?sort=created&per_page=100' + accessToken).then(function(response) {
    displayFunction(response);
  }).fail(function(error) {
    displayFunction(error);
  });
}

exports.githubModule = GitHub;
