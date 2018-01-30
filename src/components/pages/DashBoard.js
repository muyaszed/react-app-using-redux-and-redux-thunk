import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage'

const DashBoard = ({ isConfirmed }) => (
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}
  </div>
)

DashBoard.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  }
}

export default connect(mapStateToProps)(DashBoard)
