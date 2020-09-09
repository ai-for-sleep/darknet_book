# DarkNet BOOK

- 본 문서는 [DarkNet](https://github.com/pjreddie/darknet) 프로젝트 분석 문서입니다.

### DarkNet

C 언어로 작성된 Deep Learning Open Source

### 공식 홈페이지

- DarkNet : [https://pjreddie.com/darknet/](https://pjreddie.com/darknet/)
- GitHub
  + [https://github.com/pjreddie/darknet](https://github.com/pjreddie/darknet)
  + [https://github.com/AlexeyAB/darknet](https://github.com/AlexeyAB/darknet)

### Paper

- [YOLOv1](https://arxiv.org/abs/1506.02640)
- [YOLOv2](https://arxiv.org/abs/1612.08242)
- [YOLOv3](https://arxiv.org/abs/1804.02767)
- [YOLOv4](https://arxiv.org/abs/2004.10934)

### :blush: 이 문서를 작성하면서 얻기 원하는 것 :blush:

- Deep Learning

- 프로젝트 분석 경험

- C 언어

- 고마움

### NOTE

- 혼자하느라 아직 못적고 부족한 부분이 많습니다.

- 무식하게 코드를 읽었을수도 있지만 딥러닝을 코드로 이해하려고 이렇게 했습니다.

- 1차적으로 GPU, OPENCV 코드는 빼고 봅니다. (추후 예정 입니다..)

- 수정이 필요한게 있다면 메일을 주시면 좋을 것 같습니다. Github로 진행하고 싶은데 빌드를 해서 올리는 거라 좀 문제가 많네요..

- 메일로 성함과 메일, 수정할 부분을 같이 보내주시면 제가 직접 수정하고 기여 목록을 만들어 올려드리겠습니다.

- 조그만 수정이라도 정말 고맙게 받겠습니다.


### 프로젝트를 분석하기 위한 철칙

- 가능한 그림으로 표현 합니다.

- 딥러닝 개념을 이해 합니다.

- 한줄한줄 주석을 적지 말고 중요한 부분에만 주석을 적습니다.

- 함수가 무슨 역할을 하는지 한두줄만 적습니다.

- 자료구조를 이해합니다.

- 스타일을 이해합니다.

- 위에 작업이 끝나면 최초로 모든 사람들에게 배포하고 중요한 알고리즘을 읽어보며 이해하기 쉽게 추가 설명을 작성합니다.

### 서론

처음 대학을 졸업하기 전 YOLO를 처음 보고 Vision Deep Learning에 흥미를 느껴 대학원에 들어왔습니다.

그 후로 대학원 생활을 지내며 YOLO가 어느 덧 version 4 까지 나온 것을 보고 대학원 입학 전 꿈꾸던 DarkNet 완전 분석을 진행해보려고 합니다.

많이 부족할 수도 있고 항시 업데이트 시켜서 졸업 전까지는 완료하고 싶습니다.

이런 부분에 대해 강연이나 책도 써보고 싶은 마음에 무작정 시작부터 해봤습니다.

- Start : `2020 / 06 / 09`

### LICENSE

- 같이 공부하고 이해할 때 사용해 주세요

- 그림과 글을 개인의 금전적 이익을 취하는데 사용하지 말아주세요

- 잘못된 글이 있다면 언제든 메일, 댓글을 남겨주세요

#### 작성자

- `name` : `Jaemin Jeong`
- `E-mail` : `woalsdl600@gmail.com`
- `Github` : [https://github.com/](https://github.com/)
- `Blog` : [https://jjeamin.github.io/](https://github.com/)
