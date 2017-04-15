# ireactivity-form-dom
Bi-directional forms inputs binding.

```javascript
import {Provider, connect, update, render} from 'ireactivity';
import {input, submit} from 'ireactivity-form-dom';
```

```javascript

const TodoForm = ({onSave}) => {
    const todo = {
        title: '',
        user: {
            name: 'slava'
        }
    };

    const save = () => {
        onSave({...todo});
    };

    return render(todo, () =>
        <form {...submit(save)}>
            <div>{todo.title}</div>
            <input type="text" {...input(todo, 'title')}/>
            <div>{todo.user.name}</div>
            <input type="text" {...input(todo, 'user.name')}/>
        </form>
    )
};
```

This example a part of simple web todo: 
- simple web todo list [https://github.com/slavahatnuke/ireactivity-web-simple-list-example](https://github.com/slavahatnuke/ireactivity-web-simple-list-example)

## iReactivity
[https://www.npmjs.com/package/ireactivity](https://www.npmjs.com/package/ireactivity) - Simple React binding 