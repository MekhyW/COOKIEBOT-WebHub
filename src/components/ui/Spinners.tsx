export default function Spinner({ className = "border-primary border-b-transparent" }: { className?: string }) {
    return <span className={` rounded-full border-4 animate-spin min-h-7 min-w-7 max-w-7 max-h-7 ${className}`} />
}

export function InnerSpinner({ className = "border-foreground border-b-transparent" }: { className?: string }) {
    return <span className={`rounded-full border-2 border-primary border-l-transparent animate-spin min-h-4 min-w-4 max-w-4 max-h-4 ${className}`} />
}