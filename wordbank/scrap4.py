#!/bin/python3

with open('words_alpha.txt') as f, open('fourLetters.txt', 'w') as outFile:
    for line in f:
        for word in line.split():
            if len(word) == 4:
                outFile.write(word + '\n')
