import { subDays, addDays } from 'date-fns';

export const EMPLOYEES = [
    {
        "id": 1,
        "name": "John Doe",
        "color": "#6366f1",
        "textColor": "white"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "color": "#10b981",
        "textColor": "white"
    },
    {
        "id": 3,
        "name": "Mike Ross",
        "color": "#f59e0b",
        "textColor": "white"
    },
    {
        "id": 4,
        "name": "Sarah Connor",
        "color": "#ef4444",
        "textColor": "white"
    },
    {
        "id": 5,
        "name": "David Miller",
        "color": "#8b5cf6",
        "textColor": "white"
    },
    {
        "id": 6,
        "name": "David Johnson",
        "color": "#2961a5",
        "textColor": "white"
    },
    {
        "id": 7,
        "name": "David Wilson",
        "color": "#ecebde",
        "textColor": "black"
    },
    {
        "name": "João",
        "color": "#aca015",
        "id": 1770347061725,
        "textColor": "white"
    }
];

let id = 100;
export const INITIAL_EVENTS = [
    {
        "id": 1770346554332,
        "employeeId": 1,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 5,
        "label": "New Session"
    },
    {
        "id": 1770346554960,
        "employeeId": 1,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 6,
        "label": "New Session"
    },
    {
        "id": 1770346555734,
        "employeeId": 1,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 7,
        "label": "New Session"
    },
    {
        "id": 1770346556299,
        "employeeId": 1,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 8,
        "label": "New Session"
    },
    {
        "id": 1770346563850,
        "employeeId": 1,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 10,
        "label": "New Session"
    },
    {
        "id": 1770346564445,
        "employeeId": 1,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 11,
        "label": "New Session"
    },
    {
        "id": 1770346565129,
        "employeeId": 1,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 12,
        "label": "New Session"
    },
    {
        "id": 1770346565662,
        "employeeId": 1,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 13,
        "label": "New Session"
    },
    {
        "id": 1770346570487,
        "employeeId": 2,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 8,
        "label": "New Session"
    },
    {
        "id": 1770346571263,
        "employeeId": 2,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 9,
        "label": "New Session"
    },
    {
        "id": 1770346572112,
        "employeeId": 2,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 10,
        "label": "New Session"
    },
    {
        "id": 1770346572830,
        "employeeId": 2,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 11,
        "label": "New Session"
    },
    {
        "id": 1770346575082,
        "employeeId": 2,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 13,
        "label": "New Session"
    },
    {
        "id": 1770346575883,
        "employeeId": 2,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 14,
        "label": "New Session"
    },
    {
        "id": 1770346576524,
        "employeeId": 2,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 15,
        "label": "New Session"
    },
    {
        "id": 1770346577216,
        "employeeId": 2,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 16,
        "label": "New Session"
    },
    {
        "id": 1770346586073,
        "employeeId": 1,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 5,
        "label": "New Session"
    },
    {
        "id": 1770346586587,
        "employeeId": 1,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 6,
        "label": "New Session"
    },
    {
        "id": 1770346587103,
        "employeeId": 1,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 7,
        "label": "New Session"
    },
    {
        "id": 1770346587942,
        "employeeId": 1,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 8,
        "label": "New Session"
    },
    {
        "id": 1770346591342,
        "employeeId": 1,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 10,
        "label": "New Session"
    },
    {
        "id": 1770346592280,
        "employeeId": 1,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 11,
        "label": "New Session"
    },
    {
        "id": 1770346592941,
        "employeeId": 1,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 12,
        "label": "New Session"
    },
    {
        "id": 1770346593436,
        "employeeId": 1,
        "day": "2026-02-02T03:00:00.000Z",
        "hour": 13,
        "label": "New Session"
    },
    {
        "id": 1770346598163,
        "employeeId": 1,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 5,
        "label": "New Session"
    },
    {
        "id": 1770346598816,
        "employeeId": 1,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 6,
        "label": "New Session"
    },
    {
        "id": 1770346599312,
        "employeeId": 1,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 7,
        "label": "New Session"
    },
    {
        "id": 1770346600212,
        "employeeId": 1,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 8,
        "label": "New Session"
    },
    {
        "id": 1770346601128,
        "employeeId": 1,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 10,
        "label": "New Session"
    },
    {
        "id": 1770346601787,
        "employeeId": 1,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 11,
        "label": "New Session"
    },
    {
        "id": 1770346602354,
        "employeeId": 1,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 12,
        "label": "New Session"
    },
    {
        "id": 1770346603178,
        "employeeId": 1,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 13,
        "label": "New Session"
    },
    {
        "id": 1770346608933,
        "employeeId": 1,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 5,
        "label": "New Session"
    },
    {
        "id": 1770346609429,
        "employeeId": 1,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 6,
        "label": "New Session"
    },
    {
        "id": 1770346610045,
        "employeeId": 1,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 7,
        "label": "New Session"
    },
    {
        "id": 1770346610474,
        "employeeId": 1,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 8,
        "label": "New Session"
    },
    {
        "id": 1770346611016,
        "employeeId": 1,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 10,
        "label": "New Session"
    },
    {
        "id": 1770346611557,
        "employeeId": 1,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 11,
        "label": "New Session"
    },
    {
        "id": 1770346611932,
        "employeeId": 1,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 12,
        "label": "New Session"
    },
    {
        "id": 1770346612349,
        "employeeId": 1,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 13,
        "label": "New Session"
    },
    {
        "id": 1770346613528,
        "employeeId": 1,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 5,
        "label": "New Session"
    },
    {
        "id": 1770346613975,
        "employeeId": 1,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 6,
        "label": "New Session"
    },
    {
        "id": 1770346614449,
        "employeeId": 1,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 7,
        "label": "New Session"
    },
    {
        "id": 1770346614936,
        "employeeId": 1,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 8,
        "label": "New Session"
    },
    {
        "id": 1770346615729,
        "employeeId": 1,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 10,
        "label": "New Session"
    },
    {
        "id": 1770346616161,
        "employeeId": 1,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 11,
        "label": "New Session"
    },
    {
        "id": 1770346616637,
        "employeeId": 1,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 12,
        "label": "New Session"
    },
    {
        "id": 1770346617262,
        "employeeId": 1,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 13,
        "label": "New Session"
    },
    {
        "id": 1770346618947,
        "employeeId": 1,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 5,
        "label": "New Session"
    },
    {
        "id": 1770346619571,
        "employeeId": 1,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 6,
        "label": "New Session"
    },
    {
        "id": 1770346620104,
        "employeeId": 1,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 7,
        "label": "New Session"
    },
    {
        "id": 1770346620516,
        "employeeId": 1,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 8,
        "label": "New Session"
    },
    {
        "id": 1770346621274,
        "employeeId": 1,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 10,
        "label": "New Session"
    },
    {
        "id": 1770346621715,
        "employeeId": 1,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 11,
        "label": "New Session"
    },
    {
        "id": 1770346622191,
        "employeeId": 1,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 12,
        "label": "New Session"
    },
    {
        "id": 1770346622795,
        "employeeId": 1,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 13,
        "label": "New Session"
    },
    {
        "id": 1770346631400,
        "employeeId": 2,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 8,
        "label": "New Session"
    },
    {
        "id": 1770346631991,
        "employeeId": 2,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 9,
        "label": "New Session"
    },
    {
        "id": 1770346632753,
        "employeeId": 2,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 10,
        "label": "New Session"
    },
    {
        "id": 1770346633658,
        "employeeId": 2,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 11,
        "label": "New Session"
    },
    {
        "id": 1770346636441,
        "employeeId": 2,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 13,
        "label": "New Session"
    },
    {
        "id": 1770346637229,
        "employeeId": 2,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 14,
        "label": "New Session"
    },
    {
        "id": 1770346638346,
        "employeeId": 2,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 15,
        "label": "New Session"
    },
    {
        "id": 1770346639037,
        "employeeId": 2,
        "day": "2026-02-03T03:00:00.000Z",
        "hour": 16,
        "label": "New Session"
    },
    {
        "id": 1770346655285,
        "employeeId": 2,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 8,
        "label": "New Session"
    },
    {
        "id": 1770346656538,
        "employeeId": 2,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 9,
        "label": "New Session"
    },
    {
        "id": 1770346657346,
        "employeeId": 2,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 10,
        "label": "New Session"
    },
    {
        "id": 1770346658041,
        "employeeId": 2,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 11,
        "label": "New Session"
    },
    {
        "id": 1770346659198,
        "employeeId": 2,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 13,
        "label": "New Session"
    },
    {
        "id": 1770346659829,
        "employeeId": 2,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 14,
        "label": "New Session"
    },
    {
        "id": 1770346660371,
        "employeeId": 2,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 15,
        "label": "New Session"
    },
    {
        "id": 1770346660987,
        "employeeId": 2,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 16,
        "label": "New Session"
    },
    {
        "id": 1770346662366,
        "employeeId": 2,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 8,
        "label": "New Session"
    },
    {
        "id": 1770346662858,
        "employeeId": 2,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 9,
        "label": "New Session"
    },
    {
        "id": 1770346663508,
        "employeeId": 2,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 10,
        "label": "New Session"
    },
    {
        "id": 1770346664138,
        "employeeId": 2,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 11,
        "label": "New Session"
    },
    {
        "id": 1770346665084,
        "employeeId": 2,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 13,
        "label": "New Session"
    },
    {
        "id": 1770346665729,
        "employeeId": 2,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 14,
        "label": "New Session"
    },
    {
        "id": 1770346666542,
        "employeeId": 2,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 15,
        "label": "New Session"
    },
    {
        "id": 1770346667154,
        "employeeId": 2,
        "day": "2026-02-04T03:00:00.000Z",
        "hour": 16,
        "label": "New Session"
    },
    {
        "id": 1770346668757,
        "employeeId": 2,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 8,
        "label": "New Session"
    },
    {
        "id": 1770346669767,
        "employeeId": 2,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 9,
        "label": "New Session"
    },
    {
        "id": 1770346670387,
        "employeeId": 2,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 10,
        "label": "New Session"
    },
    {
        "id": 1770346670996,
        "employeeId": 2,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 11,
        "label": "New Session"
    },
    {
        "id": 1770346671965,
        "employeeId": 2,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 13,
        "label": "New Session"
    },
    {
        "id": 1770346672517,
        "employeeId": 2,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 14,
        "label": "New Session"
    },
    {
        "id": 1770346673154,
        "employeeId": 2,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 15,
        "label": "New Session"
    },
    {
        "id": 1770346673659,
        "employeeId": 2,
        "day": "2026-02-05T03:00:00.000Z",
        "hour": 16,
        "label": "New Session"
    },
    {
        "id": 1770346675352,
        "employeeId": 2,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 8,
        "label": "New Session"
    },
    {
        "id": 1770346675858,
        "employeeId": 2,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 9,
        "label": "New Session"
    },
    {
        "id": 1770346676508,
        "employeeId": 2,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 10,
        "label": "New Session"
    },
    {
        "id": 1770346677125,
        "employeeId": 2,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 11,
        "label": "New Session"
    },
    {
        "id": 1770346678052,
        "employeeId": 2,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 13,
        "label": "New Session"
    },
    {
        "id": 1770346678634,
        "employeeId": 2,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 14,
        "label": "New Session"
    },
    {
        "id": 1770346679129,
        "employeeId": 2,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 15,
        "label": "New Session"
    },
    {
        "id": 1770346679608,
        "employeeId": 2,
        "day": "2026-02-06T03:00:00.000Z",
        "hour": 16,
        "label": "New Session"
    },
    {
        "id": 1770347069589,
        "employeeId": 1770347061725,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 23,
        "label": "New Session"
    },
    {
        "id": 1770347070178,
        "employeeId": 1770347061725,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 22,
        "label": "New Session"
    },
    {
        "id": 1770347071223,
        "employeeId": 1770347061725,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 21,
        "label": "New Session"
    },
    {
        "id": 1770347071802,
        "employeeId": 1770347061725,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 20,
        "label": "New Session"
    },
    {
        "id": 1770347072791,
        "employeeId": 1770347061725,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 18,
        "label": "New Session"
    },
    {
        "id": 1770347073581,
        "employeeId": 1770347061725,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 17,
        "label": "New Session"
    },
    {
        "id": 1770347074289,
        "employeeId": 1770347061725,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 16,
        "label": "New Session"
    },
    {
        "id": 1770347074991,
        "employeeId": 1770347061725,
        "day": "2026-02-01T03:00:00.000Z",
        "hour": 15,
        "label": "New Session"
    }
];
