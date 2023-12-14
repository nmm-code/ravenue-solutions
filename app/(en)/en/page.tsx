import { Language } from '@/types/Language';
import Main from '@/components/Main';

export default function Home() {
   return (
      <>
         <Main lang={Language.EN} />
      </>
   );
}
