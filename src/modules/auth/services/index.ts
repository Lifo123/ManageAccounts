import { login, logOut } from "./login";
import { register } from "./register";
import { validateToken } from "./validate";

export const auth = {
    login, register, validateToken, logOut
}

