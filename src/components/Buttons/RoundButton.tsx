import styles from "./RoundButton.module.css"

function RoundButton({label, onClick}: {label: string, onClick: ()=>void}){
  return (
    <div 
      onClick={onClick} 
      className={styles.button}
    >
      {label}
    </div>
  )
}

export {RoundButton}
