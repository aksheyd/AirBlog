import { User_Post } from "./definitions";

// FIXME: move to database
export const posts: User_Post[] = [
    {
        id: 1,
        created_at: '2021-09-12T12:00:00Z',
        updated_at: '2021-09-12T12:00:00Z',
        title: 'Hello, San Fran!',
        content: 'This is the first post!',
        airport: 'SFO',
        terminal: 'Harvey Milk Terminal 1'
    },
    {
        id: 2,
        created_at: '2021-09-12T12:00:00Z',
        updated_at: '2021-09-12T12:00:00Z',
        title: 'Hello, Paris!',
        content: 'This is the second post',
        airport: 'CDG',
        terminal: 'Terminal 2E'
    },
    {
        id: 3,
        created_at: '2021-09-12T12:00:00Z',
        updated_at: '2021-09-12T12:00:00Z',
        title: 'Hello, Detroit!',
        content: 'This is the third post',
        airport: 'DTW',
        terminal: 'McNamara Terminal'
    },
] 