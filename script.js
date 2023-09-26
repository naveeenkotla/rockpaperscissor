blo = document.querySelectorAll(".block");
use = document.getElementById("res");
used = document.getElementById("rest");
refresh = document.getElementsByClassName('bu');

st = { r: 1, p: 2, s: 3 };
blo.forEach(val => {
  val.addEventListener("click", () => {

    if (st[val.value] == 1) {
      used.innerText = "you choose rock"
    }
    if (st[val.value] == 2) {
      used.innerText = "you choose paper"
    }
    if (st[val.value] == 3) {
      used.innerText = "you choose scissor"
    }
    let x = Math.round(Math.random() * 3)
    if (x == st[val.value]) {
      use.innerText = "its a draw system choosed the same"

    }
    else if (x == 2 && st[val.value] == 3) {
      use.innerText = "you win system choosed paper"

    }
    else if (x == 1 && st[val.value] == 2) {
      use.innerText = "you won system choosed rock"
    }
    else if (x == 3 && st[val.value] == 1) {
      use.innerText = "you win system choosed siccor"
    }
    else if (x == 3 && st[val.value] == 2) {
      use.innerText = "you lost system choosed siccor"

    }
    else if (x == 2 && st[val.value] == 1) {
      use.innerText = "you lost system choosed paper"
    }
    else if (x == 1 && st[val.value] == 3) {
      use.innerText = "you lost system choosed rock"
    }
  })

});
Array.from(refresh).forEach(refresh => {
  refresh.addEventListener("click", () => {
    use.innerText = "";
    used.innerText = "";
  });
});