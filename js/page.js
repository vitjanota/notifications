let notifications = new Notifications({autohide: true, displayduration: 1000});
let notifications2 = new Notifications({autohide: false, areawidth: 200, areaspacing: -50});

document.addEventListener("DOMContentLoaded", () => {
    const link = document.getElementById("auto-hide");
    link.addEventListener("click", () => {
        let notif = setTimeout(function(){notifications.emit('Plain text example')},10);
        notif = setTimeout(function(){notifications.emit('Long long long long long long long long long long long long long long long long long long long long long long long long plain text example')},3000);
        notif = setTimeout(function(){notifications.emit([{title: 'Default structured mesaage example',body: [{content:'This is a '}, {src: '#anchor',content: 'link',type: 'link'},{content: '.'}]}])},5000);
        lnotif = setTimeout(function(){notifications.emit([{title: 'message example',body: [{content:'This is a '}, {src: '#anchor',content: 'link',type: 'link'},{content: '.'}]}],'error')},9000);
        lnotif = setTimeout(function(){notifications.emit([{title: 'message example',body: [{content:'This is a '}, {src: '#anchor',content: 'link',type: 'link'},{content: '.'}]}],'warning')},11000);
        lnotif = setTimeout(function(){notifications.emit([{title: 'message example',body: [{content:'This is a '}, {src: '#anchor',content: 'link',type: 'link'},{content: '.'}]}],'hint')},13000);

    });
    const link2 = document.getElementById("on-click-hide");
    link2.addEventListener("click", () => {
        let notif = setTimeout(function(){notifications2.emit('Plain text example')},10);
        notif = setTimeout(function(){notifications2.emit('Long long long long long long long long long long long long long long long long long long long long long long long long plain text example')},500);
        notif = setTimeout(function(){notifications2.emit([{title: 'Default structured mesaage example',body: [{content:'This is a '}, {src: '#anchor',content: 'link',type: 'link'},{content: '.'}]}])},1000);
        lnotif = setTimeout(function(){notifications2.emit([{title: 'message example',body: [{content:'This is a '}, {src: '#anchor',content: 'link',type: 'link'},{content: '.'}]}],'error')},1500);
        lnotif = setTimeout(function(){notifications2.emit([{title: 'message example',body: [{content:'This is a '}, {src: '#anchor',content: 'link',type: 'link'},{content: '.'}]}],'warning')},2000);
        lnotif = setTimeout(function(){notifications2.emit([{title: 'message example',body: [{content:'This is a '}, {src: '#anchor',content: 'link',type: 'link'},{content: '.'}]}],'hint')},2500);

    });
});

