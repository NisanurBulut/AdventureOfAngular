export class BookItem {
    public deleteStatus = 0;
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public imageLink: string,
        public authors: string) {
    }
}
