import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <div className="p-10 flex items-center flex-col gap-1">
            <p>Hello Dashboard</p>
            <Button size={'lg'} variant={'outline'}>
                Click me
            </Button>
        </div>
    );
}
