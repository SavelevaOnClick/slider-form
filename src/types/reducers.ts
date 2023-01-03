export enum EDataLoadingStatus {
	 IDLE = 'idle',
	 LOADING = 'loading',
	 FULFILLED = 'fulfilled',
	 REJECTED = 'rejected',
}

export type TGlobalState = {
	global: {
	  token: string;
	  firstOpenApp: boolean;
	  language: string;
	},
	additional: {
	  loading: boolean;
	  currentRouteName: string;
	}
}