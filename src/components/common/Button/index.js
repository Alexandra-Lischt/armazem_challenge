import React from 'react';
import { Button } from 'antd';

export const ButtonCommon = props => {
  return (
    <>
      <Button onClick={props.onClick}>{props.title}</Button>
    </>
  )
}
