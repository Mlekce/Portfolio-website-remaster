document.querySelector(".contact__form").addEventListener("submit", function (e) {
    const allowedRegex = /^[A-Za-z0-9.,!?()\s-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nameField = document.getElementById("cname");
    const emailField = document.getElementById("email");
    const subjectField = document.getElementById("subject");
    const messageField = document.getElementById("message");

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const subject = subjectField.value.trim();
    const message = messageField.value.trim();

    let errors = [];

    // Reset border styles
    [nameField, emailField, subjectField, messageField].forEach((field) => {
      field.style.border = "1px solid #ccc";
    });

    if (name.length < 3 || !allowedRegex.test(name)) {
      errors.push("Name must be at least 3 characters and contain only allowed characters.");
      nameField.style.border = "2px solid red";
    }

    if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email address.");
      emailField.style.border = "2px solid red";
    }

    if (!allowedRegex.test(subject)) {
      errors.push("Subject contains invalid characters.");
      subjectField.style.border = "2px solid red";
    }

    if (!allowedRegex.test(message)) {
      errors.push("Message contains invalid characters.");
      messageField.style.border = "2px solid red";
    }

    if (errors.length > 0) {
      e.preventDefault();
      alert(errors.join("\n"));
    }
  });