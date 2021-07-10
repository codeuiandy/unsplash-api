import HoldOn from 'react-hold-on'

var options = {
  theme:"sk-dot",
  message:'UnSplash',
  backgroundColor:"#3626a6",
  textColor:"#3626a6"
};
// HoldOn.open({
//   theme: "sk-cube-grid"
// })


export const showLoader = () => {
  HoldOn.open(options);
};

export const hideLoader = () => {
  HoldOn.close()
};