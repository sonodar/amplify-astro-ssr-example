import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import config from '../../amplifyconfiguration.json';
import TodoList from "./TodoList.tsx";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(config);

function App() {
    return <TodoList />;
}

export default withAuthenticator(App);
