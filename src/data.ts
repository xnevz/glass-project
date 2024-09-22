
export interface Vital {
    value: number[];
    title: string;
    last: string;
    span: string;
    current: string;
    color: string;
    type: 'bars' | 'steps';
}


export const vitals: Vital[] = [
    {
        value: [7, 3, 1.2, 8, 1.9, 1, 6.6, 7.7, 4.4, 0],
        title: 'Blood pressure (bpm)',
        last: '7 mins ago',
        span: 'last 4 hours',
        current: '141/90',
        color: 'red',
        type: 'bars'
    },
    {
        value: [1, 3, 1.2, 8, 3.9, 1, 1.6, 0, 4.4, 10],
        title: 'Blood oxygen (spo2)',
        last: '7 mins ago',
        span: 'last 4 hours',
        current: '90/60',
        color: 'violet',
        type: 'bars'
    },
    {
        value: [7, 3, 1.2, 8, 9.9, 1, 6.6],
        title: 'Steps count',
        last: 'Today',
        span: 'last 4 days',
        current: '9,615',
        color: 'pink',
        type: 'steps'
    }
];

export const vitalsRange = Array.from({ length: 10 }, (_, i) => i);
export const daysRange = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
export const daysCoeff = 100 / 6.5;
