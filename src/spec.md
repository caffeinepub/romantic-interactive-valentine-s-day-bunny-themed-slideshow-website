# Specification

## Summary
**Goal:** Make the slideshow’s letter/photo areas truly editable and ensure users can paste or pick photos and type notes reliably on both desktop and mobile.

**Planned changes:**
- Prevent ambient/background visual layers (e.g., hearts/sparkles/overlays/animations) from intercepting pointer/touch events over all form elements and interactive areas, ensuring click/tap focuses and typing works (Love Letters photo area + notes textarea, Page 8 letter textarea, Page 9 message textarea, Page 11 final note textarea).
- Improve the Love Letters (Page 5) photo slot to reliably accept pasted clipboard images on desktop when focused.
- Add a user-initiated image picker fallback inside each opened LoveLetterCard for devices/browsers that don’t support image paste (commonly mobile), storing/handling the image client-side only.

**User-visible outcome:** Users can tap/click into each letter/notes textarea and type without interference from animations, and can add a photo to each Love Letter by pasting on desktop or selecting from a file picker on mobile.
