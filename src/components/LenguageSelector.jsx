import '../Styles//LanguageSelector.css';

function LanguageSelector({options}) {
    
  return (
    <select className="language-selector">
        {options.map((language, index) =>{
             return <option key={index} value={language} > {language} </option>
        })}

    </select>
  );
}

export default LanguageSelector;
