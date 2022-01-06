let _this;
import api from "./api.json";

export default (context, inject) => {
  let app = context.app;
  _this = app;
  inject("auth", new App());
};
class App {
  login(Data) {
    return _this.$call({
      url: api.login.url,
      method: api.login.method,
      data: Data,
    });
  }
  getUserInfo(Data) {
    return _this.$call({
      url: api.getUserInfo.url,
      method: api.getUserInfo.method,
      data : Data
    });
  }
}
