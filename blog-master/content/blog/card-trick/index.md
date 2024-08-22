---
title: Card Trick
date: "2019-09-11"
description: "The blurb: you are a magician trying to impress the room with this amazing card trick. But also program it. Help!"
tags: ["c++", "deque", "sorting", "coach", "laaksonen"]
category: "Kattis"
image: ./cards.gif
---

### The card trick problem

Today's challenge is [Card Trick](https://open.kattis.com/problems/cardtrick2)!

**The trick is:**

1. move _one_ card at the bottom of the deque, reveal the next one. It's an **Ace**! :clap:
2. Discard the Ace, move _the next two cards_ one at a time at the bottom of the deque, and the next card you turn is ... a **2**! :clap: :clap:
3. Discard the 2, and again, move three cards :one at a time at the bottom of the deque, and the next is -unbelievably!- ... a **3**! :clap: :clap: :clap:
4. ... and so on and so forth, in front of your enraptured public.

Yes, it is what you think it is: the amateur illusionist can write a program that will allow her to arrange the card, and have it right anytime.

My friend and I sat a long while to get how this was implemented. We cutted out little pieces of paper representing the cards and tried to understand the logical sequence. After a while, our coach (who probably does not want his illustre name sullied in such an amateurish publication) took pity on us and told us ~~the solution~~ a huge hint.

The hint was: **try to put the LAST card first.**

To this powerful insight, we replied: "Thank you, we hungry and dumb, we'll go home now".

### The solution

After a few days, I realized that not only the hint was actually the solution, but that the implementation was given in the problem. We needed a **deque**! Fortunately, most programming languages\* have a data structure called deque.

\*<small>⚠️ no, really, I have no idea. But Python and C++ have. </small>

So what is so special about a deque? It's like an array, but we can put values at the front and the back. The key is to reproduce those steps, but in reverse order.

The problem gives us only one number, which is the biggest card. Let's take it from here!

1. We place the biggest card on the top of the deque -let's say it's a 5 :clubs:-. The deque has now one card. Now we pop it out from the bottom of the deque (...I know, it's the same card), place it at the top of the deque _again_ (I know, why?), pop it from the bottom of the deque (yes, it's weird!)... five times.

2. We take the next card, which is a 4 of :clubs:. We place it at the top of the deque, pop the five from the bottom of the deque (now that we have two cards so we look less unhinged!), place the five at the top of the deque, ... four times.

3. take the 3 of :clubs:, and repeat the procedure which looks less insane now that you have three cards ... three times.

4. ... when we reach the one, we have a perfectly organized deque to do this magic!

### Code

> The limit of language is the limit of one's world.
>
> > Ludvig Wittgenstein

A few days ago, I read that quote from Wittgenstein in the Pragmatic Programmer, so I decided to rewrite the code in c++. Here it is!

```cpp
#include <iostream>
#include <deque>

using namespace std;

int main() {
    int testCases;
    cin >> testCases;

    for (int i = 0; i < testCases; ++i) {
        int biggestCard;
        cin >> biggestCard;
        deque<int> cardDeque;
        //remember, first the biggest card...
        for (int i = biggestCard; i > 0; i--) {
            cardDeque.push_front(i);
            //doing the crazy described at 1. here:
            for (int j = 0; j < i; j++) {
                int card_to_move = cardDeque.back();
                cardDeque.pop_back();
                cardDeque.push_front(card_to_move);
            }
        }
        //producing the perfect deque:
        while (not cardDeque.empty()) {
            cout << cardDeque.front() << " ";
            cardDeque.pop_front();
        }
    }
    return 0;
}
```

### Time complexity

Is this a Big-noh-noh solution?

I checked what my much loved and much misunderstood [_Guide to competitive programming_](https://www.springer.com/us/book/9783319725468) had to say:

Here, page 54:

> The operations of a deque also work in _O(1)_ average time. However, deques have larger constant factors than vectors, so deques should be used only if ther is a need to manipulate both ends.

My analysis: So _O(1)_ \* n = _O(n)_. Sounds ok to me!

It works. We'll investigate the "constant factors" another time.

<center><img src="/cards.gif" alt="cards deck saying deal with it"
	title="A cute deck card" width="250" height="250" /></center>
