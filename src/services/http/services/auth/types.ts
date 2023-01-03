import {IFormatResponse} from '@types';

export interface ILoginRequest {
    phoneNumber: string;
    password: number;
}

export interface ILoginResponse extends IFormatResponse {
  data: {
   
  };
}
