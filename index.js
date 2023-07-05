const hour = document.getElementById("hour");
const minute = document.getElementById("min");
const sec = document.getElementById("sec");
const ampm = document.getElementById("ampm");
function clock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let a = "AM";
  if (h > 12) {
    h = h - 12;
    a = "PM";
  }
  if (m < 10) {
    h = "0" + h;
  }
  if (s < 10) {
    s = "0" + h;
  }
  if (h < 10) {
    h = "0" + h;
  }
  hour.innerText = h;
  minute.innerText = m;
  sec.innerText = s;
  ampm.innerText = a;
  setTimeout(() => {
    clock();
  }, 1000);
}
clock();
