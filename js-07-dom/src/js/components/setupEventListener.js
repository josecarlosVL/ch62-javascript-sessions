import { formHandler } from "./form-handler";

const setupEventListener = () => {
    console.log("Event listener has been set up.")

    //Manejo del formulario
    //const taskForm = document.getElementById("task-form");
    const taskForm = document.querySelector("#task-form");

    taskForm.addEventListener("submit",(event) => {
        event.preventDefault();
        console.log("Form submitted!");
        const data = formHandler( taskForm);
        console.table(data);
        //Agregar en una nueva función
        localStorage.setItem("taskData", JSON.stringify(data)); //hay que usar JSON.parse y JSON.stringify

        taskForm.reset(); //Limpiar después de usarlo
    });
}

export{setupEventListener};