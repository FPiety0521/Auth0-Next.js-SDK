import { InitAuth0 } from './instance';
import { GetAccessToken, GetSession } from './session';
import { WithApiAuthRequired, WithSSRAuthRequired } from './helpers';
import { HandleAuth, HandleCallback, HandleLogin, HandleLogout, HandleProfile } from './handlers';
export { UserProvider, UserProfile, UserContext, useUser, withCSRAuthRequired } from './frontend';

export const initAuth0: InitAuth0 = () => {
  throw new Error('The initAuth0 method can only be used from the server side');
};
export const getSession: GetSession = () => {
  throw new Error('The getSession method can only be used from the server side');
};
export const getAccessToken: GetAccessToken = () => {
  throw new Error('The getAccessToken method can only be used from the server side');
};
export const withApiAuthRequired: WithApiAuthRequired = () => {
  throw new Error('The withApiAuthRequired method can only be used from the server side');
};
export const withSSRAuthRequired: WithSSRAuthRequired = () => {
  throw new Error('The withSSRAuthRequired method can only be used from the server side');
};
export const handleLogin: HandleLogin = () => {
  throw new Error('The handleLogin method can only be used from the server side');
};
export const handleLogout: HandleLogout = () => {
  throw new Error('The handleLogout method can only be used from the server side');
};
export const handleCallback: HandleCallback = () => {
  throw new Error('The handleCallback method can only be used from the server side');
};
export const handleProfile: HandleProfile = () => {
  throw new Error('The handleProfile method can only be used from the server side');
};
export const handleAuth: HandleAuth = () => {
  throw new Error('The handleAuth method can only be used from the server side');
};
