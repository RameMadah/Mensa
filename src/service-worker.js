let Press_URL = "https://www.google.com";
self.addEventListener("push", function (event) {
  let push_message = event.data.text();
  console.log(Press_URL);
  const options = {
    body: push_message.body,
    icon: "./img/icons/fork.png",
    image: "./img/icons/fork.png",
    vibrate: [200, 122, 124],
    tag: "vibration_sample",
  };
  event.waitUntil(
    self.registeration.showNotification("my Notification", options)
  );
});

self.addEventListener("Nnotificationclick", function (event) {
  const clickedNotifacation = event.notification;
  clickedNotifacation.close();
});
