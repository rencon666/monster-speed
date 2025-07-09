
document.addEventListener("DOMContentLoaded", () => {
  const category = document.getElementById("category");
  const circuitFields = document.getElementById("circuitFields");
  const touringFields = document.getElementById("touringFields");
  const maintenanceFields = document.getElementById("maintenanceFields");

  category.addEventListener("change", () => {
    circuitFields.classList.add("hidden");
    touringFields.classList.add("hidden");
    maintenanceFields.classList.add("hidden");

    if (category.value === "circuit") {
      circuitFields.classList.remove("hidden");
    } else if (category.value === "touring") {
      touringFields.classList.remove("hidden");
    } else if (category.value === "maintenance") {
      maintenanceFields.classList.remove("hidden");
    }
  });

  const form = document.getElementById("recordForm");
  const recordList = document.getElementById("recordList");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const entry = {
      date: formData.get("date"),
      category: formData.get("category"),
      setting: formData.get("setting"),
      location: formData.get("location"),
      fuel: formData.get("fuel"),
      accommodation: formData.get("accommodation"),
      maintenance: formData.get("maintenance"),
      memo: formData.get("memo")
    };

    const item = document.createElement("li");
    item.textContent = JSON.stringify(entry);
    recordList.appendChild(item);
    form.reset();
  });
});
