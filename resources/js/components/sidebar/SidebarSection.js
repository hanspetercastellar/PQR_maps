import React from "react";
import Formulario from "../form/Formulario";

 const SidebarSection = ({dataForm}) =>{

    return (
        <>
            <section className={'section-form-content'}>
                <Formulario dataForm={dataForm} />
            </section>
        </>
    )

}

export default SidebarSection
