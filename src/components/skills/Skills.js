import React from 'react'

const Skills = ({ skills }) => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div className="w-100">
                <h2 className="mb-5">Skills</h2>

                <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                        <i className="fab fa-html5"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-css3-alt"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-js-square"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-angular"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-react"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-node-js"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-sass"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-less"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-wordpress"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-gulp"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-grunt"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-npm"></i>
                    </li>
                </ul>

                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">

                    {
                        skills.map((skill, index) => {
                            return (
                                <li key={index}>
                                    <i className="fa-li fa fa-check"></i>
                                    {skill}

                                </li>
                            )
                        })

                    }


                </ul>
            </div>
        </section>
    )
}

export default Skills
