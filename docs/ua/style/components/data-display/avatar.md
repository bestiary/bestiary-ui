# Avatar Style API <VersionBadge module="style" />
Модульний візуальний елемент для зображення користувачів або об’єктів за допомогою зображень, ініціалів або піктограм.

## Анатомія
Компонент дотримується структури BEM. Використовуйте відповідний внутрішній клас залежно від типу вмісту:

| Клас               | Роль          | Вимога                                                                    |
|:-------------------|:--------------|:--------------------------------------------------------------------------|
| `.b-avatar`        | **Container** | Головний контейнер. Встановлює розміри та фон.                            |
| `.b-avatar__image` | **Image**     | Використовується для фотографій користувачів.                             |
| `.b-avatar__label` | **Initials**  | Використовується для тексту. Автоматично перетворюється на великі літери. |
| `.b-avatar__icon`  | **Icon**      | Оболонка для SVG-іконок. Встановлює розміри.                              |

## Модифікатори
Готові класи для зміни розміру та форми Аvatar.

### Розміри
| Клас                     | Токен                |
|:-------------------------|:---------------------|
| `.b-avatar--size-small`  | `--b-avatar-sm-size` |
| `.b-avatar--size-medium` | `--b-avatar-md-size` |
| `.b-avatar--size-large`  | `--b-avatar-lg-size` |
| `.b-avatar--size-xlarge` | `--b-avatar-xl-size` |

### Форми
| Клас                      | Токен                    | Опис                        |
|:--------------------------|:-------------------------|:----------------------------|
| `.b-avatar--shape-square` | `--b-radius-interactive` | Стандартні закруглені кути. |
| `.b-avatar--shape-circle` | `--b-radius-full`        | Ідеально кругла форма.      |

## Публічні токени API
Інтерфейс Bestiary підтримує багаторівневу систему токенів. Ви можете змінювати **основні токени** для конкретного екземпляра або перенастроювати **пресети масштабування**, щоб змінити зовнішній вигляд усіх аватарів певного розміру в усьому додатку.

### 1. Основні токени
Ці токени безпосередньо використовуються контейнером `.b-avatar`. Використовуйте їх для конкретного одноразового оформлення.

| Токен                      | Опис                                                     |
|:---------------------------|:---------------------------------------------------------|
| `--b-avatar-size`          | Ширина та висота головного контейнера.                   |
| `--b-avatar-background`    | Колір фону контейнера.                                   |
| `--b-avatar-color`         | Колір ініціалів та іконок.                               |
| `--b-avatar-border-radius` | Закруглення кутів контейнера.                            |
| `--b-avatar-border`        | Скорочений запис для рамки (наприклад, `2px solid red`). |
| `--b-avatar-font-size`     | Розмір шрифту для ініціалів.                             |
| `--b-avatar-font-family`   | Сімейство шрифту для ініціалів.                          |
| `--b-avatar-font-weight`   | Насиченість шрифту для ініціалів.                        |
| `--b-avatar-icon-size`     | Розмір іконки SVG.                                       |
| `--b-avatar-transition`    | Тривалість переходу та плавність.                        |

### 2. Пресети масштабування
Ці токени визначають значення за замовчуванням для кожного модифікатора розміру. При використанні `.b-avatar--size-small` основним токенам присвоюються токени `sm`.

| Токен                     | Опис                               |
|:--------------------------|:-----------------------------------|
| `--b-avatar-sm-size`      | Ширина/висота для розміру sm.      |
| `--b-avatar-sm-font-size` | Розмір шрифту для розміру sm.      |
| `--b-avatar-sm-icon-size` | Розмір іконки для розміру sm.      |
| `--b-avatar-md-size`      | Ширина/висота для розміру md.      |
| `--b-avatar-md-font-size` | Розмір шрифту для розміру md.      |
| `--b-avatar-md-icon-size` | Розмір іконки для розміру md.      |
| `--b-avatar-lg-size`      | Ширина/висота для розміру lg.      |
| `--b-avatar-lg-font-size` | Розмір шрифту для розміру lg.      |
| `--b-avatar-lg-icon-size` | Розмір іконки для розміру lg.      |
| `--b-avatar-xl-size`      | Ширина/висота для розміру x-large. |
| `--b-avatar-xl-font-size` | Розмір шрифту для розміру x-large. |
| `--b-avatar-xl-icon-size` | Розмір іконки для розміру x-large. |

### 3. Токени групи
Спеціальні токени для компонента `.b-avatar-group`.

