import React from 'react';

const EditProfilePage = (props) => {
  console.log(props);
 return (
  <div>Editing profile number {props.match.params.id}</div>
 );
};

export default EditProfilePage;