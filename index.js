function varsayilanekrangit() {
    window.location.href = "#varsayilanekran";
}

function odevlerekrangit() {
    window.location.href = "#odevlerekran";
}

function duyurularekrangit() {
    window.location.href = "#duyurularekran";
}

function artiekrangit() {
    window.location.href = "#artiekran";
}

function takvim() {
    window.location.href = "dersprogramı.jpeg";
}

function yapayzeka() {
    window.location.href = "https://copilot.microsoft.com/";
}

if (!('Notification' in window)) {
    console.log('Bildirim özelliği bu tarayıcıda desteklenmiyor.');
    return;
}

Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Bildirim izni alındı.');
    } else {
      console.log('Bildirim izni reddedildi.');
    }
});

if (Notification.permission === 'granted') {
    // Bildirim gösterebilirsiniz
  } else if (Notification.permission === 'denied') {
    // Kullanıcı bildirimi reddetmiş
  } else {
    // Kullanıcıya izin istemi gösterilebilir
  }
  