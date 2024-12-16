import { nanoid } from "https://esm.sh/nanoid";
import deepmerge from "https://esm.sh/deepmerge";

export default class Manager {

    items = [];

    constructor({ startingData = [], itemClass }) {
        this._id = nanoid();
        this.itemClass = itemClass;
        for (const item of startingData) {
        this.createItem(item);
        }
    }

createItem(data) {
    const newItem = new this.itemClass(data);
    this.items = [...this.items, newItem];
    return newItem._id;
    }



updateItem(id, updates = {}) {
    console.log(`Updating item with id: ${id} with`, updates);

    const idx = this.items.findIndex((item) => item._id === id);

    console.log("Index of the item:", idx);

    if (idx === -1) {
        throw new Error(`Item with id ${id} not found`);
    }

    const item = this.items[idx];

    const updatedItem = new this.itemClass(deepmerge(item, updates));

    this.items = this.items.toSpliced(idx, 1, updatedItem);
}



    removeItem(id) {

    const idx = this.items.findIndex(({ _id }) => {
    return _id === id;
    });

    console.log("idx", idx);

    if (idx === -1) {
    throw new Error(`Item with id ${id} not found`);
    }

    const removedItem = this.items[idx];

    this.items = this.items.toSpliced(idx, 1);

    return removedItem;
}
}
