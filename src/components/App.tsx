import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import config from '../../amplifyconfiguration.json';
import type { ReactNode } from "react";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(config);

function App({ children }: { children: ReactNode }) {
    return <>{children}</>;
}

export default withAuthenticator(App);
