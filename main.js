
import { r_to_pro, board, node, connect } from './schowek.js';
import { RunNet } from './RunNet.js';
///import { mutate } from './mutate.js';
import { populacja} from './init_settings.js';

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
let input =  new Array(populacja).fill(0).map(() => []);
let output = [];

input[0][0]=inv;
input[0][1]=0.5;

for (let i = 0; i<populacja; i++)
        {
            if(i>0){input[i][0]=i/100;}
            if(i>0){input[i][1]=i/400*3;}
            boards[i]=board;
        
            nodes[i] = [new node (0,"input",0),
                new node (1,"input",0),
                new node (2,"hid",0),
                new node (3,"hid",0),
                new node (4,"hid",0),
                new node (5,"hid",0),
                new node (6,"hid",0),
                new node (7,"output",0)];

            connections[i] = [new connect (0,1,2,0.2,true),
                new connect (1,0,2,2.3,true),
                new connect (2,1,3,0.8,true),
                new connect (3,0,3,-1.2,true),
                new connect (4,2,3,0.5,true),
                new connect (5,3,4,1.3,true),
                new connect (6,3,5,-1.8,true),
                new connect (7,2,5,-2.2,true),
                new connect (8,2,4,2.1,true),
                new connect (9,4,7,1.3,true),
                new connect (10,5,6,-0.8,true),
                new connect (11,4,6,0.7,true),
                new connect (12,6,2,2.3,true),
                new connect (13,6,7,0.9,true)];

            nodi[i] = [nodes[i][0],nodes[i][1]];
            nodo[i] = [nodes[i][nodes[i].length-1]];
        }

for (let osobnik = 0; osobnik<populacja; osobnik++)
{
output[osobnik] = RunNet(input[osobnik],nodi[osobnik],nodo[osobnik],nodes[osobnik],connections[osobnik])[0]; 

}

/// na koniec do testow
let test = output [0];
document.getElementById("qw").innerHTML = test;


});

});


