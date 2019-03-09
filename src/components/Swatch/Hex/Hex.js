import React from 'react'
import ReactTooltip from 'react-tooltip'
import styles from './styles.module.css'
import { Value } from './styles';

const Hex = props => {
  // Workaround for window not defined error
  if (typeof window !== 'undefined') {
    const ReactClipboard = require('react-clipboard.js');

    return (
      <>
        <Value data-tip="Copied!" data-event="click focus">
          <ReactClipboard.default component="a" data-clipboard-text={props.value}>
            {props.value}
          </ReactClipboard.default>
        </Value>
        <ReactTooltip
          className={styles.tooltip}
          effect="solid"
          globalEventOff="click"
          place="right"
        />
      </>
    );
  } else {
    return (
      <> {props.value} </>
    );
  }
};

export default Hex;
