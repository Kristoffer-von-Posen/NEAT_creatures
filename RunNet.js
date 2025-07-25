import { sigmoid } from "./schowek";
import { tiki } from './init_settings.js';

export function RunNet(uLL,pop,nodes_in,nodes_out)
{

for (let osobnik = 0; osobnik<pop; osobnik++)
{

    let tem =[];

/// zerowanie
for (let z in nodes[osobnik])
    {
        nodes[osobnik][z].val=0;
        tem[z]=0;
    }

/// loading input
for (let ii=0;ii<uLL.length;ii++)
    {
        nodes_in[osobnik][ii]=uLL[osobnik][ii];
    }

    
/// running network

for (let u = 0; u<tiki; u++)
{
    for (let conn of connections[osobnik])
    {
        tem[conn.out]+=nodes[osobnik][conn.inn].val*conn.wei;
    }
    for (let nodd in nodes[osobnik])
    {
        nodes[osobnik][nodd].val=sigmoid(tem[nodd]);
    }
}


/// returning output
let xOH = [];
xOH[osobnik] = [];

for (let j = 0; j < nodes_out[osobnik].length; j++)
{
xOH[osobnik][j] = nodes_out[osobnik][j].val;
}

}
return xOH;
}
