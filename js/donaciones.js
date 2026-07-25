document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.dataset.copy;

      try {
        await navigator.clipboard.writeText(value);

        const original = button.textContent;

        button.textContent = "✅ Copiado";

        setTimeout(() => {
          button.textContent = original;
        }, 2000);
      } catch (error) {
        console.error(error);

        alert("No se pudo copiar.");
      }
    });
  });
});
