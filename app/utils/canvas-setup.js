export const setup = (id, w, h) => {
    const c = document.getElementById(id);
    const ctx = c.getContext('2d');

    c.width = window.innerWidth * w;
    c.height = window.innerHeight * h;

    return { c, ctx };
};