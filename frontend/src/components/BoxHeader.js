import React from 'react'
// import { useTheme } from '@mui/material'

const BoxHeader = (props) => {
  // const {palette} = useTheme();
  return (
    <div style={{marginBottom: '20px'}}>
      <h4 style={{marginBottom: '5px'}}>{props.title}</h4>
      <h6 style={{color: '#6b6d74'}}>{props.subtitle}</h6>
    </div>
  )
}

export default BoxHeader