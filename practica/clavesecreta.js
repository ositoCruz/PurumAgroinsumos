function laClaveSecreta(clave)
{
let array=[];
for(let i= clave.length; i>=0; i--)
{
if(clave[i] != '*')
{
array.push(clave[i])    
}


}
let text= array.join("");
return text;



}

let clave=["s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"];
let clave2= ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"];
console.log(laClaveSecreta(clave2));