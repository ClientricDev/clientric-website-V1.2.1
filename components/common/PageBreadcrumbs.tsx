import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const routeNameMap: { [key: string]: string } = {
  'about': 'About Us',
  'services': 'Services',
  'industries': 'Industries',
  'case-studies': 'Success Stories',
  'contact': 'Contact',
  'privacy': 'Privacy Policy'
};

export default function PageBreadcrumbs() {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment);

  if (pathSegments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-300" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/" className="hover:text-accent-yellow transition-colors" itemProp="item">
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const position = index + 2;

          return (
            <li 
              key={segment}
              className="flex items-center space-x-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <ChevronRightIcon className="h-4 w-4 text-gray-500" aria-hidden="true" />
              {isLast ? (
                <span className="text-accent-gold" itemProp="name">
                  {routeNameMap[segment] || segment}
                </span>
              ) : (
                <Link 
                  href={href}
                  className="hover:text-accent-yellow transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{routeNameMap[segment] || segment}</span>
                </Link>
              )}
              <meta itemProp="position" content={position.toString()} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}