# unload-testing
Testing different events for signaling a page unload

Below are are the found order of events triggering.

// Chrome

Navigate tab to different website
  1. window.onbeforeunload

Close tab
  1. window.onbeforeunload
  2. window.onpagehide
  3. document.addEventListener('visibilitychange'
  4. window.onunload

// Firefox

Navigate tab to different website
  1. window.onbeforeunload = ()

Close tab
  1. window.onbeforeunload

// Safari

Navigate tab to different website
  1. window.onbeforeunload = ()
  2. window.onpagehide = ()

Close tab
  1. window.onbeforeunload

Reload tab
  1. window.onbeforeunload
  2. window.onpagehide
  3. window.onunload
