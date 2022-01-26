chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("main.html",
    {  frame: "none",
       id: "crositbrowserWindow",
       innerBounds: {
         width: 1160,
         height: 670,
         minWidth: 500,
         minHeight: 80
      }
    }
  );
});