

window.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noBtn');
    const yesButton = document.getElementById('yesBtn');

    yesButton.addEventListener('click', () => {
        console.log("Yes button clicked!");
        emailjs.send("service_95bhc27", "template_jgmv4cs", {
        message: "She clicked YES 💖"
        })
        .then(() => {
        window.location.href = "yes.html";
        })
    });


    noButton.addEventListener('click', () => {
        
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;

        // Get button's current position relative to viewport
        const rect = noButton.getBoundingClientRect();

        let randomX = Math.floor(Math.random() * maxX);
        let randomY = Math.floor(Math.random() * maxY);

        // Update button's style to fixed temporarily to match viewport
        noButton.style.position = 'fixed';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    noButton.addEventListener('mouseover', () => {
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;

        // Get button's current position relative to viewport
        const rect = noButton.getBoundingClientRect();

        let randomX = Math.floor(Math.random() * maxX);
        let randomY = Math.floor(Math.random() * maxY);

        // Update button's style to fixed temporarily to match viewport
        noButton.style.position = 'fixed';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }); 
});


