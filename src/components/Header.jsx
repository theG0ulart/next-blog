import { AlignJustify } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
    return(
        <header className='flex justify-between p-2 h-16 bg-green-400 items-center'>
            <h3 className='text-2xl'>Next Blog</h3>
            <Button variant="standard" size="icon">
                <AlignJustify className='w-10 h-8'/>
            </Button>
        </header>
    )
}