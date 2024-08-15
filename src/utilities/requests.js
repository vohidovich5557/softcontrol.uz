import { data } from 'autoprefixer'
import {request} from './../hooks/request'
import { useMutation, useQuery } from '@tanstack/react-query'


export const useGetHomeData = () => {
    return useQuery({
        queryKey: ['get-data', id],
        queryFn: () => request.get(`/home`).then(res => res.data),
    })
}

export const useGetTeamData = () => {
    return useQuery({
        queryKey: ['get-data', id],
        queryFn: () => request.get(`/team`).then(res => res.data),
    })
}

export const useGetServiceData = () => {
    return useQuery({
        queryKey: ['get-service'],
        queryFn: () => request.get(`/service`).then(res => res.data),
    })
}

export const useGetAdmins = () => {
    return useQuery({
        queryKey: ['get-admin'],
        queryFn: () => request.get(`/admins`).then(res => res.data),
    })
}

export const useGetMembers = () => {
    return useQuery({
        queryKey: ["get-member"],
        queryFn: () => request.get(`/members`).then(res => res.data),
    })
}


// this is section only for getting data and after this we will post and put the data we want

export const usePostHomeData = () => {
    return useMutation({
        mutationFn: () => request.post('/home').then(res => res.data),
    })
}

export const usePostTeamData = () => {
    return  useMutation({
        mutationFn: () => request.post('/team').then(res => res.data),
    })
}

export const usePostServiceData = () => {
    return useMutation({
        mutationFn: (data) => request.post('/service', data).then(res => res.data),
    })
}

export const usePostLogin = () => {
    return useMutation({
        mutationFn: (data) => request.post('/login', data).then((res) => res.data),
    })
}

export const usePostRegister = () => {
    return useMutation({
        mutationFn: (data) => request.post('/register', data).then((res) => res.data),
    })
}

export const usePostMember = () => {
    return useMutation({
        mutationFn: (data) => request.post('/members', data).then((res) => res.data),
    })
}

//  this section only for putting data and we can update everything we want

export const usePutHomeData = () => {
    return useMutation({
        mutationFn: (id) => request.put(`/home/${id}`).then((res) => res.data)
    })
}

export const usePutTeamData = () => {
    return useMutation({
        mutationFn: (id) => request.put(`/team${id}`).then((res) => res.data)
    })
}

export const usePutServiceData = () => {
    return useMutation({
        mutationFn: (id) => request.put(`/service/${id}`).then((res) => res.data)
    })
}

export const usePutMembers = (id) => {
    return useMutation({
        mutationFn: (data) => request.patch(`/members/${id}`, data).then((res) => res.data),
    })
}


//  this section for the getting admin logs

export const usePostAdmins = () => {
    return useMutation({
        mutationFn: (data) => request.post('/admins', data).then((res) => res.data),
    })
}

// this section for the deleting data

export const useDeletAdmin = () => {
    return useMutation({
        mutationFn: (id) => request.delete(`/admins/${id}`).then((res) => res.data),
    })
}

export const useDeletLogin = () => {
    return useMutation({
        mutationFn: (id) => request.delete(`/users/${id}`).then((res) => res.data),
    })
}

export const useDeletMembers = () => {
    return useMutation({
        mutationFn: (id) => request.delete(`/members/${id}`).then((res) => res.data),
    })
}



export const useGetLogins = () => {
    return useQuery({
        queryKey: ['get-login'],
        queryFn: () => request.get(`/users`).then(res => res.data),
    })
}

export const usePutAdmins = (id) => {
    return useMutation({
        mutationFn: (data) => request.patch(`/admins/${id}`, data).then((res) => res.data),
    })
}

