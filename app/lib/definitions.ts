

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type Todo = {
    id: string;
    title: string;
    body: string;
    user_id: string;
    date: string;
    status: 'complete' | 'incomplete'
};
