let notifications = new Notifications();
let notifications2 = new Notifications(
    {autoHide: false}
);
let notifications3 = new Notifications(
    {},
    {error: `<h1>My Error Notification: %%title%%</h1>
            <div data-process="body">
                <span>%%content%%</span>
                <a href="%%src%%" data-type="link">%%content%%</a>
            </div>`,
    mytest: `<h1>%%header%%</h1>
            <ul data-process="list">
                <li>%%content%%</li>
            </ul>`}
);
let notifications4 = new Notifications(
    {displayDuration: 3000, areaWidth: 150,topOffset:200,areaSpacing:-10}
);

document.addEventListener("DOMContentLoaded", () => {
    const link = document.getElementById("auto-hide");
    link.addEventListener("click", () => {
        let notif = setTimeout(function(){notifications.emit('Plain text example')},10);
        notif = setTimeout(function(){notifications.emit('Long long long long long long long long long long long long long long long long long long long long long long long long plain text example')},1500);
    });
    const link2 = document.getElementById("on-click-hide");
    link2.addEventListener("click", () => {
        let notif = setTimeout(function(){notifications2.emit('Plain text example')},10);
        notif = setTimeout(function(){notifications2.emit('Long long long long long long long long long long long long long long long long long long long long long long long long plain text example')},1500);
    });
    const link3 = document.getElementById("predefined-templates");
    link3.addEventListener("click", () => {
        let notif = setTimeout(function(){notifications.emit([{title: 'Default structured mesaage example',body: [{content:'This is a '}, {src: '#anchor',content: 'link',type: 'link'},{content: '.'}]}])},10);
        notif = setTimeout(function(){notifications.emit([{title: 'message example',body: [{content:'This is a '}, {src: '#anchor',content: 'link',type: 'link'},{content: '.'}]}],'error')},1000);
        notif = setTimeout(function(){notifications.emit([{title: 'message example',body: [{content:'This is a '}, {src: '#anchor',content: 'link',type: 'link'},{content: '.'}]}],'warning')},2000);
        notif = setTimeout(function(){notifications.emit([{title: 'message example',body: [{content:'This is a '}, {src: '#anchor',content: 'link',type: 'link'},{content: '.'}]}],'hint')},3000);
    });
    const link4 = document.getElementById("custom-templates");
    link4.addEventListener("click", () => {
        let notif = setTimeout(function(){notifications3.emit([{title: 'message example',body: [{content:'This is a '}, {src: '#anchor',content: 'link',type: 'link'},{content: '.'}]}],'error')},10);
        notif = setTimeout(function(){notifications3.emit([{header: 'my custom message',list: [{content:'item 1'},{content: 'item 2'}]}],'mytest')},1000);
    });
    const link5 = document.getElementById("custom-setup");
    link5.addEventListener("click", () => {
        let notif = setTimeout(function(){notifications4.emit('Plain text example')},10);
        notif = setTimeout(function(){notifications4.emit('Long long long long long long long long long long long long long long long long long long long long long long long long plain text example')},1500);
    });
});

