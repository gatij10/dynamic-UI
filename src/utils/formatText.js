const formatText = (rawText) => {
    const splitText = rawText.text.split(' ');
    let bracketIndex = 0;

    rawText.entities.forEach((entity, idx) => {
        let styleObj = '';
        // create the style object
        Object.keys(entity).forEach((attr) => {
            if (attr !== 'text') {
                styleObj += `${attr}: ${entity[attr]};`;
            }
        });

        // replace {} with span tag containing styling
        splitText.forEach((ele, index) => {
            if (ele.includes('{}') && bracketIndex === idx) {
                let entityText = entity.text;
                if (ele.split('{}').length > 1) {
                    // eslint-disable-next-line prefer-destructuring
                    entityText = entity.text + ele.split('{}')[1];
                }
                splitText[index] = `<span style="${styleObj}">${entityText}</span>`;
                bracketIndex += 1;
            }
        });
    });

    return splitText.join(' ');
};

export default formatText;
