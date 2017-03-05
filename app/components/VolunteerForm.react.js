import React from 'react';

function VolunteerForm (props) {
  var Iframe = props.iframe;
  return (
    <div className="form-wrapper">
      <Iframe src={props.src} height={props.height} width={props.width}/>
    </div>
  );
}

export default VolunteerForm;
