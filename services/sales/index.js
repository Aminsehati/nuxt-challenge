let _this;
import api from "./api.json";

export default (context, inject) => {
  let app = context.app;
  _this = app;
  inject("sales", new App());
};
class App {
  index(Data) {
    return _this.$call({
      url: api.sales.url,
      method: api.sales.method,
      data: Data,
    });
  }
}
