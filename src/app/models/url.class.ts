import { Pagination } from "./user.state";

export class MyUrl {
    constructor(public url: string) { }

    static buildApiUrl(criteria, pagination: Pagination) {
        const newUrl = `https://randomuser.me/api/?page=${pagination.currentPage}&results=${pagination.selectedSize}&seed=${criteria}`;
        return new MyUrl(newUrl);
    }
}