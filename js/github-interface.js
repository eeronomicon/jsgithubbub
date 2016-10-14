var GitHub  = require('./../js/github.js').githubModule;

var displayRepos = function(reposList) {
  for (var i = 0; i < reposList.length; i++) {
    var repoName = reposList[i].name;
    var repoDescription = reposList[i].description;
    if (!repoDescription) {
      repoDescription = 'None provided';
    }
    var repoURL = reposList[i].html_url;
    console.log(repoName + ' / ' + repoDescription + '(' + repoURL + ')');
  }
}

$(document).ready(function() {
  var myGithub = new GitHub ();

  $('#user_lookup').submit(function(event) {
    event.preventDefault();
    var userName = $('#user_name').val();
    myGithub.getRepos(userName, displayRepos);
  });
});
