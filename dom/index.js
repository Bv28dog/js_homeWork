class NotificationService {
  constructor() {
    this.notification = document.getElementById("notification");
    this.notificationText = document.getElementById("notificationText");
  }

  showMessage(message, className, duration) {
    this.notification.className = "notification " + className;
    this.notificationText.innerText = message;
    this.notification.style.display = "block";
    if (className === "success") {
      this.notificationText.style.backgroundColor = "green";
      this.notificationText.style.textAlign = "center";
      this.notificationText.style.display = "flex";
      this.notificationText.style.justifyContent = "center";
      this.notificationText.style.borderRadius = "20px";
      this.notificationText.style.alignItems = " center";
      this.notificationText.style.height = "100px";
      this.notificationText.style.color = "white";
      this.notificationText.style.fontSize = "40px";
    } else {
      this.notificationText.style.backgroundColor = "red";
      this.notificationText.style.textAlign = "center";
      this.notificationText.style.display = "flex";
      this.notificationText.style.justifyContent = "center";
      this.notificationText.style.borderRadius = "20px";
      this.notificationText.style.alignItems = " center";
      this.notificationText.style.height = "100px";
      this.notificationText.style.color = "black";
      this.notificationText.style.fontSize = "40px";
    }

    setTimeout(() => {
      this.notification.style.display = "none";
    }, duration);
  }
}

class SuccessNotification extends NotificationService {
  constructor() {
    super();
  }

  showSuccessMessage(message, duration = 10000) {
    this.showMessage(message, "success", duration);
  }
}

class ErrorNotification extends NotificationService {
  constructor() {
    super();
  }

  showErrorMessage(message, duration = 1000) {
    this.showMessage(message, "error", duration);
  }
}

const successNotificationService = new SuccessNotification();
const errorNotificationService = new ErrorNotification();

console.log(successNotificationService.showSuccessMessage("Success"));
console.log(errorNotificationService.showErrorMessage("Error"));
