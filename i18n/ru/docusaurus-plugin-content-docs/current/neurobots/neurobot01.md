---
id: neurobot01
title: Чат-бот с Senler
sidebar_label: Чат-бот с Senler
---

import YouTube from 'react-youtube'

# Инструкция по созданию чат-бота для ВКонтакте

## Введение
Создание чат-бота для вашего сообщества ВКонтакте с использованием сервиса Senler. Бот будет помогать отвечать на вопросы участников.

## Шаг 1: Создание чат-бота

1.  Вход в аккаунт 
   - Зайдите на сайт Senler и войдите в свой аккаунт.

2.  Выбор сообщества 
   - Выберите ваше сообщество.

3.  Создание нового бота 
   - Перейдите в раздел "Чат-боты".
   - Нажмите на кнопку "Новый бот".
   - Придумайте имя для бота и сохраните.
     Система автоматически создаст специальный ключ для работы бота.
   
   ![neurocoder](/img/neurobots/imag1.png)

## Шаг 2: Настройка общения бота

1.  Создание первого блока 
   - Создайте блок, который отправит пользователю сообщение: «Привет, напиши сообщение».
   - Поставьте галочку на "Ожидание ответа", чтобы бот ждал ответа от пользователя.

   ![neurocoder](/img/neurobots/imag2.png)

2.  Сохранение ответа пользователя 
   - Создайте действие для сохранения ответа пользователя в переменной `question`.
     Представьте, что вы записываете вопрос в блокнот, чтобы не забыть.

   ![neurocoder](/img/neurobots/imag3.png)

## Шаг 3: Интеграция с ChatGPT

1.  Создание блока интеграции 
   - Создайте блок интеграции с ChatGPT.
     Это как подключение вашего помощника к интернету, чтобы он мог искать информацию.

2.  Настройка ChatGPT 
   - Вставьте API ключ от OpenAI.
   - Выберите тип Chat и модель.
   - Установите инструкцию: "Reply to the user in their language".

3.  Использование переменной 
   - Вставьте переменную `question` в поле вопроса, чтобы бот знал, на что отвечать.

   ![neurocoder](/img/neurobots/imag4.png)

## Шаг 4: Отображение ответа

1.  Добавление сообщения 
   - Добавьте сообщение с переменной `chat_gpt_answer`, чтобы показать пользователю ответ от ChatGPT.

2.  Ожидание следующего ввода 
   - Отметьте "Ожидание ответа", чтобы бот ждал следующего ввода от пользователя.

   ![neurocoder](/img/neurobots/imag5.png)

## Шаг 5: Завершение настройки

1.  Соединение блоков 
   - Соедините все блоки, чтобы завершить цепочку взаимодействия.

   ![neurocoder](/img/neurobots/imag6.png)

## Шаг 6: Тестирование бота

1.  Проверка работы 
   - Протестируйте бота, начав чат, чтобы убедиться, что он правильно отвечает на простое приветствие или вопрос.

# Добавление режимов работы чат-бота

## Введение

Настройка чат-бота для работы в двух режимах: "Чистый GPT" и "Учитель по программированию". Это позволит боту адаптироваться к различным запросам пользователей.

## Шаг 1: Создание приветственного сообщения

1.  Создание сообщения 
   - Создайте сообщение с текстом: "Привет, выбери режим".

2.  Добавление кнопок 
   - Добавьте две кнопки:
     - Первая кнопка: название «Чистый GPT», тип: текст.
     - Вторая кнопка: название «Учитель по программированию», тип: текст.

     ![neurocoder](/img/neurobots/image1.1.png)

## Шаг 2: Настройка пользовательской переменной

1.  Создание блоков действий 
   - Создайте два блока действий.

2.  Добавление переменной `mode` 
   - Добавьте пользовательскую переменную `mode`.

3.  Установка значений 
   - Для первого действия установите значение `clean`.
   - Для второго действия установите значение `learn`.
   
   ![neurocoder](/img/neurobots/image1.21.png)
   ![neurocoder](/img/neurobots/image1.22.png)

## Шаг 3: Создание группы условий

1.  Создание блока «Группа условий» 
   - Создайте блок с двумя условиями:
     - Условие 1: пользовательская переменная `mode` равна `clean`.
     - Условие 2: пользовательская переменная `mode` равна `learn `.

    ![neurocoder](/img/neurobots/image1.4.png)

