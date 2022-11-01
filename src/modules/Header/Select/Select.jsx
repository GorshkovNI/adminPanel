import React from "react";
import styles from './Select.module.css'
import cn from 'classnames'
import { Input } from '../../../shared/Input/Input'
import { useState } from "react";
import { Dropdown } from "../../../shared/Dropdown/Dropdown";
import { CheckBox } from "../../../shared/Checkbox/Checkbox";

export const Select = ({
    filter:{
        value,
        onChange,
        dropdownItem,
    }
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const hangleChangeVisible = () => {
        setIsVisible(!isVisible)
    }

    const containerClassName = cn(styles.container)
    return(
        <div className={styles.container}>
            <div className={styles.area}>
                <Input 
                    value={value}
                    className={containerClassName}
                    nameIcon='vArrow'
                    onClick={hangleChangeVisible}                
                />
            <div className={styles.dropdown}>{isVisible && 
                <Dropdown>
                    {dropdownItem.map((current) => (
                    <CheckBox
                        label={current.label}
                        key={current.id}
                        id={current.id}
                        className={styles.checkboxText}
                        checked={current.checked}
                        onChange={onChange}
                    />
                    ))}
                </Dropdown>}
            </div>
            </div>
        </div>
        
    )
}