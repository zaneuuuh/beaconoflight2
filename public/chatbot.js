async function sendMessage() {
    let input = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-messages");

    if (!input.trim()) return;

    chatBox.innerHTML += `<p><b>You:</b> ${input}</p>`;

    try {
        const response = await fetch('https://your-api-url.onrender.com/chat', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: input })
        });

        let jsonResponse = await response.json();
        chatBox.innerHTML += `<p><b>AI:</b> ${jsonResponse.reply}</p>`;

    } catch (error) {
        chatBox.innerHTML += `<p><b>AI:</b> Error fetching response.</p>`;
    }
}
