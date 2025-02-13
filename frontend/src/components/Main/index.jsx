import styles from './styles.module.css'
import TaskManager from '../../TaskManager'
const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <div className={styles.main_container}>

            <nav className={styles.navbar}>
                <h1>My Tasks</h1>
                <button className={styles.white_btn} onClick={handleLogout}>Logout</button>

            </nav>
            <TaskManager />
        </div>
    )
}

export default Main