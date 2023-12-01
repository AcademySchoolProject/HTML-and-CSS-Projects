function validateForm() {
    let x = document.forms["contact_form"]["Name"].value;
    let y = document.forms["contact_form"]["Email"].value;
    let z = document.forms["contact_form"]["Message"].value;

    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    if (y == "") {
        alert("Email must be filled out");
        return false;
    }
    if (z == "") {
        alert("Message must be filled out");
        return false;
    }
  }