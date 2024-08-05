function validateData() {
    // set all field flags to false
    let input1Valid = false;
    let input2Valid = false;
    let input3Valid = false;
    let input4Valid = false;
    let input5Valid = false;


    // first name validation
    document.surveyForm.firstName.onfocus = function() {
        let input1 = document.getElementById("input1");
        let span = input1.getElementsByTagName("span");
        span[0].firstChild.nodeValue = "Enter a name with the first letter capitalized.";
    }

    document.surveyForm.firstName.onblur = function() {
        let input1 = document.getElementById("input1");
        let span = input1.getElementsByTagName("span");
        let userInput1 = document.surveyForm.firstName.value;
        let firstNameRE = /^[A-Z][a-z]+$/;
        let firstNameREMatch = firstNameRE.test(userInput1);
        // check if all requirements are met
        if ((userInput1 != null) && (userInput1.length > 0) && (firstNameREMatch)) {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("✓"));
                input1Valid = true;
            } else {
                span[0].firstChild.nodeValue = "✓";
                input1Valid = true;
            }
        } else {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("☹ Please try again."));
                input1Valid = false;
            } else {
                span[0].firstChild.nodeValue = "☹ Please try again."
                input1Valid = false;
            }
        }
    }


    // last name validation
    document.surveyForm.lastName.onfocus = function() {
        let input2 = document.getElementById("input2");
        let span = input2.getElementsByTagName("span");
        span[0].firstChild.nodeValue = "Enter a name with the first letter capitalized and any spaces or apostrophes necessary.";
    }

    document.surveyForm.lastName.onblur = function() {
        let input2 = document.getElementById("input2");
        let span = input2.getElementsByTagName("span");
        let userInput2 = document.surveyForm.lastName.value;
        let lastNameRE = /^[A-Z][a-zA-Z\s"']+$/;
        let lastNameREMatch = lastNameRE.test(userInput2);

        // check if all requirements are met
        if ((userInput2 != null) && (userInput2.length > 0) && (lastNameREMatch)) {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("✓"));
                input2Valid = true;
            } else {
                span[0].firstChild.nodeValue = "✓";
                input2Valid = true;
            }
        } else {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("☹ Please try again."));
                input2Valid = false;
            } else {
                span[0].firstChild.nodeValue = "☹ Please try again."
                input2Valid = false;
            }
        }
    }


    // phone number validation
    document.surveyForm.phoneNumber.onfocus = function() {
        let input3 = document.getElementById("input3");
        let span = input3.getElementsByTagName("span");
        span[0].firstChild.nodeValue = "Enter a phone number XXX XXX-XXXX";
    }

    document.surveyForm.phoneNumber.onblur = function() {
        let input3 = document.getElementById("input3");
        let span = input3.getElementsByTagName("span");
        let userInput3 = document.surveyForm.phoneNumber.value;
        let phoneNumberRE = /^\d{3}\s\d{3}-\d{4}$/;
        let phoneNumberREMatch = phoneNumberRE.test(userInput3);

        // check if all requirements are met
        if ((userInput3 != null) && (userInput3.length > 0) && (phoneNumberREMatch)) {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("✓"));
                input3Valid = true;
            } else {
                span[0].firstChild.nodeValue = "✓";
                input3Valid = true;
            }
        } else {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("☹ Please try again."));
                input3Valid = false;
            } else {
                span[0].firstChild.nodeValue = "☹ Please try again."
                input3Valid = false;
            }
        }
    }


    // email validation
    document.surveyForm.userEmail.onfocus = function() {
        let input4 = document.getElementById("input4");
        let span = input4.getElementsByTagName("span");
        span[0].firstChild.nodeValue = "Enter an email in either format: user@email.com or user@email.edu";
    }

    document.surveyForm.userEmail.onblur = function() {
        let input4 = document.getElementById("input4");
        let span = input4.getElementsByTagName("span");
        let userInput4 = document.surveyForm.userEmail.value;
        let userEmailRE = /^\w+@\w+(.com|.edu)$/;
        let userEmailREMatch = userEmailRE.test(userInput4);

        // check if all requirements are met
        if ((userInput4 != null) && (userInput4.length > 0) && (userEmailREMatch)) {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("✓"));
                input4Valid = true;
            } else {
                span[0].firstChild.nodeValue = "✓";
                input4Valid = true;
            }
        } else {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("☹ Please try again."));
                input4Valid = false;
            } else {
                span[0].firstChild.nodeValue = "☹ Please try again."
                input4Valid = false;
            }
        }
    }


    // URL validation
    document.surveyForm.userUrl.onfocus = function() {
        let input5 = document.getElementById("input5");
        let span = input5.getElementsByTagName("span");
        span[0].firstChild.nodeValue = "Enter a URL with \"https:/\/\" at the start, \"~\" after the domain name (example.com), and \"/\" at the end.";
    }

    document.surveyForm.userUrl.onblur = function() {
        let input5 = document.getElementById("input5");
        let span = input5.getElementsByTagName("span");
        let userInput5 = document.surveyForm.userUrl.value;
        let userUrlRE = /^(https:\/\/)[\w|\.|\/]+\~\w*\/$/;
        let userUrlREMatch = userUrlRE.test(userInput5);

        // check if all requirements are met
        if ((userInput5 != null) && (userInput5.length > 0) && (userUrlREMatch)) {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("✓"));
                input5Valid = true;
            } else {
                span[0].firstChild.nodeValue = "✓";
                input5Valid = true;
            }
        } else {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("☹ Please try again."));
                input5Valid = false;
            } else {
                span[0].firstChild.nodeValue = "☹ Please try again."
                input5Valid = false;
            }
        }
    }


    // event listener for submit button
    document.surveyForm.onsubmit = function() {
        submitSurvey(input1Valid, input2Valid, input3Valid, input4Valid, input5Valid);
        return false;
    }
}


