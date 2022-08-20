import {object,string} from 'yup'
import * as Yup from 'yup';

const loginVal = object(
    {
        Username:string().required().matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
        Name:string().required("Mutleq"),
        Surname:string().required(),
        Email: Yup.string().email('Invalid email').required('Required'),
        PhoneNumber:string().required(),
        Password:string().required()
    }
)


export default loginVal