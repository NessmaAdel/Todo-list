import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import './LanguageSwitcher.scss';
import { setLanguage } from '../../Store/actions';
import i18next from '../../i18next/i18next';
import { directionSwapper } from '../../directionSwapper';

const switchLanguagesHandler = (old, choosen, action) => (e) => {
  if (old.language_code === choosen.language_code) return;
  const { language_code } = choosen;
  window.localStorage.setItem('lang', language_code);
  i18next.changeLanguage(language_code);
  moment.locale(language_code);
  action(choosen);
  window.location.reload();
};
const languages = [{
  "id": 1,
  "isDefault": false,
  "isDeleted": false,
  "language_code": "ar",
  "language_name": "العربية",
  "ltr": false
}, {
  "id": 2,
  "isDefault": true,
  "isDeleted": false,
  "language_code": "en",
  "language_name": "English",
  "ltr": true
}];
const LanguageSwitcher = (props) => {
  const { setLanguageAction } = props;
  const langs = window.localStorage.getItem('lang')
  const languageTitle = languages && languages.find(e => langs === e.language_code && e.language_code)
  const ltr = languages && languages.find(e => langs === e.ltr && e.ltr);
  const languageName = languageTitle && languageTitle.language_name;
  return (
    <section position={directionSwapper('right', ltr)} className={`language-switcher ${!ltr && 'switcher-rtl'}`}>
      <div className="btn-group dropdown">
        <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" id="dropdownMenu2" type="button">
          {languageName}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {languages && languages.map((eachLanguage) => {
            const { language_name, id } = eachLanguage;
            return (
              <Link
                className="dropdown-item"
                key={id}
                onClick={switchLanguagesHandler(languageTitle, eachLanguage, setLanguageAction)}
              >
                {language_name}
              </Link>
            );
          })
          }
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  languages: state.languages,
});

const mapDispatchToProps = dispatch => ({
  setLanguageAction: lang => dispatch(setLanguage(lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);