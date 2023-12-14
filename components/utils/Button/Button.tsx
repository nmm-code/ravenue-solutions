'use client';
import Link from 'next/link';
import styles from './Button.module.scss';
import { useRouter } from 'next/navigation';

interface ButtonProps {
   href: string;
   children: React.ReactNode;
   color?: boolean;
}

export function Button({ href, children, color }: ButtonProps) {
   const router = useRouter();
   return (
      <button
         className={`${styles.button} ${color ? styles.white : ''}`}
         onClick={(event) => {
            event.preventDefault();
            router.push(href);
         }}
      >
         {children}
      </button>
   );
}
