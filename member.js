function skillsMember() {
  var member = document.getElementById('member');
  var memberValue = member.value;
  if (memberValue === 'founder') {
    document.getElementById('skillsMember').innerHTML = 'Founder';
  } else if (memberValue === 'developer') {
    document.getElementById('skillsMember').innerHTML = 'Developer';
  } else if (memberValue === 'designer') {
    document.getElementById('skillsMember').innerHTML = 'Designer';
  } else if (memberValue === 'manager') {
    document.getElementById('skillsMember').innerHTML = 'Manager';
  } else {
    document.getElementById('skillsMember').innerHTML = 'Member';
  }
}