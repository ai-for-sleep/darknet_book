
# Fully Connected Layer 란?

이전 Layer의 모든 노드가 다음 Layer의 모든 노드에 각각 하나씩 연결되어있는 Layer 입니다.

- 가장 기본적인 Layer
- 1차원 배열로만 이루어져 있습니다.

이해를 돕기위해 그림으로 살펴보겠습니다.



![fc1](/figure/fc1.PNG)



크게 복잡하지 않고 단순한 연산으로만 이루어져 있습니다.

Fully Connected Layer 역전파는 쉽게 표현하는 경우 아래 그림과 같습니다.



![fc2](/figure/fc2.PNG)



output을 계산하기 위해서 각자의 id를 가지고 있는 weight가 사용된 곳을 보시면 이해하기 쉽습니다.
예를 들어서 $$w_{11}$$은 $$h_{11}$$를 연산하는데만 사용되었기 때문에 해당 값만 사용합니다.

---

# connected_layer.c

## forward_connected_layer

```
void forward_connected_layer(layer l, network net)
{
    fill_cpu(l.outputs*l.batch, 0, l.output, 1);
    int m = l.batch;
    int k = l.inputs;
    int n = l.outputs;
    float *a = net.input;
    float *b = l.weights;
    float *c = l.output;
    gemm(0,1,m,n,k,1,a,k,b,k,1,c,n);
    if(l.batch_normalize){
        forward_batchnorm_layer(l, net);
    } else {
        add_bias(l.output, l.biases, l.batch, l.outputs, 1);
    }
    activate_array(l.output, l.outputs*l.batch, l.activation);
}
```

`forward`

- fully connected layer 연산
- batch normalization(no bias) or bias
- activation function

## backward_connected_layer

```
void backward_connected_layer(layer l, network net)
{
    gradient_array(l.output, l.outputs*l.batch, l.activation, l.delta);

    if(l.batch_normalize){
        backward_batchnorm_layer(l, net);
    } else {
        backward_bias(l.bias_updates, l.delta, l.batch, l.outputs, 1);
    }

    int m = l.outputs;
    int k = l.batch;
    int n = l.inputs;
    float *a = l.delta;
    float *b = net.input;
    float *c = l.weight_updates;
    gemm(1,0,m,n,k,1,a,m,b,n,1,c,n);

    m = l.batch;
    k = l.outputs;
    n = l.inputs;

    a = l.delta;
    b = l.weights;
    c = net.delta;

    if(c) gemm(0,0,m,n,k,1,a,k,b,n,1,c,n);
}
```

`backward`

- activation function
- batch normalization(no bias) or bias
- fully connected layer 연산
