import {object,string} from 'yup'


const loginVal = object(
    {
        email:string().required().min(3),
        password:string().required().min(3)
    }
)


export default loginVal