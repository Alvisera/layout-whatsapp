function trocarImagem(elemento, novaImagem) {
    elemento.style.opacity = '0';  
    setTimeout(function() {
      elemento.src = novaImagem;   
      elemento.style.opacity = '1'; 
    }, 100);  
  }

  function restaurarImagem(elemento, imagemOriginal) {
    elemento.style.opacity = '0';  
    setTimeout(function() {
      elemento.src = imagemOriginal;  
      elemento.style.opacity = '1';  
    }, 100);  
  }

  function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.menu-icon')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

const menuIcons = document.querySelectorAll('.menu-icon');

menuIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    if (!icon.parentElement.querySelector('.circle-background')) {
      const circle = document.createElement('div');
      circle.classList.add('circle-background');
      icon.parentElement.appendChild(circle); 
    } else {
      const existingCircle = icon.parentElement.querySelector('.circle-background');
      existingCircle.remove(); 
    }
  }); 
});

