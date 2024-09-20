function realizarAcao2() {
  const img = document.getElementById('three-points');
  img.style.backgroundColor = 'rgb(41,50,56)';
  img.style.borderRadius = '20px';
  img.style.transition = '0.5s'
  img.style.backgroundSize = '100px'
}

function verificarCliqueFora(event) {
  const img = document.getElementById('three-points');
  if (!img.contains(event.target)) {
      img.style.backgroundColor = ''; }
}

document.getElementById('three-points').addEventListener('click', function(event) {
  realizarAcao2();
  event.stopPropagation(); 
});

document.addEventListener('click', verificarCliqueFora);

function hover() {
  const seta = document.getElementById('seta-baixo')
  seta.style.opacity = '1';
  seta.style.transition = '0.2s';
  seta.style.animation = 'moveToLeft 0.2s ease both, moveToLeft 0.2s ease both'
}

function saidaHover() {
  const seta = document.getElementById('seta-baixo')
  seta.style.opacity = '';
  seta.style.animation = 'moveToRight2 0.2s ease both, moveToRight2 0.2s ease both'
}

document.getElementById('conversa1').addEventListener('mouseenter', function() {
  hover();
})

document.getElementById('conversa1').addEventListener('mouseleave', function() {
  saidaHover();
})

function toggleDropdown1() {
  const dropdown = document.getElementById("dropdownseta1");
  if (dropdown.style.display === "block") {
      dropdown.style.animation = 'scaleDown 0.2s ease both';
      setTimeout(function() {
        dropdown.style.display = "none";
    }, 200)
  } else {
      dropdown.style.display = "block";
      dropdown.style.animation = 'scaleUp 0.2s ease both';
  }
  
}

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
    if (!event.target.closest('.seta-baixo-cls') && !event.target.closest('seta-baixo')) {
      const dropdowns = document.getElementsByClassName("dropdown-1");
      for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.style.display === "block") {
              openDropdown.style.display = "none";
              openDropdown.style.animation = 'scaleDown 0.2s ease both';
              dropdowns.style.animation = 'scaleDown 0.2s ease both';
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
          
          
