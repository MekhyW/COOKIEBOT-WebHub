import {backendApi} from "./axios.ts";
import {useQuery} from "@tanstack/react-query";


export type Group = {
    id: string
    imageUrl: string
    name: string
};

export const useGetUserGroups = () => {
    return useQuery({
        queryKey: ['user-groups'],
        queryFn: () => backendApi.get('/bff/my-groups'),
    })
};