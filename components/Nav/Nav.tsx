'use client';
import { Language } from '@/types/Language';
import styles from './Nav.module.scss';
import Image from 'next/image';
import logo from '@/assets/nav/logo.svg';
import { RawNav } from './RawHTML/RawNav';
import { NavMobile } from './Mobile/NavMobile';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

/**
 * Navigations Komponente
 *
 * @param lang: die sprache die ausgeben soll
 * @param active: die aktive seite
 */
export function Nav() {
   const currentPage = usePathname();
   let active = 0;
   let lang = !currentPage.startsWith('/en') ? Language.DE : Language.EN;
   if (lang == Language.DE)
      switch (currentPage) {
         case '/':
            active = 0;
            break;
         case '/dienstleistungen':
            active = 1;
            break;
         case '/complead':
            active = 2;
            break;
         case '/ueberuns':
            active = 3;
            break;
         case '/kontakt':
            active = 4;
            break;
      }
   else
      switch (currentPage) {
         case '/en':
            active = 0;
            break;
         case '/en/services':
            active = 1;
            break;
         case '/en/complead':
            active = 2;
            break;
         case '/en/aboutus':
            active = 3;
            break;
         case '/en/contact':
            active = 4;
            break;
      }

   return (
      <header className={styles.header}>
         <div className={styles.outerNav}>
            <div className={styles.nav}>
               <Link href={'/'}>
                  <Image src={logo} height='50' alt='logo' priority={true} />
               </Link>

               <div className={styles.desktop}>
                  <RawNav lang={lang} />
               </div>
            </div>
         </div>
         <NavMobile lang={lang}  />
      </header>
   );
}
