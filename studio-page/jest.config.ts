import type { Config } from 'jest';

const { name: displayName } = require('./package.json');

const esModules = ['uuid'].join('|');

const config: Config = {
	rootDir: '.',
	roots: ['<rootDir>'],
	testEnvironment: 'node',
	displayName,
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.json',
			diagnostics: true,
		},
	},
	moduleFileExtensions: ['ts', 'js'],
	modulePaths: ['<rootDir>'],
	moduleDirectories: ['node_modules', '<rootDir>'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	collectCoverage: false,
	transformIgnorePatterns: [
		`node_modules`,
		`node_modules/(?!${esModules})`,
		'/node_modules/(?!(uuid|xxx)/)',
	],
	verbose: true,
};

export default config;
