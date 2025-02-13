import axios from "axios";

const api = axios.create({
    baseURL:'https://675199d9d1983b9597b38e4a.mockapi.io/api'
})

export const fetchUsers= async() =>{
    const {data} = await api.get('/users');
    return data;
}

export const fetchEvents = async ()=>{
    const {data} = await api.get('/events');
    return data;
}


const weather = axios.create({
    baseURL:'http://api.weatherapi.com/v1/current.json'
})

export const fetchUsersFromGithub = async ({ pageParam }:{pageParam:number}) => {
    try {
      const res = await axios.get(
        `https://api.github.com/users?per_page=10&page=${pageParam}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

const apiJSON = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// to fetch the data
export const fetchPosts = async (pageNumber:number) => {
  try {
    const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

// to fetch the indv. data

export const fetchInvPost = async (id:string) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

// ..pagination
//! https://jsonplaceholder.typicode.com/posts?_start=1&_limit=3

/// to delete the post
export const deletePost = (id:string) => {
  return api.delete(`/posts/${id}`);
};

/// to update the post
export const updatePost = (id:string) => {
  return api.patch(`/posts/${id}`, { title: "I have updated" });
};

