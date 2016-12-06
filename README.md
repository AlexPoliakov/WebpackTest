# WebpackTest

  При применении webpack в ОС Windows, возникает ряд проблем с использованием путей к директориям и файлам.
В частности, для корректной работы, необходимл прописывать пути входа в директрию следующим образом:

context: __dirname + '\\frontend' - обратить внимание на двойной слеш;

  Также есть различия в прописывнии путей к директории при определении publicPath:
  
 publicPath: 'js/', - слеш перед папкой js не ставится;
 или же, как вншем случае: publicPath: '',
 
   Приведу цитату:

"....Не работает, скорее всего. потому-что операционная система windows, а там другой слеш для резделения пути. Чтоб заработало надо:
 new webpack.ContextReplacementPlugin(/node_modules\\moment\\locale/, /ru|en-gb/)
 а универсальное решение:
 new webpack.ContextReplacementPlugin(/node_modules[\\\/]moment[\\\/]locale/, /ru|en-gb/)..."
 
 new webpack.ContextReplacementPlugin( /moment[\\\/]locale$/, /^\.\/(ru|en-gb)$/ )
 
 
 Для запуска команд в ОС Windows, с переменной NODE_ENV, используем конструкцию:
 
  SET "NODE_ENV=development" && webpack
 
