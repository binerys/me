import React from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import Clipboard from 'react-clipboard.js'
import styles from './styles.module.css'

const Value = styled.div`
  color: #222;
  cursor: pointer;
  font-size: 0.6em;
  font-weight: normal;
  margin-top: -5px;
`

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

export default Hex
