import React from 'react';
import styles from './OtpForm.module.css';
import OtpForm from './components/Form';
import Image from './assets/Image.png';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.title}>Chai aur Code</p>
        <div className={styles.formContainer}>
          <OtpForm />
        </div>
      </div>
      <a id="link_to_website" target="_blank" rel="noopener noreferrer" href="https://courses.chaicode.com/learn">
        <img src={Image} alt="Course" />
      </a>
    </div>
  );
}

export default App;
