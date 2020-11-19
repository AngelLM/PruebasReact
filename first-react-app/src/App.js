import React from 'react';

import classes from'./App.module.css';
import ProductData from './ProductData';

function App() {
  const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
  
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src="https://i.dlpng.com/static/png/197684_preview.png" alt="Amazon Logo" />
        </nav>
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview"/>
          {/* <div className={classes.TimeSection}>
            <p>{`${currentHour}:${currentMinute}`}</p>
          </div> */}
          <div className={classes.HeartBeatSection}>
            <i class="fas fa-heartbeat"></i>
            <p>68</p>
          </div>


        </div>

        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            <img className={[classes.ProductImage, classes.SelectedProductImage].join(" ")} src="https://imgur.com/iOeUBV7.png" alt="Black Colored Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Colored Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Colored Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Colored Watch" />
          </div>
          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(" ")}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div>
          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>

      </div>


    </div>
  );
}

export default App;
