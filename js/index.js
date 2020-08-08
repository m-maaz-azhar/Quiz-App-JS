function submitName(e) {
    e.preventDefault();
    let userName = document.forms['welcomeForm']['userName'].value;
    sessionStorage.setItem("name", userName);
    location.href = "quiz.html";
    console.log(userName);
}