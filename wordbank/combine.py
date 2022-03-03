#!/bin/python3

with open('answers.txt') as f1, open('guesses.txt') as f2, open('fiveLetters.txt', 'w') as f3:
    listed = []
    for line in f1:
        for word in line.split():
            listed.append(word)
    for line in f2:
        for word in line.split():
            listed.append(word)
    for word in sorted(listed):
        f3.write(word + '\n')
