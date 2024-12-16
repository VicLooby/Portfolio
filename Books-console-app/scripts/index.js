import vicsbooksApp from "./classes/manager.js";
import booklist from "./classes/books.js";

const booksApp = new vicsbooksApp({ itemClass: booklist });
console.log('Books App', booksApp);

// CREATE
const thursdayMurderClub = booksApp.createItem({
title: "Thursday Murder Club",
author: "Richard Osman",
type: "audiobook",
read: true
});
console.log('Thursday Murder Club', thursdayMurderClub);

const daisyJones = booksApp.createItem({
    title: "Daisy Jones & The Six",
    author: "Taylor Jenkins Reid",
    type: "hardback",
    });
    console.log('Daisy Jones & The Six', daisyJones);

    const tuesdaysWithMorry = booksApp.createItem({
        title: "Tuesdays with Morry",
        author: "Mitch Albom",
        type: "softback",
        });
        console.log('Tuesdays with Morry', tuesdaysWithMorry);

// READ
console.log('books app', booksApp);

// UPDATE
const updated = booksApp.updateItem(tuesdaysWithMorry, {
    title: "Tuesdays with Morrie",
});
console.log('Tuesdays with Morrie', vicsbooksApp);

// DELETE
const removedBook = booksApp.removeItem(daisyJones);
console.log("removedBook", removedBook);
console.log('books app', vicsbooksApp);
