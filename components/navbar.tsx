const Navbar=() => {
    return(
        <nav>
        <select id="occupationFilter">
            <option value="">Seleccionar Ocupación</option>
            <option value="Desarrollador Web">Desarrollador Web</option>
            <option value="Diseñadora Gráfica">Diseñadora Gráfica</option>
            <option value="Make up">Make up</option>
            <option value="Docente">Docente</option>
            <option value="Financiera">Financiera</option>
            <option value="Carpintero">Carpintero</option>
            <option value="Transporte">Transporte</option>
        </select>
    </nav>
    );
}
export default Navbar;