import { userRoles } from "../user";

export function redirectAfterLogin(role) {
  switch (role) {
    case userRoles.ADMIN:
      return "/admin";
    case userRoles.MANUFACTURER:
      return "/manufacturer";
    case userRoles.CUSTOMER:
      return "/";
    default:
      return "/";
  }
}
