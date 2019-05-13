function calcula()
{
  let a = document.getElementById("a");
  let b = document.getElementById("b");
  let c = document.getElementById("c");
  let resultado = document.getElementById("resultado");
  let resultado2 = document.getElementById("resultado2");
  
  let va = parseFloat(a.value);
  let vb = parseFloat(b.value);
  let vc = parseFloat(c.value);
  let delta = (vb*vb)-4*va*vc;
  let vr1 = (-vb+Math.sqrt(delta))/(2*va);
  let vr2 = (-vb-Math.sqrt(delta))/(2*va);

  if(vr1==vr2){
  resultado.textContent = ": "+vr1;
  resultado2.textContent = ": a equação tem apenas uma raiz";
  }
  else{
    resultado.textContent = ": "+vr1;
    resultado2.textContent = ": "+vr2;
  }

  if(delta<0){
    resultado.textContent = ": não existe raiz real, para estes valores.";
    resultado2.textContent = ": não existe raiz real, para estes valores.";
  }
}

function calculamdc()
{
  let d = document.getElementById("d");
  let e = document.getElementById("e");
  let divisor = document.getElementById("divisor");
  divisor.textContent = ""


  let vd = parseInt(d.value);
  let ve = parseInt(e.value);


  for(i=0; i<=ve; i++) {
    if(ve%i==0 && vd%i==0) {
      divisor.textContent += " "+i;
    }
  }

}