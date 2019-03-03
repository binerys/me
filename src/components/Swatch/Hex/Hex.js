import React from 'react'
import ReactTooltip from 'react-tooltip'
import Clipboard from 'react-clipboard.js'
import styles from './styles.module.css'
import { Value } from './styles';

const Hex = props => (
  <>
    <Value data-tip="Copied!" data-event="click focus">
      <Clipboard component="a" data-clipboard-text={props.value}>
        {props.value}
      </Clipboard>
    </Value>
    <ReactTooltip
      className={styles.tooltip}
      effect="solid"
      globalEventOff="click"
      place="right"
    />
  </>
)

export default Hex;
