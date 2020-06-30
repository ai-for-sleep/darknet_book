# GEMM 이란?

참고 자료 : [https://petewarden.com/2015/04/20/why-gemm-is-at-the-heart-of-deep-learning/](https://petewarden.com/2015/04/20/why-gemm-is-at-the-heart-of-deep-learning/)

- `General Matrix to Matrix Multiplication`
- 1979년에 만들어진 BLAS 라이브러리의 일부 입니다.
- 두개의 입력 행렬을 곱해서 출력을 얻는 방법 입니다.

딥러닝에서 대부분의 연산은 `output = input * weight + bias`로 표현이 됩니다. 여기서 `input`, `output`, `weight`를 행렬로 표현해서 GEMM을 사용해 연산할 수 있습니다.



![gemm1](/figure/gemm1.PNG)



## Fully Connected Layer



![gemm2](/figure/gemm2.PNG)



`fully connected layer`는 위와 같이 표현할 수 있습니다.


## Convolutional Layer



![gemm3](/figure/gemm3.PNG)



- `im2col` : 3차원 이미지 배열을 2차원 배열로 변환합니다.

`convolutional layer`는 위와 같이 표현할 수 있습니다.
위 그림의 경우는 `stride`가 `kernel size`와 같은 경우를 의미합니다.

---

##
