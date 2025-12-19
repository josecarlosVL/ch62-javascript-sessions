/**
 * Módulo para manejar formularios
 * @returns {object} objeto con lo inputs del formulario
 */
const formHandler = ( formReference ) => {
/*     const tasktitle = document.getElementById("task-title").value; // Para checkboxes usar .checked 
    const assignedTo = document.getElementById("assignedTo").value;;
    return {
        tasktitle: tasktitle,
        assignedTo: assignedTo
    } */

        const formData = new FormData(formReference);
        const data = Object.fromEntries(formData.entries() );
        return data;
}
export { formHandler }; // exportación nombrada