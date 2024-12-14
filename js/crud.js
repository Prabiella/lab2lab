  document.addEventListener('DOMContentLoaded', () => {
    const modal = new bootstrap.Modal(document.getElementById('editDeleteModal'));
    const form = document.getElementById('editForm');
    const editSection = document.getElementById('editFormSection');
    const deleteSection = document.getElementById('deleteConfirmSection');
    let currentRow, isDeleteAction;

    const openModal = (row, isDelete = false) => {
      currentRow = row;
      isDeleteAction = isDelete;

      if (isDelete) {
        editSection.style.display = 'none';
        deleteSection.style.display = 'block';
      } else {
        document.getElementById('editFecha').value = row.cells[1].textContent;
        document.getElementById('editPaciente').value = row.cells[2].textContent;
        document.getElementById('editEstudios').value = row.cells[3].textContent;
        document.getElementById('editImporte').value = row.cells[4].textContent;
        editSection.style.display = 'block';
        deleteSection.style.display = 'none';
      }
      modal.show();
    };

    const updateRow = () => {
      currentRow.cells[1].textContent = document.getElementById('editFecha').value;
      currentRow.cells[2].textContent = document.getElementById('editPaciente').value;
      currentRow.cells[3].textContent = document.getElementById('editEstudios').value;
      currentRow.cells[4].textContent = document.getElementById('editImporte').value;
    };

    document.querySelectorAll('.edit-btn').forEach(button => 
      button.addEventListener('click', (e) => openModal(e.target.closest('tr')))
    );

    document.querySelectorAll('.delete-btn').forEach(button => 
      button.addEventListener('click', (e) => openModal(e.target.closest('tr'), true))
    );

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      updateRow();
      modal.hide();
    });

    document.getElementById('confirmDeleteBtn').addEventListener('click', () => {
      currentRow.remove();
      modal.hide();
    });
  });
