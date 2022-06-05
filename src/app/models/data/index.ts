import { USER } from "../user";
import { NOTE } from "../note";

export const DB_USERS: USER[] = [
    {
        id: 11,
        first_name: "Michael",
        last_name: "Ben",
        email: 'michael@gmail.com',
        created: new Date(),
        updated: new Date()
    },
    {
        id: 13,
        first_name: "Michael",
        last_name: "Chisom",
        email: 'michael1@gmail.com',
        created: new Date(),
        updated: new Date()
    },
]

export const DB_NOTES: NOTE[] = [
    {
        id: 1,
        title: "Test Note",
        content: "This is my test note",
        user_id: 11,
        user: {
            id: 11,
            first_name: "Michael",
            last_name: "Ben",
            email: 'michael@gmail.com',
            created: new Date(),
            updated: new Date()
        },
        created: new Date(),
        updated: new Date(),
    },
    {
        id: 2,
        title: "Test Note",
        content: "This is my test note",
        user_id: 11,
        user: {
            id: 11,
            first_name: "Michael",
            last_name: "Ben",
            email: 'michael@gmail.com',
            created: new Date(),
            updated: new Date()
        },
        created: new Date(),
        updated: new Date(),
    },
    {
        id: 3,
        title: "Test Note",
        content: "This is my test note",
        user_id: 11,
        user: {
            id: 11,
            first_name: "Michael",
            last_name: "Ben",
            email: 'michael@gmail.com',
            created: new Date(),
            updated: new Date()
        },
        created: new Date(),
        updated: new Date(),
    },
    {
        id: 4,
        title: "Test Note",
        content: "This is my test note",
        user_id: 11,
        user: {
            id: 11,
            first_name: "Michael",
            last_name: "Ben",
            email: 'michael@gmail.com',
            created: new Date(),
            updated: new Date()
        },
        created: new Date(),
        updated: new Date(),
    },
    {
        id: 5,
        title: "Test Note",
        content: "This is my test note",
        user_id: 11,
        user: {
            id: 11,
            first_name: "Michael",
            last_name: "Ben",
            email: 'michael@gmail.com',
            created: new Date(),
            updated: new Date()
        },
        created: new Date(),
        updated: new Date(),
    },
]