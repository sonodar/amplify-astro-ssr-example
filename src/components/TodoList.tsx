import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type {Schema} from '../../amplify/data/resource';

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();

export default function TodoList() {
    const [todos, setTodos] = useState<Schema['Todo'][]>([]);

    useEffect(() => {
        const sub = client.models.Todo.observeQuery()
            .subscribe(({ items }) => setTodos([...items]))

        return () => sub.unsubscribe()
    }, []);

    return (
        <main>
            <h1>Hello, Amplify 👋</h1>

            <button onClick={async () => {
                const content = window.prompt("title");

                if (!content) {
                    return;
                }

                // create a new Todo with the following attributes
                const { errors, data: newTodo } = await client.models.Todo.create({
                    // prompt the user to enter the title
                    content: window.prompt("title"),
                    done: false,
                    priority: 'medium'
                })
                console.log(errors, newTodo);
            }}>Create </button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.content}</li>
                ))}
            </ul>
        </main>
    );
}