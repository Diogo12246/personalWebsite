function copiarEmail() {
    var Email = "diogo12246@gmail.com"
    Email.select();
    document.execCommand("copy");
    alert("Contacto copiado para o seu clipboard: " + Email);
  }