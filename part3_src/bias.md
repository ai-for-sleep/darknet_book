# bias.c

## copy_cpu

```c
void copy_cpu(int N, float *X, int INCX, float *Y, int INCY)
{
    int i;
    for(i = 0; i < N; ++i) Y[i*INCY] = X[i*INCX];
}
```

- X -> Y 로 값을 복사하는 함수입니다.

## mean_cpu

```
void mean_cpu(float *x, int batch, int filters, int spatial, float *mean)
{
    float scale = 1./(batch * spatial);
    int i,j,k;
    for(i = 0; i < filters; ++i){
        mean[i] = 0;
        for(j = 0; j < batch; ++j){
            for(k = 0; k < spatial; ++k){
                int index = j*filters*spatial + i*spatial + k;
                mean[i] += x[index];
            }
        }
        mean[i] *= scale;
    }
}
```

- 각 필터의 평균을 구하는 함수 입니다.

$$mean = \frac{1}{m} \sum_{i=0}^{m} X[i]$$

각 필터마다 위와 같은 연산을 합니다.

## variance_cpu

```
void variance_cpu(float *x, float *mean, int batch, int filters, int spatial, float *variance)
{
    float scale = 1./(batch * spatial - 1);
    int i,j,k;
    for(i = 0; i < filters; ++i){
        variance[i] = 0;
        for(j = 0; j < batch; ++j){
            for(k = 0; k < spatial; ++k){
                int index = j*filters*spatial + i*spatial + k;
                variance[i] += pow((x[index] - mean[i]), 2);
            }
        }
        variance[i] *= scale;
    }
}
```

- 각 필터의 분산을 구하는 함수 입니다.

$$variance = \frac{1}{m - 1} \sum_{i=0}^{m} (X[i] - mean)^2 $$

각 필터마다 위와 같은 연산을 합니다.

## normalize_cpu

```c
void normalize_cpu(float *x, float *mean, float *variance, int batch, int filters, int spatial)
{
    int b, f, i;
    for(b = 0; b < batch; ++b){
        for(f = 0; f < filters; ++f){
            for(i = 0; i < spatial; ++i){
                int index = b*filters*spatial + f*spatial + i;
                x[index] = (x[index] - mean[f])/(sqrt(variance[f]) + .000001f);
            }
        }
    }
}
```

- 정규화 함수 입니다.


$$X[i] = \frac{X[i] - mean}{\sqrt{variance}}$$


## axpy_cpu

```c
void axpy_cpu(int N, float ALPHA, float *X, int INCX, float *Y, int INCY)
{
    int i;
    for(i = 0; i < N; ++i) Y[i*INCY] += ALPHA*X[i*INCX];
}
```

- $$Y = Y + alpha * X$$

## scal_cpu

```
void scal_cpu(int N, float ALPHA, float *X, int INCX)
{
    int i;
    for(i = 0; i < N; ++i) X[i*INCX] *= ALPHA;
}
```

- $$X = X * alpha$$

## fill_cpu

```
void fill_cpu(int N, float ALPHA, float *X, int INCX)
{
    int i;
    for(i = 0; i < N; ++i) X[i*INCX] = ALPHA;
}
```

- X에 alpha로 값을 초기화 합니다.
