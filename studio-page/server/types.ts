export interface SecretFlatfileItem {
	firm: string;
}

export interface SecretFlatfile {
	[key: string]: SecretFlatfileItem;
}

export type SecretMap = Map<string, SecretFlatfileItem>;

export type LoginResponse = { valid: boolean; data: SecretFlatfileItem | null };
