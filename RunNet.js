import { sigmoid } from "./schowek.js";
import { tiki } from './init_settings.js';

export function RunNet(uLL,nodes_in,nodes_out,nnodes,cconnec)
{
 let tem =[];

/// zerowanie
for (let z in nnodes)
    {
        nnodes[z].val=0;
        tem[z]=0;
    }

/// loading input
for (let ii=0;ii<uLL.length;ii++)
    {
        nodes_in[ii]=uLL[ii];
    }

    
/// running network

for (let u = 0; u<tiki; u++)
{
    for (let conn of cconnec)
    {
        tem[conn.out]+=nnodes[conn.inn].val*conn.wei;
    }
    for (let nodd in nnodes)
    {
        nnodes[nodd].val=sigmoid(tem[nodd]);
    }
}


/// returning output
let xOH = [];


for (let j = 0; j < nodes_out.length; j++)
{
xOH = nodes_out[j].val;/// for testing i removed [j] from after xOH
}


return xOH;
}
