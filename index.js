function randomXToY(minVal,maxVal)
{
  var randVal = minVal+(Math.random()*(maxVal-minVal));
  return Math.round(randVal);
}

img = document.querySelector("img");
n = randomXToY(1, 5);

switch(n) {
    case 1:
        img.setAttribute("src", "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2R5NTdqN3ZkMWhkaDltdWlyZHV5ODN0em90OG8zNHUzaGx1d2F2OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kanT1ZarQwtI4/giphy.gif");
        break;
    case 2:
        img.setAttribute("src", "https://media0.giphy.com/media/vy0fmrQQu27DAs3EuV/giphy.gif?cid=ecf05e47h9ohn2w3fgze408amkiel0yrzu6f4gchihg675km&ep=v1_gifs_related&rid=giphy.gif&ct=g");
        break;
    case 3:
        img.setAttribute("src", "https://media2.giphy.com/media/lfetvU2zv3HzUSaT15/giphy.gif?cid=ecf05e47ljc8ttg5m7be23clvgxh0wr0kwk6k0uh63qli3pu&ep=v1_gifs_related&rid=giphy.gif&ct=g");
        break;
    case 4:
        img.setAttribute("src", "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWdhOHc0ZWUzZW45eXA1YWtyd25pNGpxNXFoZGszZnY3a2J0bDhqOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SqmkZ5IdwzTP2/giphy.gif");
        break;
    case 5:
        img.setAttribute("src", "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExczE3ZmlhdGlwam10cG84aGVkd25pb3hieHhtcWxqaG81MGFpeWZ5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W8tVTtVKk88ww/giphy.gif");
        break;
    default:
        console.log("Not a number");
}

var string = "This page doesn't exist, but we can give you a ride to the homepage! :)";
var str = string.split("");
var el = document.getElementById('type');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
var running = setTimeout(animate, 80);
})();
