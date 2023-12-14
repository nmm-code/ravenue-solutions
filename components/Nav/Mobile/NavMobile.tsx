'use client';

import styles from './NavMobile.module.scss';
import { useState } from 'react';
import { RawNav } from '../RawHTML/RawNav';
import { Language } from '@/types/Language';
import Menu from '@/assets/menu.svg';
import Cancel from '@/assets/cancel.svg';
import Image from 'next/image';

export function NavMobile({
   lang,
}: {
   lang: Language;
}) {
   const [dropDown, setDropDown] = useState(false);

   return (
      <>
         <div
            className={styles.dropDownButton}
            onClick={() => setDropDown((current) => !current)}
         >
            <Image
               src={dropDown ? Cancel : Menu}
               width={40}
               height={40}
               alt='menu'
            ></Image>
         </div>
         <div
            className={`${styles.stay} ${dropDown ? styles.animate : ''}`}
            onClick={() => setDropDown(false)}
         >
            <RawNav lang={lang} ></RawNav>
         </div>
      </>
   );
}
