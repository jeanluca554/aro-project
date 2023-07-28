export interface FilteredUser {
  id: string;
  name: string;
  email: string;
}

export interface UserResponse {
  data: {
    user: FilteredUser;
  };
}
