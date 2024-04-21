import { getCurrentUser } from "./authLogin"

const authHeader = ()=>{
    const user = getCurrentUser();
    if (user && user.accessToken) {
        // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
        return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
      } else {
        return {};
      }
}