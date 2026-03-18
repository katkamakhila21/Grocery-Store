let contactForm = document.getElementById("contactForm");
if(contactForm){
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();

        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let message = document.getElementById("message");
        let msg = document.getElementById("formMsg");

        // Reset previous borders and message
        name.style.border = "";
        email.style.border = "";
        message.style.border = "";
        msg.innerText = "";

        // Check empty fields
        if(name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === ""){
            msg.innerText = "All fields should be filled";
            msg.style.color = "red";
            if(name.value === "") name.style.border = "2px solid red";
            if(email.value === "") email.style.border = "2px solid red";
            if(message.value === "") message.style.border = "2px solid red";
            return;
        }

        // Validate email
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!email.value.match(emailPattern)){
            msg.innerText = "Enter valid email";
            msg.style.color = "red";
            email.style.border = "2px solid red";
            return;
        }

        // Success
        msg.innerText = "Sent Successfully";
        msg.style.color = "green";
        contactForm.reset();

        // Toast
        let toast = document.getElementById("toast");
        if(toast){
            toast.innerText = "Message Sent Successfully ✅";
            toast.style.display = "block";
            setTimeout(()=> toast.style.display="none", 3000);
        }
    });
}

