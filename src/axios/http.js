import axios from 'axios'

let http = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
})