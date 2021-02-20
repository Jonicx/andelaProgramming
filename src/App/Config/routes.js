import { include } from 'named-urls';

const RoutesName = {
   home: "/",

   pages: include('/pages', {
      contact: 'Hanga-and-contact-with-us-today ',
      blog: 'John-Does-blog'
   }),
};

export default RoutesName;