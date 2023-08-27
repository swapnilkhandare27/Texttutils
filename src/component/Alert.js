import React from 'react'

export default function Alert(props) {
    const capitalize =(word)=>{
        const lower = word.toLowercase();
        return lower.charAt(0).toUppercase() + lower.slice(1);


    }
  return (
   props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show"`} role="alert" >
  <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}

</div>
  )
}
