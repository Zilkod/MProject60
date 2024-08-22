---
title: Hemligt lösenord och Gånger tabeller
date: "2019-10-13"
description: "Här har vi lärt oss om for-loopar och if satser!"
tags: ["python", "for loop", "if-statement"]
category: "Tellus"
---

### Hemligt lösenord

Vi har lärt oss om for loopar och if-satser.

```python
hemligt_losenord = 'MAMMA'

losenord = input('Välkommen! Skriv ditt lösenord.\n')

if(losenord == hemligt_losenord):
    print('Bra jobbat!')
elif(losenord == hemligt_losenord.lower()):
    print('Försök med stora bokstäver! Visa kärlek till mamma!')
else:
    print('Fel!')
```

### Gångertabeller

```python
import time

for i in range(5):
    print("I dag ska vi göra gånger tabeller!\n".upper())
    # funktion med argument
    # time.sleep(1)

for i in range(3):
    print("Och vilken tal ska vi multiplicera i dag?\n")

print("Sriv talet som vi ska multiplicera!")
# testa utan int()!
tal = int(input())

for i in range(11):
    print(tal, "x", i, "=", tal*i)

```
