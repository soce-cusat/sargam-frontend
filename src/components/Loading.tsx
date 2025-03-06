import Image from 'next/image';
import React from 'react';

const Loading = () => {
  return (
    <div style={styles.container}>
      <Image src="/loading.gif" alt="Loading..." style={styles.gif} width={200} height={200}/>
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
