import React from 'react'

function Input(props) {
  return (
    <form onSubmit={props.handleSubmit}>
        <label>
        Todo &nbsp;
          <input type="text" required={true} value={props.input} onChange={props.handleChangeText}></input>
        </label>
          <input type="submit" value="Create"></input>
      </form>
  )
}

export default Input;