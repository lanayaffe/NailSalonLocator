let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

const output = document.getElementById("map");

function success(pos) {
	
	let latitude  = pos.coords.latitude;
                        let longitude = pos.coords.longitude;
	let accuracy = pos.coords.accuracy;

    const img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);

};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);

 const img = new Image();
    const myLoc = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=13&size=300x300&maptype=roadmap&markers=color:blue%7Clabel:A%7C ${latitude},${longitude}`;
img.src = myLoc;

//PUSH NOTIFICATIONS
//if ('serviceWorker' in navigator && 'PushManager' in window) {
//  console.log('Service Worker and Push are supported');
//
//  navigator.serviceWorker.register('serviceworker.js')
//  .then(function(swReg) {
//    console.log('Service Worker is registered', swReg);
//
//    swRegistration = swReg;
//  })
//  .catch(function(error) {
//    console.error('Service Worker Error', error);
//  });
//} else {
//  console.warn('Push messaging is not supported');
//  pushButton.textContent = 'Push Not Supported';
//}
//    
//const applicationServerPublicKey = '<BFx19Df8NTF59s3Vjje013CC5r4L_Y2Oxl04pLdPkhnq-m-43ZTJHhxfULAxg9DgKthFbS2KceHQh3qQvPW1hZc>';
//    
//function initialiseUI() {
//  pushButton.addEventListener('click', function() {
//    pushButton.disabled = true;
//    if (isSubscribed) {
//      // TODO: Unsubscribe user
//    } else {
//      subscribeUser();
//    }
//  });
//
//  // Set the initial subscription value
//  swRegistration.pushManager.subscribe({
//  userVisibleOnly: true,
//  applicationServerKey: applicationServerKey
//})
//.then(function(subscription) {
//  console.log('User is subscribed.');
//
//  updateSubscriptionOnServer(subscription);
//
//  isSubscribed = true;
//
//  updateBtn();
//
//})
//.catch(function(err) {
//  console.log('Failed to subscribe the user: ', err);
//  updateBtn();
//});
//}
//    
//function subscribeUser() {
//  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
//  swRegistration.pushManager.subscribe({
//    userVisibleOnly: true,
//    applicationServerKey: applicationServerKey
//  })
//  .then(function(subscription) {
//    console.log('User is subscribed.');
//
//    updateSubscriptionOnServer(subscription);
//
//    isSubscribed = true;
//
//    updateBtn();
//  })
//  .catch(function(err) {
//    console.log('Failed to subscribe the user: ', err);
//    updateBtn();
//  });
//}
//    
//function updateBtn() {
//  if (Notification.permission === 'denied') {
//    pushButton.textContent = 'Push Messaging Blocked.';
//    pushButton.disabled = true;
//    updateSubscriptionOnServer(null);
//    return;
//  }
//
//  if (isSubscribed) {
//    pushButton.textContent = 'Disable Push Messaging';
//  } else {
//    pushButton.textContent = 'Enable Push Messaging';
//  }
//
//  pushButton.disabled = false;
//}
//    
//navigator.serviceWorker.register('serviceworker.js')
//.then(function(swReg) {
//  console.log('Service Worker is registered', swReg);
//
//  swRegistration = swReg;
//  initialiseUI();
//})
//
//const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
//swRegistration.pushManager.subscribe({
//  userVisibleOnly: true,
//  applicationServerKey: applicationServerKey
//})