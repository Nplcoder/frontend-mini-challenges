const showToastBtn = document.querySelector(".show-toast");
const horizontalToast = document.querySelector("#horizontal-toast");
const verticalToast = document.querySelector("#vertical-toast");
const toastSignal = document.querySelector("#toast-signal");
const toastMessage = document.querySelector(".toast-message");
const duration = document.querySelector("#duration");
const toastContainer = document.querySelector(".toast-container");
const toast = document.querySelector(".toast");

showToastBtn.addEventListener("click", () => {
  const newToast = document.createElement("div");
  newToast.classList.add("toast");
  if (toastSignal.value === "success") {
    newToast.classList.add("toast", "success");
  } else if (toastSignal.value === "error") {
    newToast.classList.add("toast", "error");
  } else if (toastSignal.value === "warning") {
    newToast.classList.add("toast", "warning");
  } else if (toastSignal.value === "info") {
    newToast.classList.add("toast", "info");
  }

  newToast.innerHTML = ` ${toastMessage.value}`;

  toastContainer.append(newToast);

  const closeIcon = document.createElement("span");
  closeIcon.innerText = " ✕";
  newToast.append(closeIcon);

  function removeToast() {
    
        if (toastContainer.classList.contains('right')) {
            newToast.classList.add("toRight");
          }else {
            newToast.classList.add('toLeft')
          }
          setTimeout(() => {
            newToast.remove()
          }, 1000)
    
  }

  closeIcon.addEventListener("click", () => {
    removeToast()
  });

  setTimeout(() => {
removeToast()
  }, parseInt(duration.value) *1000)


  if (horizontalToast.value === "right") {
    toastContainer.classList.add("right");
  } else {
    toastContainer.classList.remove("right");
  }

  if (verticalToast.value === "bottom") {
    toastContainer.classList.add("bottom");
  } else {
    toastContainer.classList.remove("bottom");
  }
});
