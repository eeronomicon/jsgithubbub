var GitHub  = require('./../js/github.js').githubModule;

var displayRepos = function(reposList) {
  $('#display_repos').empty();
  $('#display_repos').append('<li class="list-group-item active">Repository Name / Description</li>');
  for (var i = 0; i < reposList.length; i++) {
    var repoName = reposList[i].name;
    var repoDescription = reposList[i].description;
    if (!repoDescription) {
      repoDescription = 'No description given';
    }
    var repoCreated = reposList[i].created_at;
    var repoURL = reposList[i].html_url;
    var liContent = '<li class="list-group-item"><a href="' + repoURL + '" target="_new">' + repoName + ' / ' + repoDescription + ' (' + repoCreated + ')' + '</a></li>';
    $('#display_repos').append(liContent);
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
