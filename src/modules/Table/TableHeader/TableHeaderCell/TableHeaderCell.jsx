import React from "react";
import styles from './TableHeaderCell.module.css'



export const TableHeaderCell = (props) =>{
    return(
        <div className={styles._} id={props.id}>
            <span className={styles.text}>{props.label}</span>
        </div>
    )
}