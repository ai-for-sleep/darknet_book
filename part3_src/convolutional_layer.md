# Convolutional Layer 란?

Convolution은 합성곱으로 2가지 연산을 사용합니다.

- 각 원소끼리 곱합니다. (element wise multiplication)
- 각 원소를 더합니다.

이해를 돕기위해 그림으로 살펴보겠습니다.
아래 그림과 같이 각 원소를 곱하고 합한 값을 활성화 함수를 통과하여 최종적으로 값을 만듭니다.(아래 그림은 활성화 함수를 생략한 그림입니다.)



![conv1](/figure/conv1.PNG)



Convolutional Layer는 Feature Maps과 Filters의 Convolution 연산을 통해 그 다음 Feature Maps을 만들어 내는 작업을 반복합니다.
여기서 filters가 학습 파라미터 입니다.

```
입력 이미지 -> Filters(kernel) -> Feature Maps(Channels) -> Filters(kernel) -> Feature Maps(Channels) -> ...
```

Convolution Layer는 설정할 수 있는 파라미터가 있습니다.

- `stride` : filter가 움직이는 간격입니다.
- `padding` : Feature Map의 테두리 부분의 정보 손실을 줄이기 위해서 테두리를 특정한 값(보통 0)으로 채워 넣는 방법입니다. padding은 몇개의 테두리를 채울지에 대한 값입니다.

- filter의 수(가중치의 수) : $$k \times k \times C_1 \times C_2$$
- $$W_2 = \frac{W_1 - k + 2 \times padding}{stride} + 1$$
- $$H_2 = \frac{H_1 - k + 2 \times padding}{stride} + 1$$
