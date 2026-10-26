# Лабораторна робота №3

## Модульне тестування програмного коду за допомогою Vitest

**Виконав: Радомський Дмитро Миколайович**  
**Група: 6-1213 2пі**  
**Дата: 26.10.2026**

## Test Object

`src/shop-utils.js`

## Функції

- `calculateDiscount()`
- `validateQuantity()`
- `getShippingCost()`

## Test Design

### calculateDiscount
Правила:

● price ≥ 0;

● 0 ≤ percent ≤ 100;

● result = price - price × percent / 100.

Якщо price або percent не відповідають вимогам, функція генерує Error.

### validateQuantity

Кількість повинна бути:

● цілим числом;

● 1 ≤ quantity ≤ 10.

Якщо значення допустиме - true, інакше - false.

### getShippingCost

Правила:

● total < 0 -> Error;

● 0 ≤ total < 1000 -> 100;

● total ≥ 1000 -> 0

## Результати тестування

| Група тестів | Кількість | Result |
|---|---:|---|
| calculateDiscount | 8 | PASS |
| validateQuantity | 7 | PASS |
| getShippingCost | 3 | PASS |

## Coverage

| Metric | Result |
|---|---:|
| Statements | 100 |
| Branches | 100 |
| Functions | 100 |
| Lines | 100 |

## Висновок

Впродовж виконання лабораторної роботи були отримані навички модульного тестування програмного коду за допомогою Vitest.