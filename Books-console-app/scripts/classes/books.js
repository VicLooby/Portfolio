import { nanoid } from "https://esm.sh/nanoid";

export default class booklist {
    constructor({title, author, type, read = false } = {}) {
        this._id = nanoid();
        this.title = title;
        this.author = author;
        this.type = type;
        this.read = read;
    }
}
