"use client";

import { userClient } from "@/lib/definitions";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";
import TelegramLoginButton from "@/components/ui/TelegramLoginButton"

export default function UserMenu({ type = "only-icon" }: { type?: "only-icon" | "secondary" }) {
    const t = useTranslations("Common.auth");
    const pathname = usePathname();
    const [user, userState] = useState<userClient | null>(null);

    if (pathname === "/dashboard") return null;
    if (pathname === "/dashboard/general") return null;
    if (pathname === "/dashboard/moderation") return null;
    if (pathname === "/dashboard/posts") return null;
    if (pathname === "/dashboard/events") return null;

    return (
        <>
            {user ? null : (
                <TelegramLoginButton/>
            )}
        </>
    );
}
