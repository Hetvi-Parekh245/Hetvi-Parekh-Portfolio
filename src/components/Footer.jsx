import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
    <footer className="py-3 px-3 bg-card relative border-t border-border mt-15 pt-3 flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} HetviParekh. All rights reserved. </p>
    
    <a 
    href="#hero"
    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
    >
        <ArrowUp size={20} />
    </a>
    </footer>
    )
}