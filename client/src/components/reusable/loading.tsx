import React from 'react'
import CircularProgress, {
  CircularProgressPropsColorOverrides
} from '@mui/material/CircularProgress'
import { OverridableStringUnion } from '@mui/types'

interface LoadingProps {
  color?: OverridableStringUnion<
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'inherit',
    CircularProgressPropsColorOverrides
  >
}

const Loading: React.FC<LoadingProps> = ({ color = 'primary' }) => {
  return <CircularProgress color={color} />
}

export default Loading
