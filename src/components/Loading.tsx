import React from 'react';

const Loading = () => {
  return (
    <div style={styles.container}>
      <img src="/loading.gif" alt="Loading..." style={styles.gif} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'white',  // White background
    overflow: 'hidden',  // Hide any overflowing content
  },
  gif: {
    width: '200px',  // Set a small size for the GIF (adjust as needed)
    height: '200px',
  },
};

export default Loading;
