import { SECRETS } from 'server/secrets';
import { validatePassword } from './password-utils';
import { SecretFlatfileItem, SecretMap } from './types';
import crypto from 'crypto';

const validateFn = validatePassword;

var UNHASHED_SECRETS = [
	'ivcrypto',
	'bitkraft',
	'transcendfund',
	'a16z',
	'variantfund',
	'solana',
	'animoca',
	'woodstockfund',
	'panteracapital',
	'paradigm',
	'playventures',
	'genblock',
	'blockchaincapital',
	'mgvc',
	'coin98',
	'csquared',
	'lotuscapital',
	'mechanismcapital',
	'fractal',
	'tc-team',
	'Cryptobots',
	'gbv',
	'meritcircle',
	'ali',
	'shimacapital',
	'ldcapital',
	'gbic',
	'kryptos',
	'cipholio',
	'masterventures',
	'au21',
	'cassiusvc',
	'unusualvc',
	'game7',
	'gamesfund',
	'binancelabs',
	'galaxyinteractive',
	'hirocapital',
	'vgames',
	'konvoy',
	'marchgaming',
	'gameseer',
	'duneventures',
	'griffingaming',
	'makersfund',
	'joshuahong',
	'9yards',
	'caleb',
	'1upfund',
	'pouya',
	'solidity',
	'morningstar',
	'pnyx',
	'fintech',
	'cmsholdings',
	'polychain',
	'advancedblockchain',
	'sparkcapm',
	'hypersphere',
	'lemniscap',
	'electriccapital',
	'dfg',
	'x21digital',
	'coinfund',
	'skyvisioncapital',
	'ngcventures',
	'delphidigital',
	'multicoin',
	'okx',
	'alliance',
	'hashkey',
	'digitalcurrency',
	'parafi',
	'jumpcap',
	'galaxydigital',
	'sfermion',
	'rarestone',
	'arringtoncapital',
	'fenbushi',
	'exnetworkcapital',
	'libertycityventures',
	'kosmos',
	'alphabit',
	'10t',
	'zmtcapital',
	'peech',
	'draperdragon',
	'coinshares',
	'evg',
	'acrewcapital',
	'rokcapital',
	'foresightventures',
	'g1',
	'rubycap',
	'smocapital',
	'stake',
	'icetea',
	'mesh',
	'a41ventues',
	'idgcapital',
	'antifund',
	'foundationcap',
	'jsquare',
	'autonomy',
	'bigcoin',
	'insignius',
	'soulcapital',
	'avalabs',
	'krust',
	'polymorphic',
	'matrixport',
	'smrtilab',
	'tenzor',
	'mondaycapital',
	'crypto',
	'gam3r',
	'danygg',
	'london',
	'breakpoint',
];

describe('secrets.json flatfile', () => {
	beforeAll(async () => {
		//wait for flatfile to load
		await new Promise((resolve) => setTimeout(resolve, 500));
	});

	it('should have a valid flatfile format', () => {
		for (const [key, value] of SECRETS.entries()) {
			expect(key).toBeDefined();
			expect(value).toBeDefined();
			expect(value.firm).toBeDefined();
			expect(value.firm).not.toEqual('');
			expect(typeof value.firm === 'string').toBeTruthy();
		}
	});

	it('should have equal number of secrets and unhashed secrets', () => {
		expect(SECRETS.size).toEqual(UNHASHED_SECRETS.length);
	});
});

describe('validatePassword function', () => {
	beforeAll(async () => {
		//wait for flatfile to load
		await new Promise((resolve) => setTimeout(resolve, 500));
	});

	it('should properly validate passwords', () => {
		UNHASHED_SECRETS.forEach((secret) => {
			expect(validateFn(SECRETS, secret)).not.toBe(undefined);
		});
	});

	it('should not successfully validate invalid password', () => {
		expect(validateFn(SECRETS, 'ivcrypto1')).toBe(undefined);
		expect(validateFn(SECRETS, 'tc-team1')).toBe(undefined);
		expect(validateFn(SECRETS, 'fractal-1')).toBe(undefined);
	});

	it('should not successfully validate hashed password', () => {
		for (const [key, _] of SECRETS.entries()) {
			expect(validateFn(SECRETS, key)).toBe(undefined);
		}
	});
});
