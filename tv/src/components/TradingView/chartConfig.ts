const skin = localStorage.getItem('tradingViewTheme') || 'white';
const locale = 'zh';
const interval = localStorage.getItem('tradingview.resolution') || '5';
interface ThemeColorOne {
  up?: string;
  down?: string;
  bg?: string;
  grid?: string;
  cross?: string;
  border?: string;
  text?: string;
  areatop?: string;
  areadown?: string;
  line?: string;
  showLegend?:boolean;
}

interface ThemeColorTwo { 
  c0?: string;
  c1?: string;
  t?: number;
  v?: boolean;
}
const getOverrides = (theme: string) => {
  const THEMES: { [key: string]: ThemeColorOne } = {
    white: {
      up: '#03c087',
      down: '#ef5555',
      bg: '#ffffff',
      grid: '#f7f8fa',
      cross: '#23283D',
      border: '#9194a4',
      text: '#9194a4',
      areatop: 'rgba(71, 78, 112, 0.1)',
      areadown: 'rgba(71, 78, 112, 0.02)',
      line: '#737375',
    },
    black: {
      up: '#589065',
      down: '#ae4e54',
      bg: '#181B2A',
      grid: '#1f2943',
      cross: '#9194A3',
      border: '#4e5b85',
      text: '#61688A',
      areatop: 'rgba(122, 152, 247, .1)',
      areadown: 'rgba(122, 152, 247, .02)',
      line: '#737375',
    },
    mobile: {
      up: '#03C087',
      down: '#E76D42',
      bg: '#ffffff',
      grid: '#f7f8fa',
      cross: '#23283D',
      border: '#C5CFD5',
      text: '#8C9FAD',
      areatop: 'rgba(71, 78, 112, 0.1)',
      areadown: 'rgba(71, 78, 112, 0.02)',
      showLegend: !0,
    },
  };
  const t = THEMES?.[theme];
  return {
    volumePaneSize: 'medium',
    'scalesProperties.lineColor': t.text,
    'scalesProperties.textColor': t.text,
    'paneProperties.background': t.bg,
    'paneProperties.vertGridProperties.color': t.grid,
    'paneProperties.horzGridProperties.color': t.grid,
    'paneProperties.crossHairProperties.color': t.cross,
    'paneProperties.legendProperties.showLegend': !!t.showLegend,
    'paneProperties.legendProperties.showStudyArguments': !0,
    'paneProperties.legendProperties.showStudyTitles': !0,
    'paneProperties.legendProperties.showStudyValues': !0,
    'paneProperties.legendProperties.showSeriesTitle': !0,
    'paneProperties.legendProperties.showSeriesOHLC': !0,
    'mainSeriesProperties.candleStyle.upColor': t.up,
    'mainSeriesProperties.candleStyle.downColor': t.down,
    'mainSeriesProperties.candleStyle.drawWick': !0,
    'mainSeriesProperties.candleStyle.drawBorder': !0,
    'mainSeriesProperties.candleStyle.borderColor': t.border,
    'mainSeriesProperties.candleStyle.borderUpColor': t.up,
    'mainSeriesProperties.candleStyle.borderDownColor': t.down,
    'mainSeriesProperties.candleStyle.wickUpColor': t.up,
    'mainSeriesProperties.candleStyle.wickDownColor': t.down,
    'mainSeriesProperties.candleStyle.barColorsOnPrevClose': !1,
    'mainSeriesProperties.hollowCandleStyle.upColor': t.up,
    'mainSeriesProperties.hollowCandleStyle.downColor': t.down,
    'mainSeriesProperties.hollowCandleStyle.drawWick': !0,
    'mainSeriesProperties.hollowCandleStyle.drawBorder': !0,
    'mainSeriesProperties.hollowCandleStyle.borderColor': t.border,
    'mainSeriesProperties.hollowCandleStyle.borderUpColor': t.up,
    'mainSeriesProperties.hollowCandleStyle.borderDownColor': t.down,
    'mainSeriesProperties.hollowCandleStyle.wickColor': t.line,
    'mainSeriesProperties.haStyle.upColor': t.up,
    'mainSeriesProperties.haStyle.downColor': t.down,
    'mainSeriesProperties.haStyle.drawWick': !0,
    'mainSeriesProperties.haStyle.drawBorder': !0,
    'mainSeriesProperties.haStyle.borderColor': t.border,
    'mainSeriesProperties.haStyle.borderUpColor': t.up,
    'mainSeriesProperties.haStyle.borderDownColor': t.down,
    'mainSeriesProperties.haStyle.wickColor': t.border,
    'mainSeriesProperties.haStyle.barColorsOnPrevClose': !1,
    'mainSeriesProperties.barStyle.upColor': t.up,
    'mainSeriesProperties.barStyle.downColor': t.down,
    'mainSeriesProperties.barStyle.barColorsOnPrevClose': !1,
    'mainSeriesProperties.barStyle.dontDrawOpen': !1,
    'mainSeriesProperties.lineStyle.color': t.border,
    'mainSeriesProperties.lineStyle.linewidth': 1,
    'mainSeriesProperties.lineStyle.priceSource': 'close',
    'mainSeriesProperties.areaStyle.color1': t.areatop,
    'mainSeriesProperties.areaStyle.color2': t.areadown,
    'mainSeriesProperties.areaStyle.linecolor': t.border,
    'mainSeriesProperties.areaStyle.linewidth': 1,
    'mainSeriesProperties.areaStyle.priceSource': 'close',
  };
};

const getStudiesOverrides = (theme: string) => {
  const THEMES : { [key: string]: ThemeColorTwo } = {
    white: {
      c0: '#eb4d5c',
      c1: '#53b987',
      t: 70,
      v: !1,
    },
    black: {
      c0: '#fd8b8b',
      c1: '#3cb595',
      t: 70,
      v: !1,
    },
  };
  const t = THEMES[theme];
  return {
    'volume.volume.color.0': t.c0,
    'volume.volume.color.1': t.c1,
    'volume.volume.transparency': t.t,
    'volume.options.showStudyArguments': t.v,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WidgitConfig: any = (symbol: string) => {
  return {
    autosize: true,
    symbol: symbol,
    interval: interval,
    container_id: 'tv_chart_container',
    // datafeed: this.datafeeds,
    library_path: './charting_library/',
    enabled_features: [],
    timezone: 'Asia/Shanghai',
    custom_css_url: './css/tradingview_' + skin + '.css',
    locale: locale,
    debug: false,
    disabled_features: [
      'header_symbol_search',
      'header_saveload',
      'header_screenshot',
      'header_chart_type',
      'header_compare',
      'header_undo_redo',
      'timeframes_toolbar',
      'volume_force_overlay',
      'header_resolutions',
    ],
    //preset: "mobile",
    overrides: getOverrides(skin),
    studies_overrides: getStudiesOverrides(skin),
  };
};
