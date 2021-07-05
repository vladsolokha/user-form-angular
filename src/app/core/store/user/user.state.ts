
export interface UserState {
  data: User[];
}

export interface User {
  id: string;
  name: string;
  updated: string;
}

export const initialUserState: UserState = {
  data: []
};
