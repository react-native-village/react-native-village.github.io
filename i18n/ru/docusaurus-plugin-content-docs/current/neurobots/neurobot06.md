---
id: neurobot06
title: Подготовка рабочего окружения
sidebar_label: Подготовка рабочего окружения
---

import YouTube from 'react-youtube'

# Настройка рабочего окружения для разработки с Supabase, Docker и ngrok

Создание рабочего окружения для разработки приложений с использованием Supabase, Docker и ngrok — это важный шаг для эффективной работы. В этой статье мы рассмотрим, как установить и настроить каждую из этих технологий.

<YouTube videoId='ahD6pr87l0M' />

## 1. Supabase: Установите Supabase CLI

Supabase CLI предоставляет инструменты для разработки вашего проекта локально и развертывания на платформе Supabase.

### Установка Supabase CLI

Чтобы установить Supabase CLI, выполните следующую команду:

```bash
npm install supabase --save-dev
```

После установки вы можете запускать команды CLI, используя npx:

```bash
npx supabase <command>
```

Для проверки установленной версии Supabase CLI используйте команду:

```bash
supabase -v
```

Это позволит убедиться, что вы используете актуальную версию CLI, совместимую с необходимыми функциями. Рекомендуется использовать версию v1.46.4 или выше для лучшего опыта работы.

## 2. Docker Desktop: Установите Docker Desktop

Docker Desktop — это приложение, которое позволяет разрабатывать и тестировать приложения в контейнерах. Установка Docker необходима для работы Supabase CLI, так как он использует контейнеры для управления локальной средой.

### Установка Docker Desktop

1. Перейдите на официальный сайт Docker и скачайте установочный файл для вашей операционной системы.
2. Следуйте инструкциям на экране для завершения установки.
3. После установки запустите Docker Desktop и убедитесь, что он работает корректно.

## 3. ngrok: Установите ngrok с помощью Chocolatey

ngrok — это инструмент для создания безопасных туннелей к локальным серверам. Он позволяет вам делиться локальными веб-приложениями с другими пользователями через публичный URL.

### Установка ngrok

Если у вас установлен Chocolatey, вы можете установить ngrok с помощью следующей команды:

```bash
choco install ngrok
```

Если у вас нет Chocolatey, вы можете скачать ngrok с официального сайта и следовать инструкциям по установке.

## Заключение

Теперь вы настроили рабочее окружение с Supabase, Docker и ngrok. Эти инструменты помогут вам эффективно разрабатывать и тестировать ваши приложения. Supabase предоставляет мощные возможности для работы с базами данных, Docker позволяет управлять зависимостями в контейнерах, а ngrok упрощает доступ к вашим локальным приложениям. Удачи в разработке!

