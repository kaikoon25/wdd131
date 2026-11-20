# Mobile First
Mobile first design prioritizes the most important content first. More important content focused means more user focused. Must have it mobile friendly for SEO
Content first mindset
Mobile friendly is important, crucial for discoverability on the web. Many are using their phones.

Means you start with the smallest screen in mind first. Then add styles as screens get bigger.

# Media Queries
Applying CSS according to the user's device or screen size. Have to keep in mind for larger screen sizes as well, not just phone sized

# CSS Reset and Normalize CSS file
Reset removes all the default styling applied by the browser so devs can start from scratch
    ex: * {
        margin: 0;
        padding 0;
        box_sizing: border-box;
    }
There are more large scale resets available that will take out many default settings. Such as on html5 doctor dot com. 

But it will remove everything including useful default styles. Which is why some users prefer:
# Normalize .css file
Modern, community maintained stylesheet that doesn't remove all styles but instead preserves useful defaults and fixes inconsistencies between browsers
Helps maintain accessibility.
One common way to include normalize is in the HTML file:
    <link rel="stylesheet" href="(url i dont want to copy)">
And make sure to paste that above the personal stylesheet. It will apply before the personal stylesheet. Just like CSS rules


Normalize.css gives a level playing field. Resets give a blank slate. 
Can use both.