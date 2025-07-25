
import { r_to_pro, board } from './schowek.js';
import { RunNet } from './RunNet.js';
import { mutate } from './mutate.js';
import { jeden,dwa,trzy,cztery,ein,zwei,drei,vier,populacja } from './init_settings.js';


function alles()

{
let inv = Number(document.getElementById("wpisz").value);
inv = r_to_pro(inv);
    
//// Starting settings
/// ----------------------------------------------------------------------------------------------------------------

let boards=[[[],[]],[[],[]]];
let nodes = [[],[]];
let connections = [[],[]];

for (let i = 0; i<populacja; i++)
        {
            boards[i]=board;
            nodes[i] = [ein,zwei,drei,vier];
            connections[i] = [jeden,dwa,trzy,cztery];
        }

/// tu na zewnatrz daj petle populacji;
RunNet(inv,populacja,nodi,nodo); /// przekaz jeszcze obiekty w connections i nodes
let nic = mutate();


}

window.alles = alles;



