var pre = document.getElementsByTagName("pre");

for (var i = 0; i < pre.length; i++) {
    pre[i].className = 'codesnippet';
    var button = document.createElement('button');
    button.className = 'copy-button';
    button.setAttribute('data-clipboard-target','.codesnippet');
    button.textContent = 'Kopiëren';
    //pre[i].parentNode.appendChild(button);
    pre[i].parentNode.insertBefore(button, pre[i].nextSibling);
}

var copyCode = new ClipboardJS('.copy-button');

copyCode.on('success', function(event) {
    event.clearSelection();
    event.trigger.textContent = 'Gekopieerd!';
    window.setTimeout(function() {
        event.trigger.textContent = 'Kopiëren';
    }, 2000);
});