import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
   return {
      name: 'Ravenue Solutions',
      short_name: 'Ravenue',
      description:
         'Ravenue Solutions is a software development company that specializes in building web and mobile applications.',
      start_url: '/',
      display: 'standalone',
      background_color: '#000',
      theme_color: '#000',
      icons: [
         {
            src: './favicon.ico',
            sizes: '256x256',
            type: 'image/x-icon',
         },
         {
            src: './icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
         },
         {
            src: './icon.png',
            sizes: '512x512',
            type: 'image/png',
         },
      ],
   };
}
