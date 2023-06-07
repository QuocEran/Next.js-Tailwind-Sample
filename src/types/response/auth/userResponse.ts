export default class UserResponse {
  constructor(
    public id: string = "",
    public status: string = "",
    public email: string = "",
    public full_name: string = "",
    public phone: string = "",
    public gender: string = "",
    public avatarUrl: string = "",
    public role_id: string = "",
  ) {}
}
