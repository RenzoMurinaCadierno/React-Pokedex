import React, { memo } from "react"
import styles from "./Spinner.module.css"

const Spinner = () => (
  <div className={styles.Chase}>
    <div className={styles.ChaseDot}></div>
    <div className={styles.ChaseDot}></div>
    <div className={styles.ChaseDot}></div>
    <div className={styles.ChaseDot}></div>
    <div className={styles.ChaseDot}></div>
    <div className={styles.ChaseDot}></div>
  </div>
)

export default memo(Spinner)
