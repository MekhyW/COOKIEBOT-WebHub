'use client'
import { motion } from "framer-motion";
import Spinner, { InnerSpinner } from "../ui/Spinners";

export default function Splash() {
    return <>
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, visibility: "hidden" }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center flex-col z-50 gap-3 bg-background"
        >
            <motion.div className=" flex flex-col items-center justify-center"
                initial={{ scale: 1 }}
                animate={{ scale: 0.5 }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}>
                <span className=" h-20 text-foreground -translate-x-1 -translate-y-4">
                    <img className="h-10 w-10 rounded-md" src="/cookiebot_avatar.jpeg"></img>
                </span>

                <Spinner className="border-transparent border-b-foreground" />
            </motion.div>

        </motion.div>

    </>
}