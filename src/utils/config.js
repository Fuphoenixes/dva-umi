
module.exports = {
  getAppid:()=>localStorage.getItem('appid'),
  imgHost: 'http://image.haoyunqi.com.cn/',
  reg_phone : /^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/,//手机号正则
  showVConsole : true, //是否显示vConsole
};
