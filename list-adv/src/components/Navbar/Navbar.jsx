import React, { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";

import { ChangeContext } from "../../Context/ChangeContext";
import "./Navbar.css";
import api from "../../api/items";

const Navbar = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const { vertical, setVertical } = useContext(ChangeContext);
  const inputRef = useRef();

  useEffect(() => {
    const fetchApi = async () => {
      const res = await api.get("/items");

      setData(res.data);
      setSearchResult(res.data);
    };

    fetchApi();
  }, []);

  const handleInput = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  const handleFind = () => {
    const value = inputRef.current.value;
    const result = data.filter((a) => a.displayName === value);

    result.length > 0
      ? setSearchResult(result)
      : alert("Vui lòng nhập chinh xác tên");
    console.log(result);
    setShowResult(true);
  };
  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <div className="wrapper-search">
      <div className="vertical" onClick={() => setVertical(!vertical)}>
        <button className="vertical__btn">
          {vertical ? "Horizontal View" : "Vertical View"}
        </button>
      </div>

      {/* <div className="search"> */}
      <HeadlessTippy
        appendTo={() => document.body}
        interactive
        placement="bottom"
        visible={showResult && searchResult.length > 0}
        onClickOutside={handleHideResult}
        render={(attrs) => (
          <div className="search-result" tabIndex="-1" {...attrs}>
            <div className="search-list">
              {searchResult.map((item, i) => (
                <div className="search-item" key={i}>
                  <img
                    src="https://images.ctfassets.net/49vqjgy9zjzd/XASRYtoFDuJ4Pp5CsIkhi/215e3a1cd82209307a85a12a02f38e1b/hoang.jpeg"
                    alt={item.displayName}
                    className="search-avatar"
                  />
                  <div className="search-info">
                    <h2 className="search-name">{item.displayName}</h2>
                    <h2 className="search-email">{item.email}</h2>
                    <p className="search-phone">{item.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      >
        <div className="search">
          <div className="wrapper-input">
            <input
              ref={inputRef}
              value={searchValue}
              spellCheck={false}
              onChange={handleInput}
              // onFocus={() => setShowResult(true)}
              type="text"
              placeholder="Enter your name ..."
              className="search__input"
            />
            {searchValue.length > 0 ? (
              <FontAwesomeIcon
                icon={faClose}
                className="search__clear"
                onClick={() => {
                  setSearchValue("");
                  inputRef.current.focus();
                }}
              />
            ) : (
              ""
            )}
          </div>
          <div className="search__icon" onClick={handleFind}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </HeadlessTippy>
    </div>
    // </div>
  );
};

export default Navbar;
