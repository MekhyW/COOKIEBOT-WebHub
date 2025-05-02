"use client";

import { motion } from "framer-motion";

export function SectionOne() {
    return <>
        <motion.div
            className="absolute w-full h-full -left-2/4 -top-2/4"
            style={{
                backgroundImage: 'radial-gradient(rgba(var(--primary), 0.40) 0%, rgba(255, 255, 255, 0.00) 70%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }} // ajuste o delay conforme necessário
        />
        <motion.div
            className="absolute w-full h-full -right-2/4 -bottom-2/4"
            style={{
                backgroundImage: 'radial-gradient(rgba(var(--secondary), 0.40) 0%, rgba(255, 255, 255, 0.00) 70%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }} // ajuste o delay conforme necessário
        />
    </>
}