import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import VolunteerForm from './VolunteerForm.react';
import Modal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardMedia, CardHeader} from 'material-ui/Card';
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed to override default modal styles
Modal.defaultStyles.content.overflow = 'hidden';
Modal.defaultStyles.content.padding = 'none';
Modal.defaultStyles.content.margin = '10px';

var Home = React.createClass({
  getInitialState: function () {
    return { modalIsOpen: false};
  },

  openModal: function () {
    this.setState({modalIsOpen: true});
  },

  closeModal: function () {
    this.setState({modalIsOpen: false});
  },

  renderCard: function () {
    return (
    <div className="apply-card">
      <Card>
        <CardMedia>
          <img src="https://www2.palomar.edu/pages/calendar/files/2017/03/Planned-Parenthood-Logo.jpg" />
        </CardMedia>
        <CardHeader
          title="Planned Parenthood"
          subtitle="Abortion Clinic Escort"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <RaisedButton label="Apply" primary={true} onClick={this.openModal}/>
        </CardActions>
      </Card>
    </div>
    )
  },

  renderForm: function () {
    const style = {
      content : {
        right: 'auto',
        top: '75px'
      }
    }
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="Modal" 
        style={style} >
        <VolunteerForm iframe='iframe' src="https://form.jotform.com/70626599389172" height="500" width="700" onBlur={this.closeModal}/>
      </Modal>
    );
  },

  render() {
    return (
      <div>
        {this.state.modalIsOpen ? this.renderForm() : this.renderCard()}
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    modalIsOpen: state.modalIsOpen
  };
};

export default connect(mapStateToProps)(Home);
