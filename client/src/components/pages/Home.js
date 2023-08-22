import React from 'react';
import Sidebar from '../Sidebar.js';
import Topbar from "../Topbar.js";
import Feed from "../Feed.js";
import Rightbar from "../Rightbar.js";
import styles from "../../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Topbar />
            <div className={styles.homeContainer}>
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}
