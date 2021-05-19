import axios from 'axios';
const url='http://localhost:8081';

class EcommService
{
    getProduct()
    {
        return axios.get(`${url}/product`);
    }
    getSpProduct()
    {
        return axios.get(`${url}/sp`);
    }
    getProductDetails(id)
    {
        return axios.get(`${url}/product/${id}`);
    }
    getAccountInfo()
    {
        return axios.get(`${url}/account`);
    }
    getAccountDetails(email)
    {
        return axios.get(`${url}/user/${email}`);
    }
    // updateAccountDetails(email)
    // {
    //     return axios.put(`${url}/user/${email}`);
    // }
    
}
export default new EcommService();
