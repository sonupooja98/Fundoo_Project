// import Login from "../Pages/login/Login";
import AxiosSerives from "./AxiosService";

const baseurl='http://fundoonotes.incubation.bridgelabz.com/api/'



const axiosService = new AxiosSerives();

class UserService{
    Registeration(data){
        axiosService.postMethod(
        `${baseurl}user/userSignUp`,data);

    }

 Login(data){
    axiosService.postMethod(
        `${baseurl}user/login`,data);
 }

 Reseta(data){
    axiosService.postMethod(
        `${baseurl}user/reset-password`,data);
 
 }
 Forgot(data){
    axiosService.postMethod(
        `${baseurl}user/reset`,data);
 }

}
 



export default UserService