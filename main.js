function getAllIssues(){
    debugger;
    document.getElementById('issueInputForm').addEventListener('submit', submitIssue);
    var issues = JSON.parse(localStorage.getItem('issues'));
    var issueList = document.getElementById("issuesList");
    issueList.innerHTML = "";
    for (var i = 0; i < issues.length; i++ ){
        var id = issues[i].id;
        var desc = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assignee;
        var status = issues[i].status;

        issueList.innerHTML +='<div class="well">'+
        '<h6>Issue ID: ' + id + '</h6>'+
        '<p><span class="label label-info">' + status + '</span></p>'+
        '<h3>' + desc + '</h3>'+
        '<p><span class="glyphicon glyphicon-time"></span> ' + severity + ' '+
        '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
        '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\''+id+'\')">Close</a> '+
        '<a href="#" class="btn btn-danger" onclick="deleteIssue(\''+id+'\')">Delete</a>'+
        '</div>';
    }
}



function submitIssue(evt) {
    var issueId = chance.guid();
    var issueDescription = document.getElementById("issueDescInput").value;
    var issueSeverity = document.getElementById("issueSeverityInput").value;
    var issueAssignee = document.getElementById("issueAssignedToInput").value;
    var issueStatus = "Open";

    var issue = {
        id : issueId,
        description: issueDescription,
        severity: issueSeverity,
        assignee: issueAssignee,
        status: issueStatus
    }

    if(localStorage.getItem('issues') === null) {
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    } else {
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }
    getAllIssues();

}