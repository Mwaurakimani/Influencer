import {authStore} from "../../Store/AuthStore";

export default async function confirmAuthentication(auth) {
    try {
        const loggedIn = await auth.testIfLoggedIn();
        console.log(loggedIn);

        if (loggedIn.data != 1){
            return false;
        } else {
            return true;
        }
    } catch (error) {
        // Handle any errors here
        console.error(error);
        return false;
    }
}
