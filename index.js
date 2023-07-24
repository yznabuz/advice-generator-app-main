genadvice();

function dispadvice(data) {
  const advid = data.slip.id;
  document.getElementById("idnum").innerHTML = advid;
  const adv = data.slip.advice;
  document.getElementById("advv").innerHTML = adv;
}

function genadvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => dispadvice(data))
    .catch((error) => console.error(error));
}
