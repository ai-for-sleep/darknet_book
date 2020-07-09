# list란?


---

# list.c

```
// darknet.h

typedef struct list{
    int size;
    node *front;
    node *back;
} list;

```

- list 구조체입니다.

## make_list

```
list *make_list()
{
	list *l = malloc(sizeof(list));
	l->size = 0;
	l->front = 0;
	l->back = 0;
	return l;
}
```

- list를 동적할당하고 값을 0으로 초기화 합니다.

## list_insert

```
void list_insert(list *l, void *val)
{
	node *new = malloc(sizeof(node));
	new->val = val;
	new->next = 0;

	if(!l->back){
		l->front = new;
		new->prev = 0;
	}else{
		l->back->next = new;
		new->prev = l->back;
	}
	l->back = new;
	++l->size;
}
```

- list에 val을 가지는 node를 입력합니다.
