import { activ } from "./schowek.js";
import { tiki } from './init_settings.js';

export function RunNet(uLL,nodes_in,nodes_out,nnodes,cconnec)
{
 let tem =[];

/// zerowanie
for (let z=0; z<nnodes.length; z++)
    {
        nnodes[z].val=0;
        tem[z]=0;
    }

/// loading input
for (let ii=0;ii<uLL.length;ii++)
    {
        nodes_in[ii].val=uLL[ii];
    }

    
/// running network

for (let u = 0; u<tiki; u++)
{
    

    for (let jj = 0; jj < tem.length; jj++) {
        tem[jj] = 0;
    }
    for (let conn of cconnec)
    {
        tem[conn.out]+=nnodes[conn.inn].val*conn.wei;
    }
    for (let nodd = 0; nodd < nnodes.length; nodd++)
    {
        nnodes[nodd].val=activ(tem[nodd]);
    }
}


/// returning output
let xOH = [];


for (let j = 0; j < nodes_out.length; j++)
{
xOH[j] = nodes_out[j].val;
}


return xOH;
}
