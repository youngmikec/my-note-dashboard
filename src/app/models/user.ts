export interface USER {
    id:	        number;
    email:	    string;
    first_name:	string;
    last_name:	string;
    created:	string | Date;
    updated:	string | Date;

}

export class USER {
    id:	        number;
    email:	    string;
    first_name:	string;
    last_name:	string;
    created:	string | Date;
    updated:	string | Date;

    constructor(
        id:	        number,
        email:	    string,
        first_name:	string,
        last_name:	string,
        created:	string | Date,
        updated:	string | Date,
    ){
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.created = created;
        this.updated = updated;
    }
}