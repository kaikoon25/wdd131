## Forms

Allow users to input data.

The action specifies the URL where the form data will be sent upon submission.
Method defines how the form data is sent. Post sends it to the request body which is more secure for sensitive data. Get is less secure, appends form data to the url.

<form action="/login" method="POST">

<!-- Email Feild -->
<!-- for email input type email and id email correctly accosiates a label with its input for accessibility. -->
<label for="email">Email</label>
<input
    type="email"
    id="email"
    name="email"
    placeholder="name@example.com"
    required
>
    <!-- pattern: regex check -->

<!-- And more as above can be added, like password feild -->
<label></label>

<!-- Sumbit button -->
<button type="sumbit">Sign in</button>

</form>

### Form security and validation

- Sanatize and validate all input on the server side to prevent injection attacks, such as cross site scripting (XSS) or SQL injection

- Use HTTPS to encrypt form data in transit, protecting it from interception

- Limit bot access and protect against brute force attacks by adding CAPTCHAs or honeypot feilds

### favicon

adding favicon to the hfref and "icon" to rel="" makes it the little icon that shows up next to the title in tabs. Put this winin the head element, as a <link> and not <img>. She put it above the <link> to stylesheets and <script>, and under <title>.

Naming the image and its filetype:
Name it favicon.
favicon.ico is better for older browsers, but favicon.png should work fine. Could link for both versions
It might not work if it is in the images folder (images/favicon.ico). You might need to place it in the root foler shared with the file.

### from the ponder

.preventDefault()
    The .preventDefault() method used to stop the default behavior of an event from happening.

.trim()
    The .trim() method is a string method in JavaScript that removes whitespace from both ends of a string
    A user might inadvertently add spaces before and after an input entry. We want to eliminate these space.
    This example is not only getting the input value the user entered, but also trimming any white spaces before and after the entry.
    const cardNum = cardNumber.value.trim();

Array.from()
    Converts a NodeList into a real array.
    So then you can use the array with array methods like .filter or .map
    This example is taking a group of checkboxes and filtering out the unchecked ones leaving only the checked and placing them in an array.

const campusBoxes = 
    document.querySelectorAll('input[name="campus"]');                          
Array.from(campusBoxes)
.filter(box => box.checked)
.map(box => box.value);

.reset()
    The .reset() method restores the form to the state it was when the page loaded.
    This example resets all form controls (text inputs, textareas, checkboxes, radio buttons, select menus, etc.)
const form = document.querySelector("#myForm");
form.reset();

Compound Conditionals
    If you need to check for multiple conditions be aware of the conditional operators.

    && for AND

    || for OR

    ! for NOT

    There are also comparison operators

    === for strictly equal

    == for equal

    !== for not equal

    This also includes greater than '>', less than '<', greater than or equal to '>=', and less than or equal to '<='

    This example is checking a compound condition to see if type is strictly equal to 'many' and giving them an error if they haven't chosen more than one campus.
if (type === "many" && selectedCampuses.length < 2) {
    output.textContent = "Please select at least two campuses.";
    return;
}