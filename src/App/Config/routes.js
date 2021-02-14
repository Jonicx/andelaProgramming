import { include } from 'named-urls';

const RoutesName = {
   home: "/Home",

   pages: include('/pages', {
      contact: 'Hanga-and-contact-with-us-today ',
      blog: 'John-Doe`s-blog'
   }),
};

export default RoutesName;