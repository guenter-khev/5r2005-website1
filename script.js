document.getElementById("helloBtn").addEventListener("click", function() {
  alert("Hallo!");
});
document.getElementById("setText").addEventListener("click", function(){
  document.getElementById("info").innerHTML = "Das ist mein neuer Text!";
});
document.getElementById("askName").addEventListener("click", function(){
  let name = prompt("Wie heißt du?");
  document.getElementById("greet").innerText = "Hallo " + name + "!";
});
document.getElementById("swap").addEventListener("click", function(){
  const img = document.getElementById("photo");
  img.src = (img.src.includes("https://www.yumpu.com/de/image/facebook/21123315.jpg")) ? "https://www.khev.at/fotos/202204-Badminton/badminton-16.jpg" : "https://www.yumpu.com/de/image/facebook/21123315.jpg";
});
document.getElementById("toggleDark").addEventListener("click", function(){
  document.body.classList.toggle("dark");
});
