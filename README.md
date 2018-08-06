# unload-testing
Testing different events for signaling a page unload

- public/index.html: Contains examples of visibilitychange, pagehide, unload, beforeunload, which you can manually play around with.
- public/empty.html: Used by aceptance tests to automatically confirm the workings of thos same event listeners.

## Chrome-Headless Automated Testing Results

  Closing tab
  
    ✓ should post on window.onbeforeunload (1134ms)
    
    ✓ should post on window.onunload (1037ms)
    
    ✓ should post on window.onpagehide (1031ms)
    
    ✓ should post on visibilitychange event listener (1030ms)
    
    ✓ should NOT post on beforeunload event listener (1039ms)
    
    ✓ should NOT post on unload event listener (1034ms)
    
    ✓ should NOT post on pagehide event listener (1039ms)
    

  Navigating tab
  
    ✓ should post on window.onbeforeunload (1062ms)
    
    ✓ should NOT post on window.onunload (1057ms)
    
    ✓ should NOT post on window.onpagehide (1066ms)
    
    ✓ should NOT post on visibilitychange event listener (1056ms)
    
    ✓ should NOT post on beforeunload event listener (1052ms)
    
    ✓ should NOT post on unload event listener (1049ms)
    
    ✓ should NOT post on pagehide event listener (1050ms)
    

## Manual Testing Results
### Firefox
Navigate tab to different website
  1. window.onbeforeunload

Close tab
  1. window.onbeforeunload

### Safari
Navigate tab to different website
  1. window.onbeforeunload
  2. window.onpagehide

Close tab
  1. window.onbeforeunload
