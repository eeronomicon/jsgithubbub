var apiKey = require('./../.env').apiKey;

GitHub = function(){
}

GitHub.prototype.getRepos = function(userName, displayFunction) {
  $.get('https://api.github.com/users/' + userName + '/repos?sort=created&access_token=' + apiKey).then(function(response) {
    console.log(response);
    displayFunction(response);
  }).fail(function(error) {
    $('#displayRepos').text(error.responseJSON.message);
  });
}

exports.githubModule = GitHub;
