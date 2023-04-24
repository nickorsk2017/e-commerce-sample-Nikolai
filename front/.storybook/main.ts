// @ts-ignore
const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [],
  typescript: {
    reactDocgen: 'none',
  },
  staticDirs: ["../public", "../src/styles"],
  features: {
    postcss: false,
  },

  /* https://storybook.js.org/docs/react/configure/webpack#full-control-mode */
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // example loading a mock package
      "next/config": path.join(__dirname, "./mocks/next-config.js")
    };

    config.module.rules = [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true,
                dynamicImport: true,
                decorators: true,
              },
              transform: {
                react: {
                  runtime: "automatic"
                }
              },
              target: "es2016"
            }
          }
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
                dynamicImport: true,
                decorators: true,
              },
              transform: {
                react: {
                  runtime: "automatic",
                }
              }
            }
          }
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "removeViewBox",
                    active: false,
                  },
                ],
              },
            },
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              url: false,
              modules: {
                auto: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportLocalsConvention: 'camelCaseOnly'
              },
            },
          },
          "sass-loader"
        ],
        include: path.resolve(__dirname, "../")
      },
    ]
    return config;
  },
  webpackFinal: config => {
    config.module.rules = config.module.rules.map(r => {
      const isWebpackAssetRule = String(r.test) === String(/\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/);
      return  isWebpackAssetRule ? {
        ...r,
        test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
      } : r;
    })
    return config;
  }
}
