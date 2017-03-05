import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import VolunteerForm from './VolunteerForm.react';
import Modal from 'react-modal';
import RaisedButton from 'material-ui';

var Home = React.createClass({
  getInitialState: function() {
    return { modalIsOpen: false };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  //TODO: the volunteer form should be rendered after a user selects a volunteer role to apply for.
  render() {
    return (
      <div className="container-fluid">
        <button onClick={this.openModal}>Apply to Volunteer</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
        >
          <VolunteerForm iframe='iframe' src="https://form.jotform.com/70626599389172" height="600" width="650" onBlur={this.closeModal}/>
        </Modal>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
