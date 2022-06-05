import { USER } from './user';

export interface NOTE {
    id:  number;
    title: string;
    content: string;
    user_id: number;
    user: USER;
    created: Date | string;
    updated: Date | string;
}

export class NOTE {
    id:  number;
    title: string;
    content: string;
    user_id: number;
    user: USER;
    created: Date | string;
    updated: Date | string;

    constructor(
        id:  number,
        title: string,
        content: string,
        user_id: number,
        user: USER,
        created: Date | string,
        updated: Date | string,
    ){
        this.id = id;
        this.title = title;
        this.content = content;
        this.user_id = user_id;
        this.user = user;
        this.created = created;
        this.updated = updated;
    }
}