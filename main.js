// Получить модальное окно
var modal = document.querySelector(".modal");

// Получить кнопку открытия модального окна
var btn = document.querySelector("#open-modal");

// Получить элемент закрытия модального окна
var span = document.querySelector(".close");

// Клик по кнопке открытия модального окна
btn.onclick = function() {
  modal.style.display = "block";
}

// Клик по элементу закрытия модального окна
span.onclick = function() {
  modal.style.display = "none";
}

// Клик вне модального окна
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function submitForm() {
  event.preventDefault();
  var login = document.getElementById("login").value;
  var password = document.getElementById("password").value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/login", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.status === "success") {
        var personalCabinetLink = document.getElementById("open-modal");
        personalCabinetLink.innerHTML = response.username;
        personalCabinetLink.onclick = null;
        modal.style.display = "none";
      } else {
        alert("Неверный логин или пароль");
      }
    }
  };
  xhr.send(JSON.stringify({ login: login, password: password }));
}


function checkCredentials(login, password) {
  // Здесь хранятся данные о пользователях (для примера). Не используйте этот подход в реальном приложении!
  var users = [
    {
      login: "user1",
      password: "password1",
    },
    {
      login: "user2",
      password: "password2",
    },
  ];

  for (var i = 0; i < users.length; i++) {
    if (users[i].login === login && users[i].password === password) {
      return true;
    }
  }
  return false;
}
