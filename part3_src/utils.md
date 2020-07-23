
## sum_array

```
float sum_array(float *a, int n)
{
    int i;
    float sum = 0;
    for(i = 0; i < n; ++i) sum += a[i];
    return sum;
}
```

- 배열의 총합을 구합니다.


## mean_array

```
float mean_array(float *a, int n)
{
    return sum_array(a,n)/n;
}
```

- 배열의 평균을 구합니다.
