type MyReadonly<T> = { readonly [K in keyof T]: T[K] }


interface Todo {
  title: string
}

const todo: MyReadonly<Todo> = {
  title: 'hi'
}

todo.title = 'hello' // readonly