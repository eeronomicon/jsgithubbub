var GitHub  = require('./../js/github.js').githubModule;

var displayRepos = function(reposList) {
  $('#display_repos').empty();
  if (!reposList.status) {
    $('#display_repos').append('<li class="list-group-item active">Repository Name / Description / Date Created (' + reposList.length + ' Repositories Returned)</li>');
    for (var i = 0; i < reposList.length; i++) {
      var repoName = reposList[i].name;
      var repoDescription = reposList[i].description;
      if (!repoDescription) {
        repoDescription = 'No description given';
      }
      var repoCreated = moment(reposList[i].created_at).format('MM/DD/YYYY');
      var repoURL = reposList[i].html_url;
      var liContent = '<li class="list-group-item"><a href="' + repoURL + '" target="_new">' + repoName + ' / ' + repoDescription + ' / ' + repoCreated + '</a></li>';
      $('#display_repos').append(liContent);
    }
  } else if (reposList.status === 404) {
    $('#display_repos').append('<li class="list-group-item active">No repositories found. Please check the user name.</li>');
  } else {
    $('#display_repos').append('<li class="list-group-item active">There was an error with your query.</li>');
  }
}

var displayUser = function(userInfo) {
  $('#display_user').empty();
  if (!userInfo.status) {
    var userImg = userInfo.avatar_url;
    var userHandle = userInfo.login;
    var userName = userInfo.name;
    if (!userName) {
      userName = 'No Name Provided';
    }
    var userURL = userInfo.html_url;
    var userCreated = moment(userInfo.created_at).format('MM/DD/YYYY');
    var userContent = '<div class="row"><div class="col-xs-10"><h4>' + userHandle + ' (' + userName + ')</h4><p>On GitHub since ' + userCreated + '</p><p>GitHub Page: <a href="' + userURL + '" target="_new">' + userURL + '</a></p></div><div class="col-xs-2"><img src="' + userImg + '"></div></div><br>';
    $('#display_user').html(userContent);
  }
}

$(document).ready(function() {
  var myGithub = new GitHub ();

  $('#user_lookup').submit(function(event) {
    event.preventDefault();
    var userName = $('#user_name').val();
    myGithub.getUser(userName, displayUser);
    myGithub.getRepos(userName, displayRepos);
  });
});
