
import { node, connect, sigmoid, r_to_pro } from './klasy.js';
//// important info

/// list of variables that are osobnik specific: leyers


/// Do testow w windows wiersz polecen
//// C:\Users\'-'\Desktop\N KI>python -m http.server


function alles()


//// add a loop to make popultaion of 100
//// then add generations

{

        let inv = Number(document.getElementById("wpisz").value);
        inv = r_to_pro(inv);
        
        
///// NEVER CHANGING ABOVE




//// Starting settings
/// ----------------------------------------------------------------------------------------------------------------
/// ----------------------------------------------------------------------------------------------------------------
/// ----------------------------------------------------------------------------------------------------------------
/// ----------------------------------------------------------------------------------------------------------------

let populacja = 100;

        
let board=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
let boards=[[[],[]],[[],[]]];


let nodes = [[],[]];

let jeden = new connect (0,0,1,0.3,true,1);
let dwa = new connect (1,0,2,0.8,true,1);
let trzy = new connect (2,1,3,0.2,true,2);
let cztery = new connect (3,2,3,0.1,true,2);

let ein = new node (0,"input",inv,1);
let zwei = new node (1,"hid",0,2);
let drei = new node (2,"hid",0,3);
let vier = new node (3,"output",0,4);

let connections_1 =[[]];
let connections_2 =[[]];

let nodes_0 = [[]];
let nodes_1 = [[]];
let nodes_2 = [[]];



/// petla settings
/// ----------------------------------------------------------------------------------------------------------------
/// ----------------------------------------------------------------------------------------------------------------
/// ----------------------------------------------------------------------------------------------------------------
/// ----------------------------------------------------------------------------------------------------------------


for (let i = 0; i<populacja; i++)
        {
            boards[i]=board;
            connections_1[i] = [jeden,dwa];
            connections_2[i] = [trzy,cztery];
            nodes_0[i] = [ein];
            nodes_1[i] = [zwei,drei];
            nodes_2[i] = [vier];
            nodes[i] = [ein,zwei,drei,vier];
        }


//// ok wszystko wyzej to konieczny setup

/// petla populacji
/// ----------------------------------------------------------------------------------------------------------------
/// ----------------------------------------------------------------------------------------------------------------
/// ----------------------------------------------------------------------------------------------------------------
/// ----------------------------------------------------------------------------------------------------------------



function RunNet (uLL)
{

for (let osobnik = 0; osobnik<populacja; osobnik++)
{

///loading leyers
let leyers = [[connections_1[osobnik],nodes_1[osobnik]],[connections_2[osobnik],nodes_2[osobnik]]];

/// loading input
for (let ii=0;ii<nodes_0[osobnik].length;ii++)
    {
        nodes_0[osobnik][ii]=uLL[osobnik][ii];
    }

/// running network
for (let [leyer_cons,leyer_nods] of leyers)
{
    for (let nodd of leyer_nods)
    {
        nodd.val=0;
    }
    for (let conn of leyer_cons)
    {
        if(conn.ena)
        {nodes[osobnik][conn.out].val = nodes[osobnik][conn.out].val+(nodes[osobnik][conn.inn].val*conn.wei);}
    }
    for (let nodd of leyer_nods)
    {
        nodd.val=sigmoid(nodd.val);
    }
}

/// returning output
let xOH = [[]];

for (let j in nodes_2[osobnik])
{
xOH[osobnik][j] = nodes_2[osobnik][j].val;
}

}
return xOH;
}
////// koniec funkcji RunNet

/// funkcja mutate

function mutate ()
{
    return 1;
}





}



window.alles = alles;

///// nowy kod ktory bedzie pomocny:

/// const layer = Math.random() < 0.5 ? 2 : 3;   // los 50/50

/// tu kod kotry pozwala dodac nowy node bez nazywania go i po prostu wpisujac go do array(czyli tablicy czyli po pythonowemu listy)
/// const n = new node(nextNodeId, "hid", 0, layer);
/// nodes.push(n);


/// Mini goals (po pomocne info patrz zeszyt biologia)

// wyjmij funkcje RunNet z petli
// powsadzaj wszytsko do roznych plikow zeby byl porzadek
// uporzadkuj nodes i conncetions stratowe bo tam tez jest syf troche
// dodaj jedna lub dwie dodatkowe warswty ukryte
// dodaj fukcje task





/// Goals

/// 0. Add task
/// 1. Add random variation @indiv
/// 2. Add population @big
/// 3. Add fitness @indiv
/// 4. Add killing @ big
/// 5. Add reproduction @big


/// Opis ogolny

//// ein zwei drei vier oraz jeden dwa trzy cztery to cos 
// z czym stratuje kazdy osobnik jedynie w pierwszej generacji, 
// potem do tego stosowana jest fukcja mutacji 
// a potem petla populacji i na koncu patela zabijania 
// aka usuwania tych co poszlo im najgorzej 
// i rozmnarzania tych co poszlo im najlepiej 
// tak zeby populacja znowu byla 100.


