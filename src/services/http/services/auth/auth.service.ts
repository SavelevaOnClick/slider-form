import { urls } from '@constants';
import {httpPost} from '@services';
import {ILoginRequest, ILoginResponse} from './types';

export class AuthService {
  public async signIn(data: ILoginRequest): Promise<ILoginResponse> {
    return await httpPost(`${urls.login}`, data);
  }
}
