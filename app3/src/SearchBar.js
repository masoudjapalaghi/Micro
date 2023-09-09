import React from "react";
import { NameContextProvider } from "shared-context_shared-library";

const SearchBar = () => {
  const { setFilterName = () => {}, filterName } =
    React.useContext(NameContextProvider);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterName(e.target.name.value);
  };

  return (
    <div id="cover">
      <form onSubmit={handleSubmit}>
        <div className="tb">
          <div className="td">
            <input
              defaultValue={filterName}
              type="text"
              placeholder="این کامپوننت در اپ دو قرار دارد"
              required
              id="name"
            />
          </div>
          <div className="td" id="s-cover">
            <button type="submit">
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
      </form>
      <style jsx>
        {`
          .tb {
            display: table;
            width: 100%;
          }

          .td {
            display: table-cell;
            vertical-align: middle;
          }

          input,
          button {
            color: #fff;
            font-family: Nunito;

            font-size: 10px;

            padding: 0;
            margin: 0;
            border: 0;
            background-color: transparent;
          }

          #cover {
            top: 50%;
            left: 0;
            right: 0;
            width: 550px;
            padding: 35px;
            margin: -83px auto 0 auto;
            background-color: #ff7575;
            border-radius: 20px;
            box-shadow: 0 10px 40px #ff7c7c, 0 0 0 20px #ffffffeb;
            transform: scale(0.6);
          }

          form {
            height: 96px;
          }

          input[type="text"] {
            width: 100%;
            height: 96px;
            font-size: 60px;
            line-height: 1;
          }

          input[type="text"]::placeholder {
            color: #e16868;
            font-size: 40px;
            font-wieght: 900;
          }

          #s-cover {
            width: 1px;
            padding-left: 35px;
          }

          button {
            position: relative;
            display: block;
            width: 84px;
            height: 96px;
            cursor: pointer;
          }

          #s-circle {
            position: relative;
            top: -8px;
            left: 0;
            width: 43px;
            height: 43px;
            margin-top: 0;
            border-width: 15px;
            border: 15px solid #fff;
            background-color: transparent;
            border-radius: 50%;
            transition: 0.5s ease all;
          }

          button span {
            position: absolute;
            top: 68px;
            left: 43px;
            display: block;
            width: 45px;
            height: 15px;
            background-color: transparent;
            border-radius: 10px;
            transform: rotateZ(52deg);
            transition: 0.5s ease all;
          }

          button span:before,
          button span:after {
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            width: 45px;
            height: 15px;
            background-color: #fff;
            border-radius: 10px;
            transform: rotateZ(0);
            transition: 0.5s ease all;
          }

          #s-cover:hover #s-circle {
            top: -1px;
            width: 67px;
            height: 15px;
            border-width: 0;
            background-color: #fff;
            border-radius: 20px;
          }

          #s-cover:hover span {
            top: 50%;
            left: 56px;
            width: 25px;
            margin-top: -9px;
            transform: rotateZ(0);
          }

          #s-cover:hover button span:before {
            bottom: 11px;
            transform: rotateZ(52deg);
          }

          #s-cover:hover button span:after {
            bottom: -11px;
            transform: rotateZ(-52deg);
          }
          #s-cover:hover button span:before,
          #s-cover:hover button span:after {
            right: -6px;
            width: 40px;
            background-color: #fff;
          }
        `}
      </style>
    </div>
  );
};

export default SearchBar;
