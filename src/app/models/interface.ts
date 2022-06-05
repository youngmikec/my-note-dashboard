import { USER, NOTE } from './index';

export interface LOGIN_PAYLOAD {
    email:      string;
    password:   string;
}

export interface SIGNUP_RESPONSE {
    email:      string;
    password:   string;
    first_name: string;
    last_name:  string;
}

export interface USER_RESPONSE {
    status:     string;
    message:    string;
    data:       USER;
}

export interface NOTE_RESPONSE {
    status:     string;
    message:    string;
    data:       NOTE;
}

export interface NOTES_RESPONSE {
    status:     string;
    message:    string;
    has_next:   boolean;
    per_page:   number;
    total:      number;
    data:       NOTE[];
}



export interface GENERAL_RESPONSE {
    status:     string;
    message:    string;
}


export interface GENERAL_LIST_RESPONSE {
    status:     string;
    message:    string;
    has_next:   boolean;
    per_page:   number;
    total:      number;
}