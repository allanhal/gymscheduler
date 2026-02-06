import { subDays, addDays } from 'date-fns';

export const EMPLOYEES = [
    { id: 1, name: 'John Doe', color: '#6366f1', textColor: 'white' }, // Indigo
    { id: 2, name: 'Jane Smith', color: '#10b981', textColor: 'white' }, // Emerald
    { id: 3, name: 'Mike Ross', color: '#f59e0b', textColor: 'white' }, // Amber
    { id: 4, name: 'Sarah Connor', color: '#ef4444', textColor: 'white' }, // Red
    { id: 5, name: 'David Miller', color: '#8b5cf6', textColor: 'white' }, // Violet
    { id: 6, name: 'David Johnson', color: '#2961a5', textColor: 'white' },
    { id: 7, name: 'David Wilson', color: '#ecebde', textColor: 'black' },
];

let id = 100;
export const INITIAL_EVENTS = [
    { id: id++, employeeId: 1, day: new Date(), hour: 22, label: 'Weight Training' },
    { id: id++, employeeId: 2, day: new Date(), hour: 22, label: 'Yoga Session 1' },
    { id: id++, employeeId: 3, day: new Date(), hour: 22, label: 'Yoga Session 2' },
    { id: id++, employeeId: 4, day: new Date(), hour: 22, label: 'Yoga Session 3' },
    { id: id++, employeeId: 3, day: new Date(), hour: 23, label: 'Cardio Blast' },
    { id: id++, employeeId: 3, day: subDays(new Date(), 1), hour: 23, label: 'Cardio Blast' },
    { id: id++, employeeId: 3, day: subDays(new Date(), 1), hour: 23, label: 'Cardio Blast' },
    { id: id++, employeeId: 3, day: subDays(new Date(), 1), hour: 23, label: 'Cardio Blast' },
    { id: id++, employeeId: 3, day: subDays(new Date(), 1), hour: 23, label: 'Cardio Blast' },
    { id: id++, employeeId: 5, day: subDays(new Date(), 2), hour: 22, label: 'Cardio Blast' },
    { id: id++, employeeId: 5, day: subDays(new Date(), 2), hour: 22, label: 'Cardio Blast' },
    { id: id++, employeeId: 5, day: subDays(new Date(), 2), hour: 22, label: 'Cardio Blast' },
    { id: id++, employeeId: 1, day: subDays(new Date(), 2), hour: 22, label: 'Cardio Blast' },
    { id: id++, employeeId: 1, day: subDays(new Date(), 3), hour: 18, label: 'Spinning 1' },
    { id: id++, employeeId: 7, day: subDays(new Date(), 3), hour: 18, label: 'Spinning 2' },
    { id: id++, employeeId: 6, day: subDays(new Date(), 3), hour: 18, label: 'Spinning 3' },
    { id: id++, employeeId: 7, day: subDays(new Date(), 3), hour: 18, label: 'Spinning 4' },
    { id: id++, employeeId: 6, day: subDays(new Date(), 4), hour: 19, label: 'Walking 1' },
    { id: id++, employeeId: 6, day: subDays(new Date(), 4), hour: 19, label: 'Walking 2' },
    { id: id++, employeeId: 7, day: subDays(new Date(), 4), hour: 19, label: 'Walking 3' },
    { id: id++, employeeId: 6, day: subDays(new Date(), 4), hour: 19, label: 'Walking 4' },
    { id: id++, employeeId: 7, day: addDays(new Date(), 1), hour: 19, label: 'Weight 1' },
    { id: id++, employeeId: 1, day: addDays(new Date(), 1), hour: 19, label: 'Weight 2' },
    { id: id++, employeeId: 3, day: addDays(new Date(), 1), hour: 19, label: 'Weight 3' },
    { id: id++, employeeId: 1, day: addDays(new Date(), 1), hour: 19, label: 'Weight 4' },
    { id: id++, employeeId: 1, day: addDays(new Date(), 1), hour: 20, label: 'Weight 5' },
    { id: id++, employeeId: 2, day: addDays(new Date(), 2), hour: 20, label: 'Running 1' },
    { id: id++, employeeId: 3, day: addDays(new Date(), 2), hour: 20, label: 'Running 2' },
    { id: id++, employeeId: 2, day: addDays(new Date(), 2), hour: 20, label: 'Running 3' },
    { id: id++, employeeId: 3, day: addDays(new Date(), 2), hour: 20, label: 'Running 4' },

];
