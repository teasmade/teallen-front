'use client';

import { Link, usePathname } from '../navigation';

export default function LocaleSwitch() {
  const pathname = usePathname();
  return (
    <div>
      <Link
        className="mx-2"
        locale="en"
        href={pathname}
      >
        en
      </Link>
      <Link
        className="mx-2"
        locale="fr"
        href={pathname}
      >
        fr
      </Link>
    </div>
  );
}
