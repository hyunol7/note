import axios from 'axios';

const API_SERVER_HOST = "http://localhost";
const prefix = `${API_SERVER_HOST}/note`;

const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getOne = async (nno, token) => {
    const response = await axios.get(`${prefix}/${nno}`, {
        headers: getAuthHeader(token)
    });
    return response.data;
}

export const getList = async (page = 1, size = 10) => {
    const response = await axios.get(`${prefix}/list`,{
        headers: getAuthHeader(),
        params:{page, size}
    });
    return response.data;
}

//등록
export const postAdd = async (noteObj) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${prefix}/`, noteObj, {
        headers: getAuthHeader(token)
    });
    return response.data;
}

//수정
export const putOne = async (note, token) => {
    const response = await axios.put(`${prefix}/${note.nno}`, note, {
        headers: getAuthHeader(token)
    });
    return response.data;
}

//삭제
export const deleteOne = async (nno) => {
    const res = await axios.delete(`${prefix}/${nno}`);
    return res.data;
}
