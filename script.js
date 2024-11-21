// Captura as entradas do usuário
let nam1 = prompt('Digite o nome do personagem 1: ');
let power1 = parseInt(prompt('Digite o poder de ataque do personagem 1: '));
let nam2 = prompt('Digite o nome do personagem 2: ');
let healthPoints2 = parseInt(prompt('Digite a vida do personagem 2: '));
let defense2 = parseInt(prompt('Digite a defesa do personagem 2: '));
let shield2 = prompt('O personagem 2 possui escudo? (sim/não)').toLowerCase();

// Lógica do ataque
if (power1 > defense2) {
  let dano;

  // Se o personagem 2 não tem escudo
  if (shield2 === 'não') {
    dano = power1 - defense2;
    healthPoints2 -= dano;
    console.log(`${nam1} atacou. ${nam2} sofreu ${dano} de dano e não possui escudo. O restante da sua vida é ${healthPoints2}.`);
  
  // Se o personagem 2 tem escudo
  } else if (shield2 === 'sim') {
    dano = (power1 - defense2) / 2; // O dano é reduzido pela metade se o personagem tem escudo
    healthPoints2 -= dano;
    console.log(`${nam1} atacou. ${nam2} sofreu ${dano} de dano por possuir escudo. O restante da sua vida é ${healthPoints2}.`);
  }
} else {
  console.log(`${nam1} atacou, mas não afetou ${nam2}. Não houve dano!`);
}