// determine which badge the user gets
function giveBadge() {
    let caption = document.getElementById("resultsDivCaption");
    // store radio buttons as true/false values
    let loudRadio = document.getElementById("loud").checked;
    let quietRadio = document.getElementById("quiet").checked;
    let largeRadio = document.getElementById("large").checked;
    let littleRadio = document.getElementById("little").checked;

    if (loudRadio && largeRadio) {
        resultsDivImg.setAttribute("src", "./img/sandhill.jpg");
        caption.firstChild.nodeValue = "Image link: https://students.gaim.ucf.edu/~ra671590/dig3716c/assignment2/img/sandhill.jpg";

    } else if (loudRadio && littleRadio) {
        resultsDivImg.setAttribute("src", "./img/mockingbird.jpg");
        caption.firstChild.nodeValue = "Image link: https://students.gaim.ucf.edu/~ra671590/dig3716c/assignment2/img/mockingbird.jpg";

    } else if (quietRadio && largeRadio) {
        resultsDivImg.setAttribute("src", "./img/heron.jpg");
        caption.firstChild.nodeValue = "Image link: https://students.gaim.ucf.edu/~ra671590/dig3716c/assignment2/img/heron.jpg";

    } else if (quietRadio && littleRadio) {
        resultsDivImg.setAttribute("src", "./img/gallinule.jpg");
        caption.firstChild.nodeValue = "Image link: https://students.gaim.ucf.edu/~ra671590/dig3716c/assignment2/img/gallinule.jpg";
    }
}


// display user info and badges when form is submitted
function submitSurvey(input1Valid, input2Valid, input3Valid, input4Valid, input5Valid) {
    // prevent form from running process.php
    event.preventDefault();

    // store radio buttons as true/false values
    let loudRadio = document.getElementById("loud").checked;
    let quietRadio = document.getElementById("quiet").checked;
    let largeRadio = document.getElementById("large").checked;
    let littleRadio = document.getElementById("little").checked;

    if (input1Valid && input2Valid && input3Valid && input4Valid && input5Valid && (loudRadio || quietRadio) && (largeRadio || littleRadio)) {
        // take input info - store in variables
        let firstNameInput = document.surveyForm.firstName.value;
        let lastNameInput = document.surveyForm.lastName.value;
        let phoneInput = document.surveyForm.phoneNumber.value;
        let emailInput = document.surveyForm.userEmail.value;
        let urlInput = document.surveyForm.userUrl.value;

        // select resultsDiv paragraphs
        let resultsDivName = document.getElementById("resultsDivName");
        let resultsDivPhone = document.getElementById("resultsDivPhone");
        let resultsDivEmail = document.getElementById("resultsDivEmail");
        let resultsDivUrl = document.getElementById("resultsDivUrl");

        // assign text to paragraphs
        resultsDivName.firstChild.nodeValue = "Name: " + firstNameInput + " " + lastNameInput;
        resultsDivPhone.firstChild.nodeValue = "Phone: " + phoneInput;
        resultsDivEmail.firstChild.nodeValue = "Email: " + emailInput;
        resultsDivUrl.firstChild.nodeValue = "Website URL: " + urlInput;

        // choose badge and assign it to resultsDivImg
        giveBadge();

        return false;
    } else {
        let resultsDivName = document.getElementById("resultsDivName");
        resultsDivName.firstChild.nodeValue = "Make sure you've filled out the form correctly and completely!"
        return false;
    }
}

// load event listeners after DOM loads
window.addEventListener("load", validateData, false);