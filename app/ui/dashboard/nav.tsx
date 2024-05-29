import NavLinks from '@/app/ui/dashboard/nav-links';

export default function Nav() {
    return (
        <div className="flex  px-3 py-4 md:px-2">
            <div className="flex grow   space-x-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
            </div>
        </div>
    );
}
