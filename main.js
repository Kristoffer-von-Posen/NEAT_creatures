
import { r_to_pro, board } from './schowek.js';
import { RunNet } from './RunNet.js';
import { mutate } from './mutate.js';
import { ooa,oob,ooc,ood,ooe,oof,oog,ooh,ooi,ooj,ook,ool,oom,oon,ein,zwei,drei,vier,funf,sechs,seben,populacja, nicht } from './init_settings.js';

document.addEventListener("DOMContentLoaded", function () {
document.getElementById("ten").addEventListener("click", function() {
    


 /// ready for testing REMEMBER TO TURN ON LOCAL SERVER OR ELSE it will not work!!!!


let inv = Number(document.getElementById("wpisz").value);
inv = r_to_pro(inv);
    
//// Starting settings
/// ----------------------------------------------------------------------------------------------------------------

let boards=[[[],[]],[[],[]]];
let nodes = [[],[]];
let connections = [[],[]];
let nodi = [[],[]];
let nodo = [[],[]];
let input = [[],[]];
let output = [];

input[0][0]=inv;
input[0][1]=1-inv;

for (let i = 0; i<populacja; i++)
        {
            if(i>0){input[i][0]=i/100;}
            if(i>0){input[i][1]=i/400*3;}
            boards[i]=board;
            nodes[i] = [ein,zwei,drei,vier,funf,sechs,seben];
            connections[i] = [ooa,oob,ooc,ood,ooe,oof,oog,ooh,ooi,ooj,ook,ool,oom,oon];
            nodi[i] = [nicht, ein];
            nodo[i] = [seben];
        }

for (let osobnik = 0; osobnik<populacja; osobnik++)
{
output[osobnik] = RunNet(input[osobnik],nodi[osobnik],nodo[osobnik],nodes[osobnik],connections[osobnik]); 

}

/// na koniec do testow
let test = output [0];
document.getElementById("qw").innerHTML = test;


});

});


