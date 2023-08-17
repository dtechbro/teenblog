// intergating backend and frontend
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("/getData");
        const data = await response.json();
        const messageContainer = document.getElementById("message");

        messageContainer.innerHTML = `<p>${data.message}</p>`;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

