## Web Accessibility

Web accessibility ensures that your content is usable by all people. Including those with disabilities.

Set of guidelines are developed by WCAG
- Use semantic HTML
    This means use <header>, <nav>, <button>, etc, instead of <div id="header">, <span onclick="">, etc.

- Label all form elements
    Every input field should have a clear label. And the for attribute in the label should match the ID of the corresponding input. Avoid using placeholder text as a label, it disappears when users type and may not be read by screen readers.

- Use alternative text for images
    Provide *descriptive* alt text for meaningful images. Use an empty alt for any depritive images so the screen reader can skip them.

- Ensure sufficient color contrast
    Helps users with low vision or color blindness.

- Make content keyboard accessible
    Makes the website usable without needing a mouse or touch input. Elements like a and input have already built in accessibility using tab enter or space and work naturally with screen readers.

- Use headings to structure content

- Provide meaningful link text
    Should show the link's purpose. Bad example is like "click here."

- Include captions and transcripts
    Videos should include captions. Audio only content should include transcripts

- Test with assistive technologies
    Use keyboard only navigation, test with screen readers, check contrast ratios, use accessibility tools like Axe, Lighthouse, or WAVE.

- Use ARIA only when necessary
    The ARIA (Accessible Rich Internet Applications) specification provides attributes to enhance accessibility, but it should be used sparingly and only when native HTML cannot achieve the desired effect.
    (Prefer HTML semantic elements)

    - aria-label    Provides a custom label for screen readers
    - aria-hidden   Hides an element from assistive technologies
    - aria-expanded Indicates whether a collapsible element is open
    - aria-checked  Shows the state of checkboxes or radio buttons
    - aria-live     Declares a region of the page as dynamic/live
    - aria-describedby Points to text that describes an element.

------

