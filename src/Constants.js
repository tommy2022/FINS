export const SPR = "Sprint";

export const DIST = "Distance";

export const IM = "IM";
export const FLY = "Butterfly";
export const BK = "Backstroke";
export const BR = "Breaststroke";
export const FR = "Freestyle";

export const athletes = [
    {
        id: 1,
        name: "Mark Joseph",
        speciality: SPR,
        stroke: [IM, FLY],
        hours: 6.6,
        progression: 0.3,
    },
    {
        id: 2,
        name: "Jacob Thorton",
        speciality: DIST,
        stroke: [BR],
        hours: 5.2,
        progression: 1.2,
    },
    {
        id: 3,
        name: "Tim Jones",
        speciality: DIST,
        stroke: [FR],
        hours: 8,
        progression: 1.5,
    },
    {
        id: 4,
        name: "Tony Mack",
        speciality: SPR,
        stroke: [IM, BK, BR],
        hours: 6,
        progression: 3.0,
    },
];
