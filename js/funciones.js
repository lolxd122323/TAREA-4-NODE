function decodificar() {
  let textoCodificado = document.getElementById("texto").value;

  let textoDecodificado = textoCodificado.replace(/\(([^()]+)\)/g, (match, grupo1) => {
      return grupo1.split('').reverse().join(''); 
  });
  
  alert(textoDecodificado);
}