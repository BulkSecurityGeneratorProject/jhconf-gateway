export interface IBlog {
    id?: number;
    title?: string;
    author?: string;
    postContentType?: string;
    post?: any;
}

export class Blog implements IBlog {
    constructor(public id?: number, public title?: string, public author?: string, public postContentType?: string, public post?: any) {}
}
