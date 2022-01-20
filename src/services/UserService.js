// import Login from "../Pages/login/Login";
import AxiosSerives from "./AxiosService";

const baseurl='http://fundoonotes.incubation.bridgelabz.com/api/'



const axiosService = new AxiosSerives();

class UserService{
    Registeration(data){
      return  axiosService.postMethod(
        `${baseurl}user/userSignUp`,data);

    }

 Login(data){
   return axiosService.postMethod(
        `${baseurl}user/login`,data);
 }

 Reseta(data){
  return  axiosService.postMethod(
        `${baseurl}user/reset-password`,data);
 
 }
 Forgot(data){
  return  axiosService.postMethod(
        `${baseurl}user/reset`,data);
 }

}
 



export default UserService