import React from 'react';

function VolunteerForm (props) {
  var iframe = props.iframe;

  return (
    <div>
      <iframe src={props.src} height={props.height} width={props.width} onBlur={props.onBlur}/>
    </div>
  );
}

export default VolunteerForm;
