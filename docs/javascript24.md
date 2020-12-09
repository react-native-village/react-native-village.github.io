---
id: javascript24
title: Запрет на ключевое слово «this»
sidebar_label: Запрет на ключевое слово «this»
---

**Fetch API** позволяет JavaScript обмениваться данными с сервером с помощью HTTP-запросов и является более совершенной заменой классу `XMLHttpRequest`. Выполнение запросов осуществляется методом `fetch()`, который возвращает [Promise](https://react-native-village.github.io/docs/javascript24).

Удаление ключевого слова `this` из JavaScript делает язык лучше!

Причина в том, что this `зависит` от того, `как была вызвана` функция, а не от того, где она была определена. Поэтому `this` в JavaScript является источником большой путаницы в языке.

## `this` и его недостатки

`Методы` — это функции, которые хранятся в объектах. Для того, чтобы функция знала, над каким объектом работать, используется `this.`

Но `this` теряет контекст во многих ситуациях (неизвестно возвращаемое значение):

- теряет контекст `внутри вложенных функций`
- теряет контекст в обратных вызовах (callback)
- `this` теряет контекст, когда метод используется в качестве `обработчика события.`

Давайте возьмем случай компонента `React`, который создает поисковый запрос. В обоих методах, используемых в качестве обработчиков событий, при исползовании `this` теряется контекст:

```javascript
class SearchForm extends React.Component {
  handleChange(event) {
    const newQuery = Object.freeze({ text: event.target.value })
    this.setState(newQuery)
  }

  search() {
    const newQuery = Object.freeze({ text: this.state.text })
    if (this.props.onSearch) this.props.onSearch(newQuery)
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChange} value={this.state.text} />
        <button onClick={this.search} type="button">
          Search
        </button>
      </form>
    )
  }
}
```

Существует множество решений этих `проблем:`

- метод `bind()`
- шаблон `that/self`
- `стрелочные функции.`

### this не имеет инкапсуляции

this создает `проблемы безопасности`. Все объявленные элементы this являются `публичными.`

```javascript
class Timer {
  constructor(callback, interval) {
    this.timerId = 'secret'
  }
}

const timer = new Timer()
timer.timerId // secret не такой уже секретный
```

### Нет this, нет пользовательских прототипов

Что, если вместо того, чтобы пытаться исправить утраченный контекст this и проблемы с безопасностью, мы избавимся от всего этого разом?

`Удаление this` имеет множество `последствий.` Отсутствие this в основном означает `отсутствие class,` отсутствие `конструктора функции,` отсутствие `new,` отсутствие `Object.create().`

Удаление `this` означает `отсутствие` пользовательских `прототипов в целом`.

## `Лучший язык`

`JavaScript` — это и `функциональный язык` программирования, и язык на основе прототипов. Если мы `избавимся от this,` у нас останется JavaScript как функциональный язык программирования. Это даже лучше.

В то же время, `без this` JavaScript предлагает новый, уникальный способ выполнения объектно-ориентированного программирования без классов и наследования.

### Объектно-ориентированное программирование без this

Вопрос в том, как строить объекты без this. У нас будут два вида объектов:

- чистые объекты данных
- объекты поведения.

### Чистые объекты данных

`Чистые объекты` данных содержат `только данные` и не имеют поведения. Любое вычисленное поле будет заполнено при создании. Чистые объекты данных должны быть `неизменными`. Нам нужен `Object.freeze()` при их создании.

### Объекты поведения

`Объекты поведения` будут представлять собой коллекциями закрытий, имеющих `одно` и то же `частное состояние`. Давайте создадим объект `Timer` без использования this.

<!--```jsx live -->

```javascript
function learnJavaScript() {
  let Timer = (callback, interval) => {
    let timerId

    let executeAndStartTimer = () => {
      callback().then(function makeNewCall() {
        timerId = setTimeout(executeAndStartTimer, interval)
      })
    }

    let stop = () => {
      if (timerId) {
        clearTimeout(timerId)
        timerId = 0
      }
    }

    let start = () => {
      if (!timerId) {
        executeAndStartTimer()
      }
    }

    return Object.freeze({
      start,
      stop
    })
  }

  let getTodos = () => {
    console.log('call')
    return fetch('https://jsonplaceholder.typicode.com/todos')
  }

  const timer = Timer(getTodos, 2000)

  return timer.start()
}
```

У объекта timer есть два `открытых метода:` `start` и `stop.` Все остальное закрыто. Нет проблем `с потерей` this контекста, так как `нет this.`

### Память

Система прототипов `лучше` в плане использования памяти. Все методы создаются только один раз в `объекте-прототипе` и используются всеми экземплярами.

Затраты памяти на создание объектов поведения с использованием закрытий при создании тысяч одинаковых объектов значительны. Но чаще всего в приложении создается несколько `объектов поведения.` Если мы возьмем, например, объект поведения хранилища, в приложении будет только один его экземпляр, поэтому при использовании закрытий для его создания `не требуется` никаких дополнительных `затрат памяти.`

В приложении могут быть сотни или тысячи `чистых объектов` данных. Чистые объекты данных `не используют закрытия`, поэтому `нет затрат памяти.`

### Компоненты без this

this может потребоваться для многих компонентов, например, в `React` или `Vue`. В `React` мы можем создавать `функциональные компоненты` без сохранения состояния this, как `чистые функции.`

```javascript
function ListItem({ todo }){
  return (
    <li>
        <div>{ todo.title }</div>
        <div>{ todo.userName }</div>
    </li>
  );
```

Можно создавать компоненты с сохранением состояния `без использования this` с помощью `React Hooks.` Рассмотрим следующий пример:

```javascript
import React, { useState } from 'react'

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({ text: '' })

  function handleChange(event) {
    const newQuery = Object.freeze({ text: event.target.value })
    setQuery(newQuery)
  }

  function search() {
    const newQuery = Object.freeze({ text: query.text })
    if (onSearch) onSearch(newQuery)
  }

  return (
    <form>
      <input type="text" onChange={handleChange} />
      <button onClick={search} type="button">
        Search
      </button>
    </form>
  )
}
```

### Удаление arguments

Если мы избавимся от `this,` мы также должны избавиться от `arguments[],` поскольку у них одинаковое поведение динамического связывания.

Избавиться от этого arguments[] довольно легко. Мы просто используем новый синтаксис параметра `...rest.` На этот раз параметр `...rest` является объектом массива:

```jsx live
function learnJavaScript() {
  let addNumber = (total, value) =>
    total + value
  
  let sum = (...args) =>
    args.reduce(addNumber, 0)
  
  return sum(1, 2, 3, 4, 5, 6, 7) // 28
}
```
В данном примере метод `.reduce` запускается в контексте массива и вызывает функцию для каждого элемента. Но помимо этого, он аккумулирует результаты всех вызовов в одно значение. Его задача – подсчитать "сумму" всех элементов и вернуть ее.

## Итого

Лучший способ избежать связанных с this проблем — вообще не использовать this!

:::note JavaScript
JavaScript без this выглядит как лучший функциональный язык программирования!
:::

Мы можем создавать инкапсулированные объекты `без использования this` в качестве коллекций закрытий. С помощью `React Hooks` мы можем создавать `без this` компоненты с сохранением состояния.

Ключевое слово `this` не может быть удалено из `JavaScript,` без разрушения всех существующих приложений. Однако что можно сделать? Мы можем написать `собственный код` без this и позволить его использовать только в библиотеках. Тем временем вводятся новые правила `ESLint,` запрещающие использование `this.`

## Вопросы

1. Ключевое слово «this» это -

- объект, которому принадлежит метод
- первый аргумент в функции
- набор свойств.

2. Можно ли обойтись без this:

- можно, и лучше вообще не использовать
- можно, но не целесообразно
- нельзя, т.к. `this` не может быть удален из `JavaScript.`

3. Использование this:

- понижает безопасность кода
- повышает безопасность кода
- не влияет на безопасность.

4. JavaScript без this выглядит как лучший:

- функциональный язык программирования
- процедурный язык программирования
- логический язык программирования.

## Ссылки

1. [Статья "Удаление ключевого слова «this» из JavaScript делает язык лучше"](https://webformyself.com/udalenie-klyuchevogo-slova-this-iz-javascript/)
2. [Статья "Ключевое слово this в JavaScript"](https://habr.com/ru/post/464163/)
3. [MDN web doc. Статья "this"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px " alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)