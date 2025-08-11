type GreetingsProps = {
  name: string
  notif : string
}
export const Greetings= (props : GreetingsProps)=>{
  return(
    <div>
      <h2>Welcome {props.name} You have {props.notif} unread messages</h2>
    </div>
  )
}
