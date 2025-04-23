const searchInput = document.getElementById('searchInput');
const userList = document.getElementById('userList');
const users = userList.getElementsByTagName('li');

searchInput.addEventListener('keyup', function () {
  const filter = searchInput.value.toLowerCase();

  for (let i = 0; i < users.length; i++) {
    let user = users[i].textContent.toLowerCase();

    if (user.includes(filter)) {
      users[i].style.display = '';
    } else {
      users[i].style.display = 'none';
    }
  }
});
