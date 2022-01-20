import axios from 'axios';


class AxiosSerives{
       postMethod(url,data,headers){
              return axios.post(url,data,headers)
       }
       getMethod(url,headers){
              return axios.get(url,headers)
       }

}

export default AxiosSerives;