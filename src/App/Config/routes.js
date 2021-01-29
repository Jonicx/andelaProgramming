import { include } from 'named-urls';

const RoutesName = {
   home: "/",

   pages: include('/pages', {
      contact: 'contact-us',
      blog: 'blog'
   }),
};

export default RoutesName;