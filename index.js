let c = document.querySelector("img");
c.addEventListener("click", () => {

  c.src =
    "https://media1.tenor.com/m/vkDuuNm40XoAAAAd/hogwarts-legacy-warner-bros-interactive-entertainment.gif";
  setTimeout(() => {
    c.src = "https://media1.tenor.com/m/WwpG5C4snbgAAAAC/hp-slytherin.gif";
    c.style.width = "640px";
    c.style.height = "480px";
  }, 5 * 1000);

  var g = "https://media.tenor.com/mbb_vsQMsVoAAAAM/gryffindor-harrypotter.gif";
  var h = "https://media1.tenor.com/m/xZ98ZQQmf0IAAAAC/hufflepuff-hp.gif";
  var r =
    "https://media1.tenor.com/m/Sgm7TzrEQzAAAAAC/harry-potter-ravenclaw.gif";
  var s = "https://media1.tenor.com/m/xUbaOIunGp4AAAAC/slytherin-hp.gif";

  setTimeout(() => {
    document.querySelector("h1").innerHTML = "You belong to";
    let obj = {
      1:g,
      2:h,
      3:r,
      4:s,
    }
    c.src = obj[Math.floor((Math.random()*4)+1)];
    c.style.width = "380px";
    c.style.height = "530px";
  }, 7 * 1000);
});
