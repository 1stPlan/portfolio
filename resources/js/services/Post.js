
var baseUrl =  import.meta.env.VITE_API_URL;

import axios from "axios";
const post = {};

post.list = async () => {
    const urlList = baseUrl + "/role";
    const res = await axios
        .get(urlList)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
    return res;
};

post.category = async () => {
    const urlList = baseUrl + "/category";
    const res = await axios
        .get(urlList)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
    return res;
};

post.save = async data => {
    const urlSave = baseUrl + "/create";
    const res = await axios
        .post(urlSave, data)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
    return res;
};

post.listEmployee = async () => {
    const urlList = baseUrl + "/list";
    const res = await axios
        .get(urlList)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
       

    return res;
};

post.get = async id => {
    const urlGet = baseUrl + "/get/" + id;
    const res = await axios
        .get(urlGet)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
    return res;
};

// post.update = async data => {
//     const urlUpdate = baseUrl + "/update/" + data.id;
//     const res = await axios
//         .put(urlUpdate, data)
//         .then(response => {
//             return response.data;
//         })
//         .catch(error => {
//             return error;
//         });
//     return res;
// };

post.delete = async id => {
    const urlDelete = baseUrl + "/delete/" + id;
    const res = await axios
        .delete(urlDelete)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
    return res;
};

export default post;