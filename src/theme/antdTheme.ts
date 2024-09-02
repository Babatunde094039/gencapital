'use client'
import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    // controlHeight : 72,
    controlOutline : 'none',
    colorPrimary : '#84D246'
  },
  components: {
    Notification: {
      // width : 100
    },
    Dropdown: {
      zIndexPopup: 10
    },
    Slider: {
      handleColor:'#3A3A45',
      handleSize: 16,
      handleSizeHover : 14,
      handleLineWidth: 4,
      railBg:'#F2F2F2',
      railHoverBg : '#F2F2F2',
      trackBg:'#121220',
      trackHoverBg:'#121220',
      dotSize : 16,
      controlSize : 16,
      railSize :2
    },
  },
};
