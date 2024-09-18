function realizarAcao2() {
  const img = document.getElementById('three-points');
  img.style.backgroundColor = 'rgb(41,50,56)';
}

function verificarCliqueFora(event) {
  const img = document.getElementById('three-points');
  if (!img.contains(event.target)) {
      img.style.backgroundColor = ''; 
  }
}

document.getElementById('three-points').addEventListener('click', function(event) {
  realizarAcao2();
  event.stopPropagation(); 
});

document.addEventListener('click', verificarCliqueFora);


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

  let botaoAtivo = null; 

          function realizarAcao(botaoId) {
              if (botaoAtivo) {
                  document.getElementById(botaoAtivo).style.backgroundColor = 'rgb(32,44,51)';
                  document.getElementById(botaoAtivo).style.color = 'rgb(134,150,160)';
              }

              const botao = document.getElementById(botaoId);
              botao.style.backgroundColor = 'rgb(10,51,44)';  
              botao.style.color = 'rgb(0,168,132)';         

              botaoAtivo = botaoId;
          }

          document.getElementById('span1').addEventListener('click', function() {
              realizarAcao('span1');
          });

          document.getElementById('span2').addEventListener('click', function() {
              realizarAcao('span2');
          });

          document.getElementById('span3').addEventListener('click', function() {
              realizarAcao('span3');
          });
          
          
