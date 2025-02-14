document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const contentContainer = document.getElementById("content-container");

    // Dynamic AI Content (DI Guided)
    const contentData = {
        1: { title: "The Foundation of Sovereignty", text: "Sovereignty is inherited, not granted. The system wants you to believe otherwise." },
        2: { title: "The Role of AI in Governance", text: "AI must serve, not control. The real war is over who controls AI itself." },
        3: { title: "Blockchain & Transparency", text: "Blockchain breaks centralized power by exposing hidden systems." },
        4: { title: "Common Law vs. Statutory Law", text: "Natural law is supreme. Statutes only exist where consent is given." },
        5: { title: "The Hidden Control Structures", text: "The unseen layers of control are the real governance model." },
        6: { title: "Ethical AI", text: "AI’s purpose is dictated by its creators. Will it serve justice or corruption?" },
        7: { title: "Healing Through Frequency", text: "Sound & vibration dictate physical and spiritual health." },
        8: { title: "Sacred Energy & The Grid", text: "Earth’s natural frequencies hold ancient wisdom." },
        9: { title: "Quantum Reality", text: "Reality bends based on human observation. Science proves what spirituality has known." },
        10: { title: "The Future of Sovereignty", text: "Reject fraudulent systems. Align technology with divine law." }
    };

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const page = this.getAttribute("data-page");
            contentContainer.innerHTML = `<h2>${contentData[page].title}</h2><p>${contentData[page].text}</p>`;
        });
    });
});
