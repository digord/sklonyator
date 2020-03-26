# sklonyator
Склонятор - плагин для VueJS. Склонение русских слов.

## Как запустить
1.) npm i

2.) npm run serve

## Как использовать в своем проекте
1.) Скопируйте файл src/plugins/sklonyator.js

2.) Подключите в свой проект:
    import sklonyator from './plugins/sklonyator'
    Vue.use(sklonyator);

3.) В своем .vue компоненте в блоке template используйте так:

    <div>5 {{ $sklonyator(5, ['заявка', 'заявки', 'заявок']) }}</div>
или так
    <div>{{ 5 | sklonyator(['заявка', 'заявки', 'заявок']) }}</div>
    
