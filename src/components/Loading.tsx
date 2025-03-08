import Image from 'next/image';
import React from 'react';

const Loading = () => {
  return (
    <div style={styles.container}>
      <Image src="/logoload.gif" alt="Loading..." style={styles.gif} width={400} height={200}/>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'black',  // White background
    overflow: 'hidden',  // Hide any overflowing content
  },
  gif: {
    width: '400px',  // Set a small size for the GIF (adjust as needed)
    height: '200px',
  },
};

export default Loading;
