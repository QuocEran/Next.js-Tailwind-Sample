interface ILoginResponse {
  access: string;
  refresh: string;
}

interface ISignUpResponse {
  data: {
    id: string;
    status: string;
    created_at: string;
    updated_at: string;
    deleted_at: null;
    phone: string;
    user_role: string;
    gender: string;
    full_name: string;
    email: string;
  };
  error: boolean;
  msg: null;
}

interface ICheckAccount {
  data: boolean;
  error: boolean;
}

export type { ISignUpResponse, ICheckAccount };

export default ILoginResponse;
