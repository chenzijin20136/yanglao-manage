// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/chenzijin/Desktop/demo/myapp/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@ant-design/pro-layout/es/PageLoading';

export function getRoutes() {
  const routes = [
  {
    "path": "/umi/plugin/openapi",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-openapi__openapi' */'/Users/chenzijin/Desktop/demo/myapp/src/.umi/plugin-openapi/openapi.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'/Users/chenzijin/Desktop/demo/myapp/src/.umi/plugin-layout/Layout.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/~demos/:uuid",
        "layout": false,
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/chenzijin/Desktop/demo/myapp/node_modules/@umijs/preset-dumi/lib/theme/layout'), loading: LoadingComponent})],
        "component": (props) => React.createElement(
        dynamic({
          loader: async () => {
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/chenzijin/Desktop/demo/myapp/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { default: demos } = await import(/* webpackChunkName: 'dumi_demos' */ '@@/dumi/demos');
            const { usePrefersColor } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          }
        }), props)
      },
      {
        "path": "/_demos/:uuid",
        "redirect": "/~demos/:uuid"
      },
      {
        "__dumiRoot": true,
        "layout": false,
        "path": "/~docs",
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/chenzijin/Desktop/demo/myapp/node_modules/@umijs/preset-dumi/lib/theme/layout'), loading: LoadingComponent}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/chenzijin/Desktop/demo/myapp/node_modules/dumi-theme-default/es/layout.js'), loading: LoadingComponent})],
        "routes": [
          {
            "path": "/~docs",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'README.md' */'/Users/chenzijin/Desktop/demo/myapp/README.md'), loading: LoadingComponent}),
            "exact": true,
            "meta": {
              "locale": "en-US",
              "order": null,
              "filePath": "README.md",
              "updatedTime": 1632194433250,
              "slugs": [
                {
                  "depth": 1,
                  "value": "Ant Design Pro",
                  "heading": "ant-design-pro"
                },
                {
                  "depth": 2,
                  "value": "Environment Prepare",
                  "heading": "environment-prepare"
                },
                {
                  "depth": 2,
                  "value": "Provided Scripts",
                  "heading": "provided-scripts"
                },
                {
                  "depth": 3,
                  "value": "Start project",
                  "heading": "start-project"
                },
                {
                  "depth": 3,
                  "value": "Build project",
                  "heading": "build-project"
                },
                {
                  "depth": 3,
                  "value": "Check code style",
                  "heading": "check-code-style"
                },
                {
                  "depth": 3,
                  "value": "Test code",
                  "heading": "test-code"
                },
                {
                  "depth": 2,
                  "value": "More",
                  "heading": "more"
                }
              ],
              "title": "Ant Design Pro"
            },
            "title": "Ant Design Pro"
          },
          {
            "path": "/~docs/components",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__index.md' */'/Users/chenzijin/Desktop/demo/myapp/src/components/index.md'), loading: LoadingComponent}),
            "exact": true,
            "meta": {
              "filePath": "src/components/index.md",
              "updatedTime": 1632194433220,
              "title": "????????????",
              "sidemenu": false,
              "slugs": [
                {
                  "depth": 1,
                  "value": "????????????",
                  "heading": "????????????"
                },
                {
                  "depth": 2,
                  "value": "Footer ????????????",
                  "heading": "footer-????????????"
                },
                {
                  "depth": 2,
                  "value": "HeaderDropdown ??????????????????",
                  "heading": "headerdropdown-??????????????????"
                },
                {
                  "depth": 2,
                  "value": "HeaderSearch ???????????????",
                  "heading": "headersearch-???????????????"
                },
                {
                  "depth": 3,
                  "value": "API",
                  "heading": "api"
                },
                {
                  "depth": 2,
                  "value": "NoticeIcon ????????????",
                  "heading": "noticeicon-????????????"
                },
                {
                  "depth": 3,
                  "value": "NoticeIcon API",
                  "heading": "noticeicon-api"
                },
                {
                  "depth": 3,
                  "value": "NoticeIcon.Tab API",
                  "heading": "noticeicontab-api"
                },
                {
                  "depth": 3,
                  "value": "NoticeIconData",
                  "heading": "noticeicondata"
                },
                {
                  "depth": 2,
                  "value": "RightContent",
                  "heading": "rightcontent"
                }
              ],
              "group": {
                "path": "/~docs/components",
                "title": "Components"
              }
            },
            "title": "????????????"
          }
        ],
        "title": "ant-design-pro",
        "component": (props) => props.children
      },
      {
        "name": "customer",
        "icon": "solution",
        "path": "/consumer",
        "routes": [
          {
            "path": "/consumer",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__consumer' */'/Users/chenzijin/Desktop/demo/myapp/src/pages/consumer'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "batchadd",
            "hideInMenu": true,
            "path": "/consumer/batchadd",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__consumer__Batchadd' */'/Users/chenzijin/Desktop/demo/myapp/src/pages/consumer/Batchadd'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "batchadd",
            "hideInMenu": true,
            "path": "/consumer/batchaddscore",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__consumer__BatchaddScore' */'/Users/chenzijin/Desktop/demo/myapp/src/pages/consumer/BatchaddScore'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "name": "employee",
        "icon": "user",
        "path": "/employee",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__employee' */'/Users/chenzijin/Desktop/demo/myapp/src/pages/employee'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "name": "order",
        "icon": "table",
        "path": "/order",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__order' */'/Users/chenzijin/Desktop/demo/myapp/src/pages/order'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/index.html",
        "redirect": "/consumer",
        "exact": true
      },
      {
        "path": "/",
        "redirect": "/consumer",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/chenzijin/Desktop/demo/myapp/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
