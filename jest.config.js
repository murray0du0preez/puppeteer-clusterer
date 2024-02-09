/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    setupFilesAfterEnv: ['./test/_config/setup.js'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["**/test/**/?(*.)+(spec|test).[jt]s?(x)"],
};
