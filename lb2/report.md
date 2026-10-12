# Лабораторна робота №2

## Проєктування тестів. Checklist, Test Cases та Decision Table

**Виконав:** Радомський Дмитро Миколайович
**Група:** 6-1213 2пі
**Дата виконання:** 13.10.2026

## Test Object

SauceDemo — Login
https://www.saucedemo.com/

## Test Conditions

- TCND-01 - успішна авторизація валідного користувача;
- TCND-02 - авторизація з неправильним Username;
- TCND-03 - авторизація з неправильним Password;
- TCND-04 - авторизація з порожнім Username;
- TCND-05 - авторизація з порожнім Password;
- TCND-06 - авторизація заблокованого користувача.

## Checklist

- [ ] Успішна авторизація з валідними даними.
- [ ] Відмова в авторизації з неправильним Username.
- [ ] Відмова в авторизації з неправильним Password.
- [ ] Перевірка порожнього Username.
- [ ] Перевірка порожнього Password.
- [ ] Відмова в авторизації заблокованого користувача.

### TC-LOGIN-01 - Успішна авторизація standard_user

**Type:** Positive

**Preconditions:**
- відкрита сторінка Login;
- користувач не авторизований.

**Test Data:**
- Username: standard_user
- Password: secret_sauce

**Steps:**
1. У поле Username ввести standard_user.
2. У поле Password ввести secret_sauce.
3. Натиснути кнопку Login.

**Expected Result:**

Після введення standard_user і правильного пароля та натискання Login користувач успішно авторизується і переходить на сторінку Products.

**Actual Result:**

Після введення standard_user і правильного пароля та натискання Login відкрилася сторінка Products

**Result:**

Pass

### TC-LOGIN-02 - Авторизація з неправильним Username

**Type:** Negative

**Preconditions:**
- відкрита сторінка Login;
- користувач не авторизований.

**Test Data:**
- Username: wrong_user
- Password: secret_sauce

**Steps:**
1. У поле Username ввести wrong_user.
2. У поле Password ввести secret_sauce.
3. Натиснути кнопку Login.

**Expected Result:**

Після введення wrong_user і правильного пароля та натискання Login користувач отримає повідомлення про некоректні дані на сторінці Login.

**Actual Result:**

Після введення wrong_user і правильного пароля та натискання Login користувач отримав повідомлення про некоректні дані.

**Result:**

Pass

### TC-LOGIN-03 - Авторизація з неправильним Password

**Type:** Negative

**Preconditions:**
- відкрита сторінка Login;
- користувач не авторизований.

**Test Data:**
- Username: standard_user
- Password: secre_sauce

**Steps:**
1. У поле Username ввести standard_user.
2. У поле Password ввести secre_sauce.
3. Натиснути кнопку Login.

**Expected Result:**

Після введення standard_user і неправильного пароля та натискання Login користувач отримає повідомлення про некоректні дані на сторінці Login.

**Actual Result:**

Після введення standard_user і неправильного пароля та натискання Login користувач отримав повідомлення про некоректні дані.

**Result:**

Pass

### TC-LOGIN-04 - Перевірка порожнього Username

**Type:** Negative

**Preconditions:**
- відкрита сторінка Login;
- користувач не авторизований.

**Test Data:**
- Username: Порожній
- Password: secret_sauce

**Steps:**
1. У поле Username нічого не вводити.
2. У поле Password ввести secret_sauce.
3. Натиснути кнопку Login.

**Expected Result:**

Після залишку ім'я користувача порожнім, введення правильного пароля та натискання Login користувач отримає повідомлення про відсутність ім'я користувача на сторінці Login.

**Actual Result:**

Після залишку ім'я користувача порожнім, введення правильного пароля та натискання Login користувач отримав повідомлення про відсутність ім'я користувача.

**Result:**

Pass

### TC-LOGIN-05 - Перевірка порожнього Password

**Type:** Negative

**Preconditions:**
- відкрита сторінка Login;
- користувач не авторизований.

**Test Data:**
- Username: standard_user
- Password: Порожній

**Steps:**
1. У поле Username standard_user
2. У поле Password нічого не вводити.
3. Натиснути кнопку Login.

**Expected Result:**

Після введення ім'я користувача, залишку пароля порожнім та натискання Login користувач отримає повідомлення про відсутність пароля на сторінці Login.

**Actual Result:**

Після введення ім'я користувача, залишку пароля порожнім та натискання Login користувач отримав повідомлення про відсутність пароля.

**Result:**

Pass

### TC-LOGIN-06 - Відмова в авторизації заблокованого користувача

**Type:** Negative

**Preconditions:**
- відкрита сторінка Login;
- користувач не авторизований.

**Test Data:**
- Username: locked_out_user
- Password: secret_sauce

**Steps:**
1. У поле Username locked_out_user.
2. У поле Password secret_sauce.
3. Натиснути кнопку Login.

**Expected Result:**

Після введення заблокованого ім'я користувача, правильного пароля порожнім та натискання Login користувач отримає повідомлення про блокування на сторінці Login.

**Actual Result:**

Після введення заблокованого ім'я користувача, правильного пароля порожнім та натискання Login користувач отримав повідомлення про блокування.

**Result:**

Pass

## Decision Table

| Conditions / Actions | R1 | R2 | R3 | R4 | R5 | R6 |
|---|---:|---:|---:|---:|---:|---:|
| Username входить до списку допустимих? | T | F | T | F | T | T |
| Password правильний? | T | T | F | T | F | T |
| Користувач заблокований? | F | F | F | F | F | T |
| **A1: перехід до Products** | X | | | | | |
| **A2: повідомлення про блокування** | | | | | | X |
| **A3: повідомлення про неправильні credentials** | | X | X | X | X | |

### Покриття Decision Table

- TC-LOGIN-01 → R1 Username valid + Password valid + not locked = Products
- TC-LOGIN-02 → R2 Username invalid + Password valid + not locked = Login denied
- TC-LOGIN-03 → R3 Username valid + Password invalid + not locked = Login denied
- TC-LOGIN-04 → R4 Username invalid + Password valid + not locked = Login denied
- TC-LOGIN-05 → R5 Username valid + Password invalid + not locked = Login denied
- TC-LOGIN-06 → R6 Username valid + Password valid + locked = Login denied

## Результати виконання

| Test Case | Type | Result |
|---|---|---|
| TC-LOGIN-01 | Positive | Pass |
| TC-LOGIN-02 | Negative | Pass |
| TC-LOGIN-03 | Negative | Pass |
| TC-LOGIN-04 | Negative | Pass |
| TC-LOGIN-05 | Negative | Pass |
| TC-LOGIN-06 | Negative | Pass |


## Висновок
Під час тестування описаних у Checklist тестів було виявлено, що система опрацьовує вище вказані випадки коректно. Результатом виконання тестування є проходження всіх тестів з відмоткою "Pass".