<template>
  <demo-section>
    <demo-block :title="t('type')">
      <div class="demo-button-row">
        <!-- <van-button :likes="'222'" less-module='xw' type="primary">{{ t('default') }}</van-button> -->
        <van-button type="primary" less-module='xw' size="large">{{ t('primary') }}</van-button>
        <van-button type="primary" less-module='xw' size="normal">{{ t('primary') }}</van-button>
        <van-button type="primary" less-module='xw' size="small">{{ t('primary') }}</van-button>
        <van-button type="primary" less-module='xw' size="mini">{{ t('primary') }}</van-button>
      </div>
      
      <div class="demo-button-row">
        <van-button type="warning" less-module='xw' size="large">{{ t('warning') }}</van-button>
        <van-button type="warning" less-module='xw' size="normal">{{ t('warning') }}</van-button>
        <van-button type="warning" less-module='xw' size="small">{{ t('warning') }}</van-button>
        <van-button type="warning" less-module='xw' size="mini">{{ t('warning') }}</van-button>
      </div>

      <div class="demo-button-row">
        <van-button type="danger" less-module='xw' size="large">{{ t('danger') }}</van-button>
        <van-button type="danger" less-module='xw' size="normal">{{ t('danger') }}</van-button>
        <van-button type="danger" less-module='xw' size="small">{{ t('danger') }}</van-button>
        <van-button type="danger" less-module='xw' size="mini">{{ t('danger') }}</van-button>
      </div>

      <div class="demo-button-row">
        <van-button disabled less-module='xw' size="large" text='不可操作' />
        <van-button disabled less-module='xw' size="normal" text='不可操作' />
        <van-button disabled less-module='xw' size="small" text='不可操作' />
        <van-button disabled less-module='xw' size="mini" text='不可操作' />
      </div>

      <div class="demo-button-row">
        <van-button loading less-module='xw' type="primary" loading-text='稍等'/>
        <van-button loading less-module='xw' type="danger" loading-type="spinner" />
        <van-button loading less-module='xw' type="info" :loading-text="t('loadingText')" />
      </div>

        <!-- <div class="demo-button-row">
          <van-button less-module='xw' type="primary" icon="star-o" />
          <van-button less-module='xw' type="primary" icon="star-o" :text="t('button')" />
          <van-button
            less-module='xw'
            plain
            type="primary"
            icon="https://img.yzcdn.cn/vant/logo.png"
            :text="t('button')"
          />
        </div>

        <div class="demo-button-row">
          <van-button
            less-module='xw'
            :text="t('urlRoute')"
            type="primary"
            url="/vant/mobile.html"
          />
          <van-button :text="t('vueRoute')" type="primary" to="index" />
        </div> -->
    </demo-block>

  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '按钮类型',
      size: '按钮尺寸',
      icon: '图标按钮',
      loading: '加载状态',
      shape: '按钮形状',
      default: '默认按钮',
      primary: '主要按钮',
      info: '信息按钮',
      danger: '危险按钮',
      warning: '警告按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      plain: '朴素按钮',
      square: '方形按钮',
      round: '圆形按钮',
      hairline: '细边框',
      hairlineButton: '细边框按钮',
      loadingText: '加载中...',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      customColor: '自定义颜色',
      pure: '单色按钮',
      gradient: '渐变色按钮',
      blockElement: '块级元素',
    },
    'en-US': {
      type: 'Type',
      size: 'Size',
      icon: 'Icon',
      loading: 'Loading',
      shape: 'Shape',
      default: 'Default',
      primary: 'Primary',
      info: 'Info',
      danger: 'Danger',
      warning: 'Warning',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      plain: 'Plain',
      square: 'Square',
      round: 'Round',
      hairline: 'Hairline',
      hairlineButton: 'Hairline',
      loadingText: 'Loading...',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      customColor: 'Custom Color',
      pure: 'Pure',
      gradient: 'Gradient',
      blockElement: 'Block Element',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-button {
  .van-button {
    &--large {
      margin-bottom: @padding-md;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: @padding-md;
    }
  }

  .van-button-xw {
    &--large {
      margin-bottom: @padding-md;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: @padding-md;
    }
  }

  .van-doc-demo-block {
    padding: 0 @padding-md;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: @padding-sm;
  }
}
</style>