## Шаг 4: Настройка ChatGPT для режима "Учитель по программированию"

1.  Повторение настроек для режима "Чистый GPT" 
   - Настройте ChatGPT аналогично режиму "Чистый GPT".

2.  Изменение инструкции 
   - Установите инструкцию: "Reply to the user in their language. You are well versed in JavaScript, TypeScript, React Native, and similar technologies."

    ![neurocoder](/img/neurobots/image1.1.png)

## Шаг 5: Завершение настройки

1.  Добавление кнопки "Поменять режим" 
   - В сообщение с отправкой ответа от ChatGPT добавьте кнопку "Поменять режим".
   
   ![neurocoder](/img/neurobots/image1.6.png)
   
2.  Соединение блоков 
   - Соедините все блоки, чтобы завершить цепочку взаимодействия.

   ![neurocoder](/img/neurobots/image1.7.png)

## Шаг 6: Тестирование бота

1.  Сохранение и тестирование 
   - Сохраните настройки и протестируйте бота, чтобы убедиться, что он корректно переключается между режимами и отвечает на запросы пользователей.

<!-- # Создание ВК чат-бота с ИИ через senler.

![neurocoder](/img/neurobots/neuro1.png)

Создание чат-бота для вашего сообщества ВКонтакте с использованием сервиса Senler может быть выполнено в несколько шагов. Ниже представлена пошаговая инструкция по созданию бота, который будет взаимодействовать с пользователями через режимы "чистый" и "учитель".

<YouTube videoId='xpEy-Llex5k' />

## Шаг 1: Создание чат-бота

1.	Зайдите в личный кабинет на сайте Senler и выберите ваше сообщество.
2.	Перейдите в раздел "Чат-боты" и нажмите на кнопку "Новый бот".
3.	Введите название бота и сохраните. Система автоматически сгенерирует ключ бота.
## Шаг 2: Настройка первого блока

1.	Создайте первый блок, который отправит сообщение пользователю с текстом: «Привет, выбери режим».
2.	Добавьте две кнопки:
-	Первая кнопка: название «чистый», тип: текст.
-	Вторая кнопка: название «учитель», тип: текст.
-	Цвет кнопок можно выбрать произвольно.

![neurocoder](/img/neurobots/image1.1.png)

## Шаг 3: Создание пользовательских переменных

#### 1.	Создайте два блока действий и добавьте пользовательскую переменную mode.
#### 2.	Для первого действия установите значение clean, для второго — learn.
![neurocoder](/img/neurobots/image1.21.png)
![neurocoder](/img/neurobots/image1.22.png)

#### 3.  Добавьте сообщение "напиши вопрос", и поставьте галочку на "Ожидание ответа"
#### 4.  Создайте Действие, в котором ответ на сообщение, сохраняется в пользовательской переменной question.
![neurocoder](/img/neurobots/image1.3.png)


## Шаг 4: Группа условий

1.	Создайте блок «Группа условий» с двумя условиями:
-	Первое условие: mode = clean.
-	Второе условие: mode = learn.

![neurocoder](/img/neurobots/image1.4.png)


## Шаг 5: Интеграция с ChatGPT

1.	Создайте два блока интеграции с ChatGPT, один для каждого режима.
2.	Настройте ChatGPT для режима clean:
-	Вставьте API ключ от OpenAI.
-	Выберите тип Chat и модель.
-	Установите инструкцию: "Reply to the user in their language".
3.  В User(Вопрос) вставьте переменную question

![neurocoder](/img/neurobots/image1.5.png)


## Шаг 6: Настройка ChatGPT для режима learn

1.	Повторите настройки, как для режима clean, но измените инструкцию на: "Reply to the user in their language. You are well versed in JavaScript, TypeScript, React Native and similar languages".

## Шаг 7: Завершение настройки

#### 1.	Добавьте сообщение с переменной chat_gpt_answer ((%chat_gpt_answer%)).
#### 2.	Добавьте кнопку с названием «Поменять режим» и отметьте «Ожидание ответа».
![neurocoder](/img/neurobots/image1.6.png)
#### 3.	Соедините все блоки, чтобы завершить цепочку взаимодействия.
![neurocoder](/img/neurobots/image1.7.png)


## Тестирование бота
 -->

