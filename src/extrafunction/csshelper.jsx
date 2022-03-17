// class change on window resize
export const window_is_less_than = (
  width, // width of window , when it windows width is less than this the fuction will show effect
  class_to_activate, // "ACTIVATED"class will append to this class when winwidth < width and vice versa
  class_to_deactivate, // "DEACTIVATED" class will append to this class when winwidth >= width and vice versa
  ACTIVATED,
  DEACTIVATED
) => {
  function add_rem_classes(cxelx, cyylx) {
    for (let index = 0; index < cxelx.length; index++) {
      const elexom = cxelx[index];
      elexom.classList.add(ACTIVATED);
      elexom.classList.remove(DEACTIVATED);
    }
    for (let index = 0; index < cyylx.length; index++) {
      const eleyom = cyylx[index];
      eleyom.classList.add(DEACTIVATED);
      eleyom.classList.remove(ACTIVATED);
    }
  }

  function resizing_event() {
    var mbv = document.getElementsByClassName(class_to_activate);
    var pcv = document.getElementsByClassName(class_to_deactivate);
    if (window.innerWidth < width) {
      add_rem_classes(mbv, pcv);
    } else {
      add_rem_classes(pcv, mbv);
    }
  }

  window.addEventListener("resize", resizing_event);
  window.addEventListener("load", resizing_event);
};
