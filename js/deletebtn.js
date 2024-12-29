  // Función para eliminar el contenedor DeletMessage
  function deleteElement(element) {
    // Eliminar el contenedor más cercano con la clase DeletMessage
    const deletMessageDiv = element.closest('.DeletMessage');
    if (deletMessageDiv) {
      deletMessageDiv.remove(); // Elimina el div DeletMessage del DOM
    }
  }