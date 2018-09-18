# Loading图层
## 使用方式（Usage）
### 安装（Install）
``
npm install optimat-vue-loading -save
``

### 导入（Import）
#### *.js
```javascript
import {mapActions, mapGetters} from 'vuex';
import LoadingLayout from 'optimat-vue-loading'
```
#### *.vue
```vue
<script>
    import LoadingLayout from 'optimat-vue-loading'
    import {mapActions, mapGetters} from 'vuex';
    {
        methods: {
            ...mapActions(['showLoading']),
            action () {
                this.showLoading(60000 || {duration:60000});
            }
        }
    }
</script>
```
### 标签（Target）
#### *vue
```html
<LoadingLayout></LoadingLayout>
```

### 引入Vuex（Use Vuex）
[如何引入Vuex](https://vuex.vuejs.org/zh-cn/)
#### actions.js
```js
export const showLoading = ({commit}, options) => {
  commit(SHOW_LOADING, options);
};
export const hideLoading = ({commit}) => {
  commit(HIDE_LOADING);
};
```
#### getters.js
```js
export const loadingOptions = state => state.loadingOptions;
```
#### index.js
```js
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
Vue.use(Vuex);
const LOADING_DEFAULT_OPTIONS = {
  isShow: false,
  duration: 60000
};
let state = {
  loadingOptions: LOADING_DEFAULT_OPTIONS
};
let mutations = {
  [SHOW_LOADING] (state, options) {
      let defaultOptions;
      if (typeof options === 'number') {
        defaultOptions = clone(LOADING_DEFAULT_OPTIONS);
        defaultOptions.duration = options;
      } else {
        defaultOptions = clone(options || LOADING_DEFAULT_OPTIONS);
      }
      defaultOptions.isShow = true;
      state.loadingOptions = defaultOptions;
  },
  [HIDE_LOADING] (state) {
      state.loadingOptions = LOADING_DEFAULT_OPTIONS;
  }
};
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
});
// clone 方法请查看 optimat-vue-utils 中的 ObjectSupport 工具
```

| Options         | Type     | Description                 | Default |
|-----------------|:--------:|:---------------------------:|:--------:|
| duration  | number | 显示时长（ms），为500~5*60000之间 | 60000 |