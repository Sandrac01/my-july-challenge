const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <div class="alert alert-${type} alert-dismissible" role="alert">
       ${message}
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  alertPlaceholder.appendChild(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");

if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("Thank you for your subscription", "success");
  });
}
