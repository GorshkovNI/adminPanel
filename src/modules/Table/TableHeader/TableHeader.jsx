import React from "react";
import styles from './TableHeader.module.css'
import { TableHeaderCell } from "./TableHeaderCell/TableHeaderCell";

const headerItem = [
    {id: Date.now(), label: '#'},
    {id: Date.now(), label: 'Дата'},
    {id: Date.now(), label: 'Статус'},
    {id: Date.now(), label: 'Позиция'},
    {id: Date.now(), label: 'Сумма'},
    {id: Date.now(), label: 'ФИО покупателя'},
]

export const TableHeader = () => {
    return(
            
        <div className={styles._}>
            {headerItem.map((item) =>{
                return <TableHeaderCell key={item.id} label={item.label}/>
            })}
        </div>
    )
}