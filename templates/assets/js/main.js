document.addEventListener("DOMContentLoaded", () => {
  if (typeof TEMPLATE_CONFIG === "undefined") {
    console.error("TEMPLATE_CONFIG não carregado");
    return;
  }
  renderTemplate(TEMPLATE_CONFIG);
});
