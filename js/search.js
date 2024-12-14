document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search input");
  const tableBody = document.getElementById("table-body");

  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const rows = tableBody.querySelectorAll("tr");

    rows.forEach(row => {
      const cells = row.querySelectorAll("td");
      const rowText = Array.from(cells).map(cell => {
        if (cell.cellIndex === 4) { 
          return cell.textContent.replace(/[,\$]/g, '').toLowerCase();
        }
        return cell.textContent.toLowerCase();
      }).join(" ");

      row.style.display = rowText.includes(searchText) ? "" : "none";
    });
  });
});
