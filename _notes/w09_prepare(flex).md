## Flexbox

Short for flexable box layout

Provides an efficient way to lay out, align, and distribute space among items in a container
Ideal for responsive layouts

Flex direction: lays items out in a single axis, while grid handles both at once. Adjusts the size and order of the items to best fit the available space (ideal for responsive design).

flex-direction: column; usefull for smaller screens

flex-wrap: wrap; to allow items to wrap onto the new line, also usefull for smaller screens

*flex-flow: column wrap;*

### Alignment properties
justify-content     Aligns items horizontally (if row)
align-items         Aligns items vertically
align-content       Aligns multiple rows (when wrapped)

**justify-content examples:**
*flext-start (left aligned)*
*center (center aligned)*
*flex-end (end aligned)*
*space-between (makes the most amount of space between possible)*
*space-around (evenly spaced)*
*space-evenly (evenly spaces as well as from margins)*

**align-items examples:**
*flex-start (default, towards top margin)*
*flex-end (towards bottom margin)*
*center (centered vetically from top and bottom margin)*

### More properties
flex-grow       Allows an item to grow to fill available space
flex-shrink     Allows an item to shrink when necessary
flex-basis      Sets the initial size of an item
flex            Shorthand for all three: flex: grow shrink basis
align-self      Overrides align-items for a single item

example:
.item {
    flex: 1 1 200px;
}
Sets an initial size of 200px and alows the item to grow and shrink based on the space with the values of 1

## Chrome Lighthouse

A chrome browser extention that audits or tests the preformance, accesaility, etc, of my website. SEO freindly, etc. This is in dev tools, I used it last week.

## Social media meta tags

yk