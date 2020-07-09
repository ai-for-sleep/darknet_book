# Network 란?

---
# network.c

## make_network

```
network *make_network(int n)
{
    network *net = calloc(1, sizeof(network));
    net->n = n;
    net->layers = calloc(net->n, sizeof(layer));
    net->seen = calloc(1, sizeof(size_t));
    net->t    = calloc(1, sizeof(int));
    net->cost = calloc(1, sizeof(float));
    return net;
}
```
