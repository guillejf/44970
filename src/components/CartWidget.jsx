import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget({ cant }) {
  return (
    <>
      <ShoppingCartIcon />
      {cant}
    </>
  );
}
