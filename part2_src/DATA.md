# /data

- `9k.label` : YOLO9000 dataset label

- `9k.names` : YOLO9000 dataset names

- `9k.tree` : YOLO9000 tree 정보(label:tree번호)

- `coco.names` : coco dataset names(80개)

- `coco9k.map` : coco를 tree에 결합한 정보(tree번호)

- `imagenet.label.list` : imagenet dataset label

- `imagenet.shortnames.list` : imagenet dataset names

- `voc.names` : voc dataset names

- `openimages.names` : openimages dataset names

- `inet9k.map` : imagenet을 tree에 결합한 정보

---

# /data/labels

- 알파벳 이미지가 다양한 크기별로 들어있는 폴더 입니다.

- 이미지에 라벨을 그리기 위한 용도 입니다.

---

# Dataset

- `Object Detection`에서 가장 많이 사용되는 데이터셋은 대표적으로 `ImageNet`, `Pascal VOC`, `COCO`가 있습니다.

## ImageNet

`Homepage` : [http://www.image-net.org/](http://www.image-net.org/)

`ILSVRC` : [http://www.image-net.org/challenges/LSVRC/](http://www.image-net.org/challenges/LSVRC/)

- ImageNet 프로젝트는 시각적 객체 인식 소프트웨어 연구에 사용하도록 설계된 대형 시각적 데이터베이스입니다.

- 현재 1000만개 이상의 이미지가 수집되었습니다.

- 20000개 이상의 클래스를 가지고 있습니다.

- ImageNet을 바탕으로 `ILSVRC(ImageNet Large Scale Visual Recognition Challeng)` 라는 이미지 인식 대회가 열립니다.

- ILSVRC는 대회를 위해서 1000개의 클래스로 구성 됩니다.

- 보통 ILSVRC는 2012년도 데이터셋으로 가장 많이 벤치마킹 됩니다.

## Pascal VOC

`Homepage` : [http://host.robots.ox.ac.uk/pascal/VOC/](http://host.robots.ox.ac.uk/pascal/VOC/)

- Pascal VOC는 object class recognition을 위한 표준화된 이미지 데이터셋 입니다.

- 보통 Pascal VOC는 2007년도 데이터셋으로 가장 많이 벤치마킹 됩니다.

- CLASS
  + Person: person
  + Animal: bird, cat, cow, dog, horse, sheep
  + Vehicle: aeroplane, bicycle, boat, bus, car, motorbike, train
  + Indoor: bottle, chair, dining table, potted plant, sofa, tv/monitor

## COCO

`Homepage` : [http://cocodataset.org/#home](http://cocodataset.org/#home)

`API` : [https://github.com/cocodataset/cocoapi](https://github.com/cocodataset/cocoapi)

`사용법` : [https://jjeamin.github.io/info/2019/06/20/coco_api/](https://jjeamin.github.io/info/2019/06/20/coco_api/)

- COCO는 Object Detection, Segmentation, Captioning을 위한 데이터셋 입니다.

- 33만개의 이미지를 가지고 있습니다.

- 150만개의 Object instances를 포함합니다.

- 80개의 object 클래스가 있습니다.

- 91개의 stuff 클래스가 있습니다.

- 25만명 사람에 keypoint가 annotation 되어 있습니다.

- 이미지당 5개의 caption이 있습니다.




![coco](/figure/coco_stuff.png)
