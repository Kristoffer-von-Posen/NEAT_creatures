import { node, connect } from './schowek.js';

export const populacja = 100;
export const tiki = 100;

export let jeden = new connect (0,0,1,0.3,true);
export let dwa = new connect (1,0,2,0.8,true);
export let trzy = new connect (2,1,3,0.2,true);
export let cztery = new connect (3,2,3,0.1,true);

export let ein = new node (0,"input",inv);
export let zwei = new node (1,"hid",0);
export let drei = new node (2,"hid",0);
export let vier = new node (3,"output",0);