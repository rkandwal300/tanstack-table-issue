import { LocationSearch } from '../LocationSearch';
import { ProductSearch } from '../ProductSearch';

import Logo from '../logo';

export default function NavbarMarketplace() {
  return (
    <div className="flex h-16 items-center gap-16 border-b px-4">
      <Logo />
      <div className="ml-auto flex items-center gap-2">
        <LocationSearch />
        <ProductSearch />
      </div>
    </div>
  );
}
