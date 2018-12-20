import { BaseModule, mapActions, mapGetters } from './lib/BaseModule';
import Utils from 'optimat-vue-utils';

const BrowserUtils = Utils.BrowserUtils;
import icons from './icons.json';

class Component extends BaseModule {
  constructor () {
    super();
    this.setProps(['options']);
    this.setComponent({});
    this.setMethod({
      ...mapActions(['hideLoading']),
      start () {
        let self = this;
        setInterval(() => {
          self.deg = (self.deg + 15) % 360;
        }, 1000 / 24);
      },
      setSpinnerPosition () {
        this.$nextTick(() => {
          let el = this.$el.querySelector('.spinner');
          if (el) {
            let style = el.style;
            style.margin = '0px';
            // style.marginLeft = `${(this.windowWidth - el.offsetWidth) / 2}px`;
            style.marginTop = `${(this.windowHeight - el.offsetHeight) / 2}px`;
          }
        });
      }
    });
    this.setCompute({
      ...mapGetters({
        windowHeight: 'windowHeight',
        windowWidth: 'windowWidth',
        loadingOptions: 'loadingOptions'
      })
    });
    this.setWatch({
      loadingOptions (options) {
        options = options || {};
        let self = this;
        let isShow = self.isShow = options.isShow || false;
        let duration = Math.min(Math.max(options.duration || 60000, 500), 5 * 60000);
        let timerId = self.timerId;
        if (timerId) {
          clearTimeout(timerId);
        }
        if (isShow) {
          self.setSpinnerPosition();
          self.timerId = setTimeout(() => {
            self.hideLoading();
          }, duration);
        } else {
          self.hideLoading();
        }
      }
    });
  }

  getData () {
    return {
      icons,
      supportCss3: true,
      deg: 0,
      isShow: false,
      timerId: null,
      defaultWidth: '',
      defaultHeight: ''
    };
  }

  onCreate () {
    let app = this.app;
    app.defaultWidth = window.innerWidth;
    app.defaultHeight = window.innerHeight;
    app.supportCss3 = BrowserUtils.cssSupports('transform') && BrowserUtils.cssSupports('animation') && BrowserUtils.cssSupports('animationDelay');
    if (!app.supportCss3) {
      app.start();
    }
  }

  onMount () {
  }
}

module.exports = Component;
