import { Amplify } from 'aws-amplify';
import config from '../amplifyconfiguration.json';
import type { Schema } from '../amplify/data/resource';
import { generateClient } from 'aws-amplify/api';

Amplify.configure(config);

export const client = generateClient<Schema>();
