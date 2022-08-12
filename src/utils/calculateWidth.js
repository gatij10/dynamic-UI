const calculateWidth = (aspectRatio, height) => {
    const width = height / aspectRatio;
    return width;
};

export default calculateWidth;
