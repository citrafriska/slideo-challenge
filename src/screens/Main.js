import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AddNewSlideModal from "./../components/modals/AddNewSlideModal";
import { reset, clearSlides } from "./../store/actions/slideoActions";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

function Main({ slides, reset, clearSlides }) {
  const clear = (e) => {
    if (e === "r") {
      reset();
    } else {
      clearSlides();
    }
  };

  const designArr = [1, 2, 3, 4, 5, 6];

  const [activeSlide, setActiveSlide] = useState(0);
  const [dragOverSlide, setDragOverSlide] = useState(false);

  const [dragId, setDragId] = useState();
  const [slidesArr, setSlidesArr] = useState(slides);

  useEffect(() => {
    setSlidesArr(slides);
  });

  const dragOverHandler = (e) => {
    e.preventDefault();
    const i = slides.findIndex((slide) => slide.id === e.target.id);
    setDragOverSlide(i);
  };

  const dragHandler = (e) => {
    const i = slides.findIndex((slide) => slide.id === e.target.id);
    setActiveSlide(i);
    setDragId(e.target.id);
  };

  const dropHandler = (e) => {
    if (!e.target.id) {
      setDragOverSlide(false);
      return null;
    } else {
      const dragSlide = slides.find((slide) => slide.id === dragId);
      const dropSlide = slides.find((slide) => slide.id === e.target.id);

      const dragOrder = dragSlide.order;
      const dropOrder = dropSlide.order;
      const newSlidesOrder = slidesArr.map((slide) => {
        if (slide.id === dragId) {
          slide.order = dropOrder;
        }
        if (slide.id === e.target.id) {
          slide.order = dragOrder;
        }
        return slide;
      });
      const i = slides.findIndex((slide) => slide.id === e.target.id);
      setActiveSlide(i);
      setDragOverSlide(false);
      setSlidesArr(newSlidesOrder);
    }
  };

  return (
    <>
      <div className="App">
        <div className="main-wrapper">
          <div className="header-section">
            <div className="header-menu-toggle">
              <i className="fas fa-bars fa-1x"></i>
              <div className="header-username">
                <h5>Alperen b</h5>
                <p>alperenberatdurmus@gmail.com</p>
              </div>
            </div>

            <div className="header-buttons">
              <button className="header-btn" id="blue-btn">
                Button
              </button>
              <div className="badge">
                <span>!</span>
              </div>
              <span>Some Text Here</span>
            </div>

            <div className="header-buttons">
              <div className="header-new-presentation">
                <span>New Presentation</span> &nbsp;
                <i className="fas fa-edit nav-fa"></i>
              </div>
              <button className="header-btn" id="grey-btn">
                <i class="fas fa-play"></i> <span> &nbsp;Watch Video Text</span>
              </button>
              <button className="header-btn" id="red-btn">
                <i class="fas fa-download"></i>
                <span>&nbsp;Download</span>
              </button>
            </div>

            <div className="slideo-logo">Slideo Logo</div>
          </div>
          <div className="content-wrapper">
            <div className="menu-section">
              <div className="menu-sidebar">
                <div className="active-menu">
                  <i class="fas fa-paint-brush"></i>
                  <span>Edit</span>
                </div>
                <div>
                  <i class="fas fa-images"></i>
                  <span>Images</span>
                </div>
                <div>
                  <FaIcons.FaIcons size={29} /> <span>Upload</span>
                </div>
                <div>
                  <i class="fas fa-font"></i>
                  <span>Text</span>
                </div>
                <div>
                  <i class="fas fa-shapes"></i>
                  <span>Shapes</span>
                </div>

                <div>
                  <IoIcons.IoMdQrScanner size={29} /> <span>Background</span>
                </div>
              </div>
              <div className="menu-design-layout-wrapper">
                <h5>All Design</h5>
                <div className="menu-all-design-bar">
                  {designArr.map((e, i) => {
                    return (
                      <div>
                        <div className="design"></div>
                        <div className="design"></div>
                      </div>
                    );
                  })}
                </div>
                <div className="menu-design-layout-footer">
                  <button className="menu-design-layouts-btn">
                    DESIGN LAYOUTS
                  </button>
                </div>
              </div>
            </div>
            <div className="preview-section">
              {activeSlide === 0 ? (
                <div className="preview" id="design1">
                  {slides.length === 0
                    ? null
                    : slides[activeSlide].text.map((str, i) => {
                        if (i === 0) {
                          return (
                            <>
                              <div className="first-line">
                                <h5>{str}</h5>
                              </div>
                            </>
                          );
                        } else {
                          return (
                            <>
                              <div className="other-lines">
                                <p>{str}</p>
                              </div>
                            </>
                          );
                        }
                      })}
                </div>
              ) : (
                <div className="preview" id="design2">
                  {slides.length === 0
                    ? null
                    : slides[activeSlide].text.map((str, i) => {
                        if (i === 0) {
                          return (
                            <>
                              <div className="other-lines">
                                <p>{slides[activeSlide].text[0]}</p>
                              </div>
                            </>
                          );
                        } else if (i === 1) {
                          return (
                            <>
                              {" "}
                              <div className="first-line">
                                <p>{slides[activeSlide].text[1]}</p>
                              </div>
                            </>
                          );
                        }
                      })}
                </div>
              )}
            </div>
            <div className="thumbnails-section">
              <div className="thumbnails-header">
                <h5>Slides</h5>
              </div>

              <div className="thumbnails-wrapper">
                <div className="slide-thumbnails">
                  {slides.length > 0
                    ? slides
                        .sort((a, b) => a.order - b.order)
                        .map((e, i) => {
                          return (
                            <>
                              <div className="thumbnail-wrap">
                                <div>
                                  <div
                                    className={
                                      dragOverSlide !== 0 && dragOverSlide === i
                                        ? "showDivider"
                                        : "hideDivider"
                                    }
                                  >
                                    <div className="divider1"></div>
                                    <div className="divider2"></div>
                                  </div>

                                  <div
                                    className={
                                      activeSlide === i
                                        ? "thumbnail active-slide"
                                        : dragOverSlide != false &&
                                          dragOverSlide === i
                                        ? "thumbnail dragover"
                                        : "thumbnail"
                                    }
                                    draggable
                                    id={e.id}
                                    onClick={() => setActiveSlide(i)}
                                    onDragOver={(e) => dragOverHandler(e)}
                                    onDragStart={(e) => dragHandler(e)}
                                    onDrop={(e) => dropHandler(e)}
                                  >
                                    <span>{e.text.join("\n")}</span>
                                  </div>
                                </div>

                                <div className="thumbnail-number">
                                  <p>{i + 1}</p>
                                </div>
                              </div>
                            </>
                          );
                        })
                    : null}
                </div>

                <div></div>
                <button
                  className="add-btn"
                  data-target="#addNewSlideModal"
                  data-toggle="modal"
                >
                  +
                </button>
              </div>

              <div className="options-btn">
                <button
                  type="button"
                  className="clear-btn"
                  onClick={() => clear("r")}
                >
                  3 Slides
                </button>

                <button
                  type="button"
                  className="clear-btn"
                  onClick={() => clear("c")}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddNewSlideModal />
    </>
  );
}

const mapStateToProps = (state) => ({
  slides: state.slideo.slides,
});

export default connect(mapStateToProps, { reset, clearSlides })(Main);
