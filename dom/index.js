class NotificationService {
  constructor() {
    this.notification = document.getElementById("notification");
    this.notificationText = document.getElementById("notificationText");
  }

  showMessage(message, className, duration) {
    this.notification.className = "notification ";
    this.notificationText.innerText = message;
    this.notification.style.display = "block";
    if (className === "success") {
      this.notificationText.style.cssText = `
      background-color: green;
      text-align: center;
      display: flex;
      justify-content: center;
      border-radius: 20px;
      align-items: center;
      height: 100px;
      color: white;
      font-size: 40px;`;
    } else {
      this.notificationText.style.cssText = `
      background-color: red;
      text-align: center;
      display: flex;
      justify-content: center;
      border-radius: 20px;
      align-items: center;
      height: 100px;
      color: black;
      font-size: 40px;`;
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

console.log(errorNotificationService.showErrorMessage("Error", 3000));
console.log(successNotificationService.showSuccessMessage("Success", 5000));
