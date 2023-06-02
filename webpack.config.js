const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: ['./js/script.js', './js/addplayer.js', './js/accordion.js', './js/playpause.js', './js/popup.js', './js/languages.js', './js/merch.js', './js/progressbar.js', './js/imageSize.js']
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname), // Путь к каталогу, где расположены файлы для сервера
    },
    port: 3000, // Порт, на котором будет запущен сервер
    hot: true, // Включить горячую перезагрузку (Hot Module Replacement)
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};

