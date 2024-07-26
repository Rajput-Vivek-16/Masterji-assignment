import React, { useState } from 'react';
import styles from './DataTable.module.css';
import Image from './assets/Image.png';
import Data from './Data/TableData.json';

export default function DataTable() {
  const [data, setData] = useState(Data);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredData = Data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setData(filteredData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Chai aur Code</h1>
      <div className={styles.box}>
        <div className={styles.cardContainer}>
          <h2 className={styles.subHeading}>Batches</h2>
          <p className={styles.description}>Create learner’s batch and share information at the same time.</p>
          <div className={styles.searchSection}>
            <input
              type="search"
              value={searchTerm}
              placeholder="Search by Title (alt+k or cmd+k)"
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <button className={styles.searchBtn} onClick={handleSearch}>Search</button>
          </div>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Price</th>
                <th>Validity/Expiry</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.imageUrl} alt="" className={styles.courseIcon} />
                    <span className={styles.tableTitle}>{item.title}</span>
                  </td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>{item.price}</td>
                  <td>{item.validity}</td>
                  <td><span className={styles.courseStatus}>{item.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.footer}>
            <p>Rows per page</p>
            <p></p>
          </div>
        </div>
      </div>
      <a id="dataTable" target="_blank"  href="https://courses.chaicode.com/learn">
        <img src={Image} alt="Course" />
      </a>
    </div>
  );
}
