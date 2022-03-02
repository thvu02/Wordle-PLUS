#!/bin/python3

with open('words_alpha.txt') as f, open('sixLetters.txt', 'w') as outFile:
    for line in f:
        for word in line.split():
            if len(word) == 6:
                outFile.write(word + '\n')
