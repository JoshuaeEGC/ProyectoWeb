async function generateStoryAndImage() {
  const generateButton = document.getElementById('generateButton');

  // Verificar si el botón existe antes de continuar
  if (!generateButton) {
    console.error('No se encontró el botón con el ID "generateButton".');
    return;
  }

  // Desactivar el botón mientras se genera el cuento y la imagen
  generateButton.setAttribute('disabled', 'true');

  const age = document.getElementById('age').value;
  const topics = document.getElementById('topics').value;
  const genre = document.getElementById('genre').value;

  try {
    const response = await fetch('/generate-story-and-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ age, topics, genre }),
    });

    if (!response.ok) {
      console.error('Error al generar el cuento e imagen:', response.statusText);
      return;
    }

    const result = await response.json();

    // Mostrar el cuento y la imagen después de generarse
    document.getElementById('storyResult').innerHTML = `<p>${result.story}</p>`;
    document.getElementById('storyImage').src = result.imageUrl;

    // Mostrar el contenedor con el cuento e imagen
    document.getElementById('resultContainer').style.display = 'block';
  } catch (error) {
    console.error('Error en la solicitud:', error.message);
  } finally {
    // Habilitar el botón después de completar la generación
    generateButton.removeAttribute('disabled');
  }
}