| Токен                           | Опис                                         |
|:--------------------------------|:---------------------------------------------|
| `--b-avatar-group-overlap`      | Негативний відступ для перекриття елементів. |
| `--b-avatar-group-border-width` | Товщина рамки.                               |
| `--b-avatar-group-border-color` | Колір рамки.                                 |

## Приклади та реалізація

### Базова реалізація
Найпростіший варіант аватара, що складається з зображення або текстового напису.

<div class="card">
  <div class="b-avatar">
    <img src="https://i.pravatar.cc/150?u=1" class="b-avatar__image" alt="User">
  </div>
  <div class="b-avatar">
    <span class="b-avatar__label">JD</span>
  </div>
</div>

::: code-group
```html [Image]
<div class="b-avatar">
  <img src="avatar.jpg" class="b-avatar__image" alt="John Doe">
</div>
```
```html [Label]
<div class="b-avatar">
  <span class="b-avatar__label">JD</span>
</div>
```
:::

### З іконкою
Використання вирівняної по центру іконки всередині контейнера аватара.

<div class="card">
    <div class="b-avatar b-avatar--size-large b-avatar--shape-circle">
        <svg class="b-avatar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    </div>
</div>

```html
<div class="b-avatar b-avatar--size-large b-avatar--shape-circle">
    <svg class="b-avatar__icon">...</svg>
</div>
```

### Варіанти розмірів
Використання модифікаторів розміру для масштабування компонента.

<div class="card items-center">
  <div class="b-avatar b-avatar--size-small"><span class="b-avatar__label">SM</span></div>
  <div class="b-avatar b-avatar--size-medium"><span class="b-avatar__label">MD</span></div>
  <div class="b-avatar b-avatar--size-large"><span class="b-avatar__label">LG</span></div>
  <div class="b-avatar b-avatar--size-xlarge"><span class="b-avatar__label">XL</span></div>
</div>

```html
<div class="b-avatar b-avatar--size-small"><span class="b-avatar__label">SM</span></div>
<div class="b-avatar b-avatar--size-medium"><span class="b-avatar__label">MD</span></div>
<div class="b-avatar b-avatar--size-large"><span class="b-avatar__label">LG</span></div>
<div class="b-avatar b-avatar--size-xlarge"><span class="b-avatar__label">XL</span></div>
```

### Варіанти форм
Перемикання між квадратним (заокругленим) та круглим дизайном.

<div class="card">
  <div class="b-avatar b-avatar--shape-square"><span class="b-avatar__label">SQ</span></div>
  <div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">CR</span></div>
</div>

```html
<div class="b-avatar b-avatar--shape-square"><span class="b-avatar__label">SQ</span></div>
<div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">CR</span></div>
```

### З Бейджем
Аватари можна поєднувати зі значками статусу.

<div class="card">
    <div class="b-overlay-badge">
        <div class="b-avatar b-avatar--size-large b-avatar--shape-circle">
            <img src="https://i.pravatar.cc/150?u=5" class="b-avatar__image" alt="User">
        </div>
        <div class="b-overlay-badge__badge b-badge b-badge--severity-primary"></div>
    </div>
</div>

```html
<div class="b-overlay-badge">
    <div class="b-avatar b-avatar--size-large b-avatar--shape-circle">
        <img src="avatar.jpg" class="b-avatar__image" alt="User">
    </div>
    <div class="b-overlay-badge__badge b-badge b-badge--severity-primary"></div>
</div>
```

### Індивідуальне оформлення (перевизначення токенів)
Приклад використання токенів публічного API для створення великого аватара з індивідуальним забарвленням.

<div class="card">
    <div class="b-avatar" style="--b-avatar-size: 64px; --b-avatar-background: var(--b-amber-500); --b-avatar-color: black; --b-avatar-border: 4px solid var(--b-amber-200);">
        <span class="b-avatar__label">VIP</span>
    </div>
</div>

```html
<div class="b-avatar" style="--b-avatar-size: 64px; --b-avatar-background: var(--b-amber-500); --b-avatar-color: black; --b-avatar-border: 4px solid var(--b-amber-200);">
    <span class="b-avatar__label">VIP</span>
</div>
```

### Група
Розміщення декількох аватарів з автоматичним накладенням.

<div class="card">
  <div class="b-avatar-group">
    <div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">A</span></div>
    <div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">B</span></div>
    <div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">C</span></div>
  </div>
</div>

```html
<div class="b-avatar-group">
    <div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">A</span></div>
    <div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">B</span></div>
    <div class="b-avatar b-avatar--shape-circle"><span class="b-avatar__label">C</span></div>
</div>
```