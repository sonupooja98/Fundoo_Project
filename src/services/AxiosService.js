import axios from 'axios';

class AxiosSerives{
       postMethod(url,data,headers){
              return axios.post(url,data,headers)
       }


}

export default AxiosSerives;