# Install

- OS : `Window 10`
- GPU : `RTX-2080 Ti`
- Visual Studio : `Community 2019`
- Opencv : `4.3.0`
- CUDA : `10.1`
- cudnn : `7.65`

GPU 버전에 맞게 CUDA와 cudnn을 설치를 하시면 됩니다.

- CUDA : [https://developer.nvidia.com/cuda-toolkit-archive](https://developer.nvidia.com/cuda-toolkit-archive)
- cudnn : [https://developer.nvidia.com/rdp/form/cudnn-download-survey](https://developer.nvidia.com/rdp/form/cudnn-download-survey)

## CUDA version 확인

```shell
nvcc --version
```

## cudnn version 확인

`C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v10.1\include\cudnn.h`

```c
#define CUDNN_MAJOR 7
#define CUDNN_MINOR 6
#define CUDNN_PATCHLEVEL 5
```

version : `7.65`

---

## Visual Studio 설치

- [https://visualstudio.microsoft.com/ko/](https://visualstudio.microsoft.com/ko/)

1. Visual Studio 다운로드 -> Community 2019

2. C++를 사용한 데스크톱 개발 Check

## Opencv 설치

- [https://opencv.org/releases/](https://opencv.org/releases/)

## Darknet 설치

Yolov4

```shell
git clone https://github.com/AlexeyAB/darknet.git
```

---

## DarkNet 실행하기


## 참고자료
- [https://mickael-k.tistory.com/10](https://mickael-k.tistory.com/10)
