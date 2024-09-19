export const AXIS_STYLE = {
  style: {
    colors: "#000000",
  },
};
export const X_AXIS_LABELS_OPTIONS = {
  show: true,
  rotate: -40,
  rotateAlways: false,
  maxHeight: 60,
  ...AXIS_STYLE,
};
export const Y_AXIS_LABELS_OPTIONS = {
  show: true,
  ...AXIS_STYLE,
};
export const TOOLBAT_OPTIONS = {
  show: true,
  tools: {
    download: false,
    selection: true,
    zoom: true,
    zoomin: true,
    zoomout: true,
    pan: true,
    reset: false,
  },
};
export const DATA_LABELS = {
  enabled: true,
  style: {
    fontSize: "1.2rem",
    fontWeight: 600,
  },
  dropShadow: {
    enabled: false,
  },
};
