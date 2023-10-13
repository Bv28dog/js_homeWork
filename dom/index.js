class NotificationService {
  constructor() {
    this.notification = document.getElementById("notification");
    this.notificationText = document.getElementById("notificationText");
  }

  showMessage(message, status, duration) {
    this.notificationText.innerText = message;
    this.notification.style.display = "block";
    if (status === "success") {
      this.notificationText.className = "notificationClass";
    } else {
      this.notificationText.className = "notificationClass2";
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
console.log(successNotificationService.showSuccessMessage("Success", 6000));

