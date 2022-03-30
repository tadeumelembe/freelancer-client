import { useState, createContext } from 'react';


export const UserContext = createContext({});

export const UserProvider = () => {
    const [userState, setUserState] = useState(
        {
            username:'',
            name:'',
            id:'',
            email:'',
            token: '',
            notificationToken: ''
        }
    )

    const userActions = (actions) =>{
        const { type, payload } = actions;

        switch (type) {
            case 'Login':
                return setUserState(payload);
            // case 'LogOut':
            //     return signOut();
            case 'RetrieveUser':
                return setUserState(payload);
            case 'setState':
                return setUserState(payload)
            default:
                return userState;
        }
    }

    return { userState, userActions }

}