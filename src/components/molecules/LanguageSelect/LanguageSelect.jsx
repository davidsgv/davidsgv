import css from './LanguageSelect.module.css'

/**
 * Componente LanguageSelect renderiza un interruptor para seleccionar entre español e inglés.
 * 
 * @param {object} props - Props del componente.
 * @param {function} props.onChange - Callback que se ejecuta cuando cambia el interruptor. La función recibe el evento de cambio como argumento.
 */
export default function LanguageSelect(props) {
    const { onChange } = props;

    return (
        <div className={css.switch}>
            <input id="language-toggle" className={css.checkToggle + " " + css.checkToggleRoundFlat} type="checkbox" onChange={onChange} hidden />
            <label htmlFor="language-toggle"></label>
            <span className={css.on}>ES</span>
            <span className={css.off}>EN</span>
        </div>
    )
}