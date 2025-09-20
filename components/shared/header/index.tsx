import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import logo from '@/public/images/logo.svg';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper space-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src={logo}
              alt={`${APP_NAME} logo`}
              width={48}
              height={48}
              priority={true}
            />
          </Link>
          <span className="hidden lg:block text-2xl text-bold ml-3">
            {APP_NAME}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
