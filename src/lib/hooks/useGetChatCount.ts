import { useQuery } from '@tanstack/react-query';
import { botApi } from '../api/axios';
import { isDevMode } from '../auth/token';

interface ChatCountResponse {
    number_chats: number;
}

export function useGetChatCount() {
    return useQuery<ChatCountResponse>({
        queryKey: ['chatCount'],
        queryFn: async () => {
            if (isDevMode()) {
                return { number_chats: 42 }; // Mock data for development
            }
            try {
                const response = await botApi.get('/');
                if (!response.data) {
                    throw new Error('No data received');
                }
                return response.data;
            } catch (error) {
                console.error('Failed to fetch chat count:', error);
                throw error;
            }
        },
        retry: 3, // Retry failed requests 3 times
        staleTime: 300000, // Consider data fresh for 5 minutes
        refetchOnWindowFocus: false // Don't refetch when window regains focus
    });
};