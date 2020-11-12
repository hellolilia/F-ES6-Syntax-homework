const inject = (items, sections) => {
    let result = [...items];
    sections.map((i) => {
        i.index===0 ? result.splice(i.index, 0, i.content) : result.splice(i.index+1, 0, i.content);
    });
    return result;
}

export { inject };
