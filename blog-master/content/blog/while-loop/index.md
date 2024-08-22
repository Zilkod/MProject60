---
title: While-loopar
date: "2019-10-20"
description: "Oäääändliga loopar"
tags: ["python", "while loop"]
category: "Tellus"
---

### While loop

Hur kan vi göra en väldigt irriterande program?

```python
#true betyder sant på engelska. Lägg märke att det måste skrivas med stora bokstav!
inte_trott = True

while(inte_trott):
    svar = input("Är du trött på att se detta meddelande? Svara ja eller nej!\n").lower().strip()

    if(svar=="ja"):
        print("Tack så mycket och hej då!")
        # False betyder falsk på engelska
        inte_trott = False

    elif(svar=="nej"):
        print("Vi fortsätter isf!")

    else:
        print("Jag förstår inte vad du menar!")

```

```python
while(True):
    svar = input("Är du trött på att se detta meddelande? Svara ja eller nej!\n").lower().strip()

    if(svar=="ja"):
        print("Tack så mycket och hej då!")
        break

    elif(svar=="nej"):
        print("Vi fortsätter isf!")

    else:
        print("Jag förstår inte vad du menar!")


```
