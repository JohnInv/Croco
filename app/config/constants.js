export const beachCoords = (xEnd, yEnd) => {
    const p1 = [0, yEnd];
    const p2 = [xEnd, yEnd];
    const p3 = [xEnd, p2[1] - yEnd];
    const p4 = [p3[0], p3[1], p3[0], p3[1]];
    const p5 = [p4[0], p4[1], p4[2], p4[3]];
    const p6 = [p5[0], p5[1], p5[2], p5[3]];
    const p7 = [p6[0], p6[1], p6[2], p6[3]];
    const p8 = [p7[0], p7[1], 0, p7[3]];

    const x1 = xEnd / 2;
    const y1 = 0;
    const x2 = xEnd / 2;
    const y2 = yEnd;

    return {
        points: [p1, p2, p3],
        curvedPoints: [p4, p5, p6, p7, p8],
        gradient: [x1, y1, x2, y2]
    };
};

export const beachCoordsTop = (xEnd, yEnd) => {
    const p1 = [0, yEnd];
    const p2 = [xEnd, yEnd];
    const p3 = [xEnd, p2[1] - yEnd];
    const p4 = [p3[0], p3[1], p3[0], p3[1]];
    const p5 = [p4[0], p4[1], p4[2], p4[3]];
    const p6 = [p5[0], p5[1], p5[2] - 100, p5[3]];
    const p7 = [p6[0], p6[1], p6[2] - 100, p6[3]];
    const p8 = [p7[0], p7[1], 0, p7[3]];

    const x1 = xEnd / 2;
    const y1 = yEnd;
    const x2 = xEnd / 2;
    const y2 = 0;

    return {
        points: [p1, p2, p3],
        curvedPoints: [p4, p5, p6, p7, p8],
        gradient: [x1, y1, x2, y2]
    };
};