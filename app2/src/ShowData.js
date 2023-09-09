import { NameContextProvider } from "shared-context_shared-library";
import React from "react";

const ShowData = () => {
  const { data } = React.useContext(NameContextProvider);

  return (
    <div className="container">
      {data.length > 0 ? (
        <h3>Here is the second app(show data)</h3>
      ) : (
        <h3>nothing...</h3>
      )}
      <div className="wrapper">
        {data.map((item) => (
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img src={item.avatar} />
                </div>
              </div>
            </div>
            <div class="text-container">
              <h3>{item.name}</h3>
              <div>{item.description}</div>
            </div>
          </div>
        ))}
        <style jsx>
          {`
            .container {
              padding: 20px 200px;
              display: flex;
              flex-direction: column;
              gap: 40px;
              justify-content: center;
              align-items: center;
            }
            .container h3 {
              font-size: 45px;
              color: #9d8667;
              background-image: -webkit-linear-gradient(
                0deg,
                #9d8667 22%,
                #70bdbc 94%,
                #072113 44%
              );
              background-clip: text;
              -webkit-background-clip: text;
              text-fill-color: transparent;
              -webkit-text-fill-color: transparent;
            }
            .wrapper {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: flex-end;
              gap: 15px;
            }
            .a-box {
              display: inline-block;
              width: 240px;
              text-align: center;
            }

            .img-container {
              height: 230px;
              width: 200px;
              overflow: hidden;
              border-radius: 0px 0px 20px 20px;
              display: inline-block;
            }

            .img-container img {
              transform: skew(0deg, -13deg);
              height: 250px;
              margin: -35px 0px 0px -70px;
            }

            .inner-skew {
              display: inline-block;
              border-radius: 20px;
              overflow: hidden;
              padding: 0px;
              transform: skew(0deg, 13deg);
              font-size: 0px;
              margin: 30px 0px 0px 0px;
              background: #c8c2c2;
              height: 250px;
              width: 200px;
            }

            .text-container {
              box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
              padding: 120px 20px 20px 20px;
              border-radius: 20px;
              background: #fff;
              margin: -120px 0px 0px 0px;
              line-height: 19px;
              font-size: 14px;
            }

            .text-container h3 {
              margin: 20px 0px 10px 0px;
              color: #04bcff;
              font-size: 18px;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default ShowData;
