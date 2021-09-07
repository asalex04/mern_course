import React from 'react';

const LinkCard = ({ link }) => {
  return (
   <>
      <h2>Link</h2>

      <p>Your link: <a href={link.to} target="_blank" rel="noopener noreferer">{link.to}</a></p>
      <p>From: <a href={link.from} target="_blank" rel="noopener noreferer">{link.from}</a></p>
      <p>Number clicks on the link: <strong>{link.clicks}</strong></p>
      <p>Date of creation: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>

    </>
  );
}

export default LinkCard;