import styles from "./Messages.module.css"
function Messages({text}: {text: string}) {
    return (
        <p className={styles.messages}>{text}</p>
    )
}

export default Messages