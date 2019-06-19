function generar() {

var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var text = "";
var i;
for (i = 0; i < pronoun.length; i++){
    for (b = 0; b < adj.length; b++){
        for (c = 0; c < noun.length; c++){
  text +="www."+pronoun[i] + adj[b]+noun[c]+".com"+"<br>";
        }
    }
}
document.getElementById("misite").innerHTML = text;
}



