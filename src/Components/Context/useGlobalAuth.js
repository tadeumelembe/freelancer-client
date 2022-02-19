import { useState} from 'react';



const useGlobalAuth = () => {
    const [authState, setAuthState] = useState(
        {
            username:'',
            email:'',
            isLogged:false,
            notificationToken
        }
    )

    const action = (actions) =>{
        const { type, payload } = actions;

        switch (type) {
            case 'Login':
                return storeUser(payload);
            case 'LogOut':
                return signOut();
            case 'RetrieveUser':
                return setAuthState(payload);
            case 'setState':
                return setAuthState(payload)
            default:
                return authState;
        }
    }

    return { authState, actions }

}

export default useGlobalAuth;