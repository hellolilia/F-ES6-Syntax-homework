const parseData = (input) => {
    let result = [];
    input.data.map((key) => {
        let parse = {};
        input.column.map((columnKey,columnValue) => {
            parse[columnKey.name] = key[columnValue];
        });
        result.push(parse);
    });
    return result;
};
export { parseData };
