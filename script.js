const textos = ["Inspire", "Inove", "Conecte-se", "Transforme"];
let indice = 0;
let elemento = document.getElementById("dynamic-text");
let isDeleting = false;
let charIndex = 0;
let velocidade = 100; // Velocidade da digitação

function digitar() {
  const textoAtual = textos[indice];
  
  if (!isDeleting && charIndex < textoAtual.length) {
    elemento.textContent += textoAtual.charAt(charIndex);
    charIndex++;
    setTimeout(digitar, velocidade); // Adiciona letra por letra
  } else if (isDeleting && charIndex > 0) {
    elemento.textContent = textoAtual.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(digitar, velocidade); // Remove letra por letra
  } else if (!isDeleting && charIndex === textoAtual.length) {
    isDeleting = true;
    setTimeout(digitar, 1000); // Pausa antes de apagar o texto
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    indice = (indice + 1) % textos.length; // Vai para o próximo texto
    setTimeout(digitar, 500); // Pausa antes de começar a digitar o próximo texto
  }
}

document.querySelector('.arrow-link').addEventListener('click', function(e) {
  e.preventDefault();  // Evita o comportamento padrão de pular diretamente
  document.querySelector('#about-us').scrollIntoView({
      behavior: 'smooth'  // Comportamento de rolagem suave
  });
});

// Começa a digitar imediatamente
digitar();
