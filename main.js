// To avoid incomplete loading
window.onload=function(){
    var qrDialog = document.getElementById('QQDialog');
    qrDialog.addEventListener('confirm.mdui.dialog', function () {
        copyToClipboard("3529609351");
        mdui.snackbar({
            message: '已复制到剪贴板'
        });
    })
};

// Here comes click events
function onBlogClick () {
    window.location.href = "https://mun.stfw.info/blog";
}
function onGitHubClick () {
    window.location.href = "https://github.com/SDYZMUN";
}
function onEmailClick () {
    window.location.href = "mailto:sdyzmun@qq.com";
}
function onAboutClick () {
    window.location.href = "https://mun.stfw.info/blog/about";
}

function copyToClipboard(text) {
    var textArea = document.createElement("textarea");
  
    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
  
    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';
  
    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = 0;
  
    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
  
    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = 'transparent';
  
  
    textArea.value = text;
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
        var successful = document.execCommand('copy');
    } catch (err) {
        console.log(err);
    }
  
    document.body.removeChild(textArea);
}
