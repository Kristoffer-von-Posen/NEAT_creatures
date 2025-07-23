/// klasy

export     class node {
    constructor(id, typ,val,leyer) {
    this.id = id;
    this.typ = typ;
    this.val = val;
    this.leyer = leyer;
  }
}

export     class connect {
    constructor(id, inn, out, wei, ena, leyer) {
    this.id = id;
    this.inn = inn;
    this.out = out;
    this.wei = wei;
    this.ena = ena;
    this.leyer = leyer;
  }
}

export         function sigmoid(value)
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