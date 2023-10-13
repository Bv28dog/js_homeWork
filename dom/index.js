class ProductsService {
  static showSuccessMessage(message) {
    const notification = document.getElementById("notification");
    const notificationText = document.getElementById("notificationText");

    notification.className = "notification success";
    notificationText.innerText = message;
    notification.style.display = "block";
    notificationText.style.backgroundColor = "green";
    notificationText.style.textAlign = "center";
    notificationText.style.display = "flex";
    notificationText.style.justifyContent = "center";
    notificationText.style.borderRadius = "20px";
    notificationText.style.alignItems = " center";
    notificationText.style.height = "100px";
    notificationText.style.color = "white";
    notificationText.style.fontSize = "40px";

    setTimeout(() => {
      notification.style.display = "none";
    }, 10000);
  }

  static showErrorMessage(errorMessage) {
    const notification = document.getElementById("notification");
    const notificationText = document.getElementById("notificationText");

    notification.className = "notification error";
    notificationText.innerText = errorMessage;
    notification.style.display = "block";
    notificationText.style.backgroundColor = "red";
    notificationText.style.textAlign = "center";
    notificationText.style.display = "flex";
    notificationText.style.justifyContent = "center";
    notificationText.style.borderRadius = "20px";
    notificationText.style.height = "100px";
    notificationText.style.color = "black";
    notificationText.style.fontSize = "40px";

    setTimeout(() => {
      notification.style.display = "none";
    }, 1000);
  }
}
console.log(ProductsService.showErrorMessage("Error"));
console.log(ProductsService.showSuccessMessage("Success"));
