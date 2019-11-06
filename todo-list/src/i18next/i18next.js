
import i18next from 'i18next';
import ar from './ar';
import en from './en';

const lng = localStorage.getItem('lang');


i18next
  .init({
    interpolation: {
      escapeValue: false,
    },
    lng,
    resources: {
      ar,
      en,
    },
  });

export default i18next;
