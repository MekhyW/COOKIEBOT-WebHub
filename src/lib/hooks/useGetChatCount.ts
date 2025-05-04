'use client';

import { useQuery } from '@tanstack/react-query';

interface ChatCountResponse {
    number_chats: number;
    status: string;
}

export function useGetChatCount() {
    return useQuery<ChatCountResponse>({
        queryKey: ['chatCount'],
        queryFn: async () => {
            const response = await fetch('/api/botserver', {
                headers: {
                    'Accept': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
        refetchInterval: 300000, // Refetch every 5 minutes
    });
}