export const countPage = (count) => {
    let pageButton = [];
    const limitPage = Math.ceil(count / 10);
    for (let i = 0; i < limitPage; i++) {
        pageButton.push(i + 1);
    }
    return pageButton;
}