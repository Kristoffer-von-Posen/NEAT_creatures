//// zmienne

export let board=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];


/// klasy

export     class node {
    constructor(id, typ,val) {
    this.id = id;
    this.typ = typ;
    this.val = val;

  }
}

export     class connect {
    constructor(id, inn, out, wei, ena) {
    this.id = id;
    this.inn = inn;
    this.out = out;
    this.wei = wei;
    this.ena = ena;
  }
}


/// funkcje

export function sigmoid(value)
        {
            return 1/(1+Math.exp(-value));
        }

export function r_to_pro(inv_tym)
    {
        while (inv_tym>1)
            {
                inv_tym = inv_tym/10;
            }
        return inv_tym;
}


//// ___ INFO ___ 


/// Do testow w windows wiersz polecen
//// C:\Users\'-'\Desktop\N KI>python -m http.server


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


