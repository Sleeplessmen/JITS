import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <h1>About This Project</h1>
            <p>
                This CMS (Content Management System) allows admins to manage products through
                features like adding, editing, deleting, and searching. It is built using React
                for the frontend and Sails.js for the backend with MongoDB as the database.
            </p>
            <p>
                It also supports dark/light theme toggling, pagination, and modern UI with accessibility in mind.
                This project is part of a learning journey to master full-stack web development.
            </p>
        </div>
    );
};

export default About;
