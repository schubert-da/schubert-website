import { writable } from "svelte/store";

export const navbarHeight = writable(90);
export const scrollerParams = writable({});

export const sectionHeights = writable({
    home: 0,
    works: 0,
    contact: 0,
    other: 0,
});