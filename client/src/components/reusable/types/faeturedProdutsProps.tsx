import React from 'react'
import upCardProps from './upCardProps'
import downCardProps from './downCardProps'

interface featuredProductsProps {
  items: upCardProps[] | downCardProps[]
  CardComponent: React.ComponentType<upCardProps | downCardProps>
}

export default featuredProductsProps
