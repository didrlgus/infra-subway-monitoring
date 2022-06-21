import executor from '../../executor/index.js';

const targetMethod = 'get';
const targetPath = '/path';
const checkBy = {'response ok': (res) => res.status === 200}

export const options = {
    vus: 1, // 1 user looping for 1 minute
    duration: '1m',

    thresholds: {
        http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
    },

};

export default function() {
    executor(targetMethod, targetPath, checkBy);
}